import { useState } from 'react'
import ClientList from './components/ClientList'
import ClientCard from './components/ClientCard'
import AddClientForm from './components/AddClientForm'
import DeleteModal from './components/DeleteModal'

function App() {
  const [clients, setClients] = useState([
    { 
      id: '1', 
      firstName: 'Иван', 
      lastName: 'Иванов', 
      phone: '+375 29 123-45-67', 
      email: 'ivan@mail.com',
      notes: 'Нравится классический стиль. Хочет фотосессию в парке весной.'
    },
    { 
      id: '2', 
      firstName: 'Мария', 
      lastName: 'Петрова', 
      phone: '+375 29 987-65-43', 
      email: 'maria@mail.com',
      notes: 'Предпочитает черно-белые фото. Любит естественное освещение.'
    }
  ])
  
  const [selectedClient, setSelectedClient] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [clientToDelete, setClientToDelete] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const addClient = (clientData) => {
    const newClient = {
      id: Date.now().toString(),
      ...clientData
    }
    setClients([...clients, newClient])
    setShowForm(false)
  }

  const updateClient = (id, clientData) => {
    setClients(clients.map(client => 
      client.id === id ? { ...client, ...clientData } : client
    ))
    if (selectedClient?.id === id) {
      setSelectedClient({ ...selectedClient, ...clientData })
    }
  }

  const deleteClient = (id) => {
    setClients(clients.filter(client => client.id !== id))
    if (selectedClient?.id === id) {
      setSelectedClient(null)
      setIsEditing(false)
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1400px', margin: '0 auto', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #4CAF50', paddingBottom: '10px', marginBottom: '30px' }}>
        📷 CRM для фотографа
      </h1>
      
      <button 
        onClick={() => setShowForm(true)}
        style={{
          marginBottom: '20px',
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
        + Добавить нового клиента
      </button>

      {showForm && (
        <AddClientForm
          onAdd={addClient}
          onCancel={() => setShowForm(false)}
        />
      )}

      <DeleteModal
        client={clientToDelete}
        onConfirm={() => {
          if (clientToDelete) {
            deleteClient(clientToDelete.id)
            setClientToDelete(null)
          }
        }}
        onCancel={() => setClientToDelete(null)}
      />

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '20% 70% 10%', 
        gap: '20px',
        minHeight: '600px'
      }}>
        
        <div>
          <ClientList
            clients={clients}
            selectedClient={selectedClient}
            onSelect={(client) => {
              setSelectedClient(client)
              setIsEditing(false)
            }}
            onDelete={(client) => setClientToDelete(client)}
          />
        </div>

        <div>
          {selectedClient ? (
            <ClientCard
              client={selectedClient}
              isEditing={isEditing}
              onEdit={() => setIsEditing(true)}
              onSave={(data) => {
                updateClient(selectedClient.id, data)
                setIsEditing(false)
              }}
              onCancelEdit={() => setIsEditing(false)}
              onClose={() => {
                setSelectedClient(null)
                setIsEditing(false)
              }}
                 onDelete={() => {
    console.log('Кнопка удаления нажата для:', selectedClient)
    setClientToDelete(selectedClient)
  }}
            />
          ) : (
            <div style={{
              border: '2px dashed #ddd',
              borderRadius: '8px',
              padding: '60px 40px',
              backgroundColor: '#fafafa',
              minHeight: '600px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '64px', color: '#e0e0e0', marginBottom: '30px' }}>
                👤
              </div>
              <h3 style={{ color: '#999', marginBottom: '15px', fontSize: '22px', fontWeight: 'normal' }}>
                Выберите клиента для просмотра
              </h3>
              <p style={{ color: '#aaa', fontSize: '16px', maxWidth: '500px', lineHeight: '1.5' }}>
                Подробности про всех ваших любимых клиентов появятся здесь
              </p>
            </div>
          )}
        </div>

        <div>
          {/* Пустая колонка для отступа */}
        </div>
      </div>

      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        fontSize: '14px',
        color: '#666',
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid #ddd'
      }}>
        <div>
          <strong>Статистика:</strong> {clients.length} клиентов
        </div>
        <div>
          {selectedClient ? (
            <span>
              {isEditing ? 'Редактирование: ' : 'Просмотр: '}
              <strong>{selectedClient.firstName} {selectedClient.lastName}</strong>
            </span>
          ) : (
            <span>Клиент не выбран</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
