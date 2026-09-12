import type { CollectionConfig } from 'payload'

import { CustomStatus } from '@/fields/CustomStatus'

export const Websites: CollectionConfig = {
  slug: 'websites',
  auth: false,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    CustomStatus,
    {
      name: 'title',
      type: 'text',
      label: 'Website Domain',
      required: true,
      validate: (value: any) => {
        const websiteRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/

        if (value && !websiteRegex.test(value)) {
          return 'Please exclude https://, http://, or trailing slashes.'
        }
        return true
      },
    },
    {
      name: 'email',
      type: 'email',
      label: 'AE Email',
      required: true,
    },
    {
      name: 'framework_cms',
      label: 'Framework/CMS',
      type: 'select',
      required: true,
      admin: {
        isClearable: true,
      },
      options: [
        { label: '-- Select an Option --', value: '' },
        { label: 'SilverStripe', value: 'SilverStripe' },
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'angular' },
        { label: 'Next.js/Payload', value: 'next_payload' },
        { label: 'Laravel', value: 'Laravel' },
        { label: 'Drupal', value: 'Drupal' },
        { label: 'WordPress', value: 'WordPress' },
        { label: '.NET', value: '.NET' },
        { label: 'ASP', value: 'ASP' },
        { label: 'VB', value: 'VB' },
      ],
      defaultValue: '',
    },
    {
      name: 'last_checked',
      label: 'Last Checked',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'avg_response_ms',
      label: 'AVG Response Time (ms)',
      type: 'text',
      defaultValue: 'N/A',
    },
    {
      name: 'parent_server',
      label: 'Parent Server',
      type: 'relationship',
      relationTo: 'servers',
      required: true,
    },
    {
      name: 'website_events',
      type: 'join',
      collection: 'events',
      on: 'event_owner',
      admin: {
        defaultColumns: ['title', 'status_code', 'timestamp', 'dns_resolves'], // Columns displayed in the admin UI list
      },
    },
  ],
}
