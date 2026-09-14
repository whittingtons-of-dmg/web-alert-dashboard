import type { Field } from 'payload'

export const CustomStatusField: Field = {
  name: 'status',
  type: 'select',
  options: [
    { label: 'OK', value: 'ok' },
    { label: 'Slow', value: 'slow' },
    { label: 'Failing', value: 'failing' },
    { label: 'N/A', value: 'unknown' },
  ],
  defaultValue: 'unknown',
  admin: {
    components: {
      Field: '@/components/CustomStatusCellComponent', // Custom input view
      Cell: '@/components/CustomStatusCellComponent', // List view representation
    },
  },
}
