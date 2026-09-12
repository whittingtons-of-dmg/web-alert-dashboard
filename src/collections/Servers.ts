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
      name: 'properties',
      type: 'join',
      collection: 'websites',
      on: 'parent_server',
      admin: {
        defaultColumns: ['title', 'name', 'framework_cms', 'status'], // Columns displayed in the admin UI list
      },
    },
  ],
}
