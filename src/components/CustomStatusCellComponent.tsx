import React from 'react'

const statusColors: Record<string, string> = {
  okay: '#10B981',
  slow: '#F59E0B',
  failing: '#EF4444',
}

export const CustomStatusCellComponent: React.FC<{ cellData: string }> = ({ cellData }) => {
  const color = statusColors[cellData] || 'grey'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
      <span
        style={{
        width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: color,
      }}
      />
      <span style={{ textTransform: 'capitalize' }}>Status {cellData || 'N/A'}</span>
    </div>
  )
};

export default CustomStatusCellComponent