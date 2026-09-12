import type { GlobalConfig } from 'payload'

export const SiteConfig: GlobalConfig = {
  slug: 'site-config',
  fields: [
    {
      name: 'slow_threshold_ms',
      type: 'number',
      label: 'Slow Response Threshold (ms*)',
      required: true,
      defaultValue: 5000,
    },
  ],
}
