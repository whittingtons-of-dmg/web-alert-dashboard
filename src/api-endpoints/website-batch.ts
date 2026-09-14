import type { Endpoint } from 'payload'

export const websiteBatchCheck: Endpoint = {
  path: '/batch/websites/check-uptime',
  method: 'get',
  handler: async (req) => {
    try {
      // 2. Fetch all websites using the Payload local API
      const { docs: websites } = await req.payload.find({
        collection: 'websites',
        limit: 1000
      })

      // 3. Process the websites (example: parallel native fetch checks)
      const results = await Promise.all(
        websites.map(async (site) => {
          try {
            const startTime = Date.now();
            const pingTS = new Date().toISOString();
            const response = await fetch(site.title, {
              method: 'HEAD',
              signal: AbortSignal.timeout(30000),
            });
            const duration = Date.now() - startTime;
            return {
              site_Id: site.id,
              site_Title: site.title,
              site_Status: response.ok ? 'ok' : 'failing',
              site_ResponseTime: duration,
              site_lastCheck: pingTS,

              // set in a separate code chunk
              event_Title: response.status,
              event_StatusCode: response.status,
            }
          } catch (err) {
            return {
              id: site.id,
              title: site.title,
              status: 'unknown',
              error: err instanceof Error ? err.message : 'Fetch failed. Unknown network issue',
            }
          }
        }),
      )

      // 3.1 query results object for failing instances for DNS lookup nad event reporting
      // 3.5 Update Website Data/Relationships with event report

      // 4. Return a standardized web Response (Payload 3 uses Web standard request/responses)
      return Response.json({
        success: true,
        checkedAt: new Date().toISOString(),
        results,
      })
    } catch (error) {
      req.payload.logger.error(error);
      return Response.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
  },
}