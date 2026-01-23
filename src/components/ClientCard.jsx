import { useState } from 'react'

function ClientCard({ client, isEditing, onEdit, onSave, onCancelEdit, onClose }) {
  const [formData, setFormData] = useState({
    firstName: client.firstName,
    lastName: client.lastName,
    phone: client.phone,
    email: client.email,
    notes: client.notes
  })

  if (isEditing) {
    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '30px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        minHeight: '600px',
        border: '1px solid #ddd'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ margin: 0, color: '#333', fontSize: '24px' }}>
            ✏️ Редактирование клиента
          </h2>
          <button 
            onClick={onCancelEdit}
            style={{
              backgroundColor: '#f5f5f5',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            ✕ Закрыть
          </button>
        </div>
        
        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '20px' }}>
            Основная информация
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Имя *</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '6px',
                  fontSize: '16px'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Фамилия *</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '6px',
                  fontSize: '16px'
                }}
              />
            </div>
          </div>
          
          <div style={{ marginTop: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Телефон</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '6px',
                fontSize: '16px'
              }}
            />
          </div>
          
          <div style={{ marginTop: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '6px',
                fontSize: '16px'
              }}
            />
          </div>
        </div>
        
        <div>
          <h4 style={{ color: '#666', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '20px' }}>
            Заметки фотографа
          </h4>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
            rows={8}
            style={{
              width: '100%',
              padding: '15px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              fontSize: '16px',
              resize: 'vertical'
            }}
            placeholder="Добавьте заметки о клиенте..."
          />
        </div>
        
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
          <button 
            onClick={onCancelEdit}
            style={{
              padding: '12px 24px',
              backgroundColor: '#f5f5f5',
              color: '#333',
              border: '1px solid #ddd',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Отмена
          </button>
          <button 
            onClick={() => onSave(formData)}
            style={{
              padding: '12px 24px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Сохранить изменения
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '30px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      minHeight: '600px',
      border: '1px solid #ddd'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ margin: 0, color: '#333', fontSize: '24px' }}>
          👤 Карточка клиента
        </h2>
        <div>
          <button 
            onClick={onEdit}
            style={{
              marginRight: '10px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            Редактировать
          </button>
          <button 
            onClick={onClose}
            style={{
              backgroundColor: '#f5f5f5',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            ✕ Закрыть
          </button>
        </div>
      </div>
      
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ color: '#666', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '20px' }}>
          📋 Контактная информация
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '13px', color: '#888', marginBottom: '5px' }}>Имя</div>
            <div style={{ fontSize: '18px', fontWeight: '500' }}>{client.firstName}</div>
          </div>
          <div>
            <div style={{ fontSize: '13px', color: '#888', marginBottom: '5px' }}>Фамилия</div>
            <div style={{ fontSize: '18px', fontWeight: '500' }}>{client.lastName}</div>
          </div>
        </div>
        
        <div style={{ marginTop: '25px' }}>
          <div style={{ fontSize: '13px', color: '#888', marginBottom: '5px' }}>Телефон</div>
          <div style={{ fontSize: '18px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '12px', fontSize: '20px' }}>📞</span>
            {client.phone || <span style={{ color: '#999' }}>Не указан</span>}
          </div>
        </div>
        
        <div style={{ marginTop: '20px' }}>
          <div style={{ fontSize: '13px', color: '#888', marginBottom: '5px' }}>Email</div>
          <div style={{ fontSize: '18px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '12px', fontSize: '20px' }}>📧</span>
            {client.email || <span style={{ color: '#999' }}>Не указан</span>}
          </div>
        </div>
      </div>
      
      <div>
        <h4 style={{ color: '#666', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '20px' }}>
          📝 Заметки фотографа
        </h4>
        <div style={{
          backgroundColor: '#fff8e1',
          border: '1px solid #ffecb3',
          borderRadius: '8px',
          padding: '25px',
          minHeight: '200px',
          fontSize: '16px',
          lineHeight: '1.6'
        }}>
          {client.notes ? (
            client.notes.split('\n').map((line, index) => (
              <p key={index} style={{ margin: '0 0 12px 0' }}>{line}</p>
            ))
          ) : (
            <div style={{ color: '#999', textAlign: 'center', padding: '40px' }}>
              Заметок пока нет. Нажмите "Редактировать" чтобы добавить информацию.
            </div>
          )}
        </div>
      </div>
      
      <div style={{ 
        marginTop: '30px', 
        paddingTop: '20px', 
        borderTop: '1px solid #eee', 
        fontSize: '13px', 
        color: '#888',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div>ID клиента: <code>{client.id}</code></div>
        <div>Добавлен: {new Date(parseInt(client.id)).toLocaleDateString('ru-RU')}</div>
      </div>
    </div>
  )
}

export default ClientCard
