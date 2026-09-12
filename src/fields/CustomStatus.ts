import type { Field } from 'payload'

export const CustomStatus: Field = {
  name: 'status',
  type: 'select',
  options: [
    { label: 'Okay', value: 'okay' },
    { label: 'Slow', value: 'slow' },
    { label: 'Failing', value: 'failing' },
  ],
  defaultValue: 'okay',
  admin: {
    components: {
      Field: '@/components/CustomStatusCellComponent', // Custom input view
      Cell: '@/components/CustomStatusCellComponent', // List view representation
    },
  },
}
