# Developer Checklist

## Backend Checklist
- [ ] Create a global config for global settings across sites
  - Set a window in seconds that merits a good, or slow response time green/yellow
- [ ] Create a web property model
  - domain name
  - frequency to scan (in seconds)
  - cms / framework name
  - main server language name
  - last checked timestamp
  - avg response time (in seconds)
  - has one server
  - has many failed responses
- [ ] Create a server model (as a filter for grouping)
  - server name
  - server provider name
  - has many properties (websites)
- [ ] Create a failed response model
  - has one web property
  - timestamp (date occurred)
  - the failed response error code
  - the full failed response
  - total time in seconds until response
- [ ] Create an alert e-mail service
  - send emails when events occur (sent to users in the CMS)
- [ ] Create a monthly report e-mail service
  - a summarization of all the events that occurred within a month sent via email on the first day of the next month

## Front End
- [ ] A nice async list of web properties and displays the minimal data for quick meaningful glances
- [ ] Filterable by column data
- [ ] Tabs for different lists to view (Servers, Websites, Fail Events, Slow Events)
