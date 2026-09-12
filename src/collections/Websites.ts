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
      label: 'Domain Name',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      label: 'AE Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'AE Email',
      required: true,
    },
    {
      name: 'framework_cms',
      type: 'select',
      admin: {
        isClearable: true,
      },
      options: [
        { label: '-- Select an Option --', value: '' },
        { label: 'SilverStripe', value: 'SilverStripe' },
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
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'avg_response_ms',
      type: 'text',
      defaultValue: 'N/A',
    },
    {
      name: 'parent_server',
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
