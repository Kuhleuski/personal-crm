function DeleteModal({ client, onConfirm, onCancel }) {
  if (!client) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#f44336' }}>⚠️ Подтверждение удаления</h3>
        <p>Вы уверены, что хотите удалить клиента <strong>{client.firstName} {client.lastName}</strong>?</p>
        <p style={{ color: '#666', fontSize: '14px' }}>Это действие нельзя отменить.</p>
        <div style={{ marginTop: '20px' }}>
          <button
            onClick={onConfirm}
            style={{
              marginRight: '10px',
              padding: '10px 20px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Да, удалить
          </button>
          <button
            onClick={onCancel}
            style={{
              padding: '10px 20px',
              backgroundColor: '#757575',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
