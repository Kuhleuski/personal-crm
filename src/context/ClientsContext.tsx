import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Client } from '../types'

interface ClientsContextType {
  clients: Client[]
  addClient: (clientData: Omit<Client, 'id'>) => void
  updateClient: (id: string, clientData: Partial<Client>) => void
  deleteClient: (id: string) => void
  setClients: React.Dispatch<React.SetStateAction<Client[]>>
}

const ClientsContext = createContext<ClientsContextType | undefined>(undefined)

export const useClients = () => {
  const context = useContext(ClientsContext)
  if (!context) {
    throw new Error('useClients must be used within a ClientsProvider')
  }
  return context
}

interface ClientsProviderProps {
  children: ReactNode
}

export const ClientsProvider: React.FC<ClientsProviderProps> = ({ children }) => {
  const [clients, setClients] = useState<Client[]>([
    { 
      id: '1', 
      firstName: 'Иван', 
      lastName: 'Иванов', 
      phone: '+375 29 123-45-67', 
      email: 'ivan@mail.com',
      notes: 'Нравится классический стиль. Хочет фотосессию в парке весной.\nПредпочитает утреннее освещение.'
    },
    { 
      id: '2', 
      firstName: 'Мария', 
      lastName: 'Петрова', 
      phone: '+375 29 987-65-43', 
      email: 'maria@mail.com',
      notes: 'Предпочитает черно-белые фото. Любит естественное освещение.\nХочет сделать семейную фотосессию осенью.'
    }
  ])

  const addClient = (clientData: Omit<Client, 'id'>) => {
    const newClient: Client = {
      id: Date.now().toString(),
      ...clientData
    }
    setClients(prev => [...prev, newClient])
  }

  const updateClient = (id: string, clientData: Partial<Client>) => {
    setClients(prev =>
      prev.map(client =>
        client.id === id ? { ...client, ...clientData } : client
      )
    )
  }

  const deleteClient = (id: string) => {
    setClients(prev => prev.filter(client => client.id !== id))
  }

  return (
    <ClientsContext.Provider value={{ clients, addClient, updateClient, deleteClient, setClients }}>
      {children}
    </ClientsContext.Provider>
  )
}
