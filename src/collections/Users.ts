import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Developer',
          value: 'developer',
        },
        {
          label: 'Account Executive',
          value: 'ae',
        },
        {
          label: 'Associate',
          value: 'associate',
        },
      ],
    },
  ],
}
