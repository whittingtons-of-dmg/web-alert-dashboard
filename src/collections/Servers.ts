import type { CollectionConfig } from 'payload'

export const Servers: CollectionConfig = {
  slug: 'servers',
  auth: false,
  admin: {
    useAsTitle: 'title', // Tells Payload to use the 'title' field instead of ID
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Server Name',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      label: 'Server Location',
      required: true,
      defaultValue: 'AWS',
    },
    {
      name: 'addresses',
      label: 'Public Addresses',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'ipv4',
          type: 'text'
        }
      ]
    },
    {
      name: 'properties',
      type: 'join',
      collection: 'websites',
      on: 'parent_server',
      admin: {
        defaultColumns: ['title', 'framework_cms', 'status'], // Columns displayed in the admin UI list
      },
    },
  ],
}
