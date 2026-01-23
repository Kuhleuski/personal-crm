import React, { createContext, useContext, useState } from 'react';

const ClientsContext = createContext();

export const useClients = () => {
  const context = useContext(ClientsContext);
  if (!context) {
    throw new Error('useClients must be used within a ClientsProvider');
  }
  return context;
};

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([
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
  ]);

  const addClient = (clientData) => {
    const newClient = {
      id: Date.now().toString(),
      ...clientData
    };
    setClients(prev => [...prev, newClient]);
  };

  const updateClient = (id, clientData) => {
    setClients(prev =>
      prev.map(client =>
        client.id === id ? { ...client, ...clientData } : client
      )
    );
  };

  const deleteClient = (id) => {
    setClients(prev => prev.filter(client => client.id !== id));
  };

  const value = {
    clients,
    addClient,
    updateClient,
    deleteClient
  };

  return (
    <ClientsContext.Provider value={value}>
      {children}
    </ClientsContext.Provider>
  );
};