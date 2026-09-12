import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  auth: false,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Event Title',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'status_code',
      type: 'text',
      label: 'Status Code',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'dns_resolves',
      type: 'checkbox',
      label: 'DNS Resolves',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'location_updated',
      type: 'checkbox',
      label: 'DNS IP was Changed',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'timestamp',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        readOnly: true,
      },
    },
    {
      name: 'event_owner',
      type: 'relationship',
      relationTo: 'websites', // String: Single collection
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'serialized_response',
      type: 'json',
      admin: {
        readOnly: true,
      },
    },
  ],
}
