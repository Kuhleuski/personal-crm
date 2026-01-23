function ClientList({ clients, selectedClient, onSelect, onDelete }) {
  if (clients.length === 0) {
    return (
      <div style={{
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        color: '#666',
        fontSize: '14px'
      }}>
        <div style={{ fontSize: '32px', marginBottom: '10px' }}>👤</div>
        <p>Нет клиентов</p>
      </div>
    )
  }

  return (
    <div>
      <h3 style={{ color: '#555', marginBottom: '20px', fontSize: '16px' }}>
        Клиенты ({clients.length})
      </h3>
      
      <div style={{ maxHeight: '650px', overflowY: 'auto' }}>
        {clients.map(client => (
          <div 
            key={client.id} 
            onClick={() => onSelect(client)}
            style={{
              marginBottom: '10px',
              padding: '12px',
              border: selectedClient?.id === client.id ? '2px solid #4CAF50' : '1px solid #ddd',
              borderRadius: '6px',
              backgroundColor: selectedClient?.id === client.id ? '#f0f9f0' : '#fff',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: '14px', color: '#333', display: 'block', marginBottom: '3px' }}>
                  {client.firstName} {client.lastName}
                </strong>
                {client.phone && (
                  <div style={{ fontSize: '12px', color: '#555' }}>
                    {client.phone}
                  </div>
                )}
              </div>
              {/* <button 
                onClick={(e) => {
                  e.stopPropagation()
                  onDelete(client)
                }}
                style={{
                  backgroundColor: '#ffebee',
                  color: '#c62828',
                  border: '1px solid #ffcdd2',
                  borderRadius: '3px',
                  padding: '4px 8px',
                  cursor: 'pointer',
                  fontSize: '11px'
                }}
              >
                Удалить
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientList
