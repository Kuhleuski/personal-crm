import { useState } from 'react'

function AddClientForm({ onAdd, onCancel }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    notes: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.firstName.trim() || !formData.lastName.trim()) return
    onAdd(formData)
    setFormData({ firstName: '', lastName: '', phone: '', email: '', notes: '' })
  }

  return (
    <div style={{
      marginBottom: '30px',
      border: '1px solid #ddd',
      padding: '25px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{ marginTop: 0, color: '#333' }}>Новый клиент</h3>
      
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Имя *</label>
            <input
              type="text"
              placeholder="Иван"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '16px'
              }}
              required
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Фамилия *</label>
            <input
              type="text"
              placeholder="Иванов"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '16px'
              }}
              required
            />
          </div>
        </div>
        
        <div style={{ marginTop: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Телефон</label>
          <input
            type="text"
            placeholder="+375 29 123-45-67"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>
        
        <div style={{ marginTop: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
          <input
            type="email"
            placeholder="client@example.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>
        
        <div style={{ marginTop: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Заметки для фотографа</label>
          <textarea
            placeholder="Предпочтения по стилю, пожелания к фотосессии, важные детали..."
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
            rows={4}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>
        
        <div style={{ marginTop: '20px' }}>
          <button 
            type="submit"
            style={{
              marginRight: '10px',
              padding: '12px 24px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Сохранить клиента
          </button>
          <button 
            type="button"
            onClick={onCancel}
            style={{
              padding: '12px 24px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddClientForm
