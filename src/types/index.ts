export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  notes: string;
}

export type ClientFormData = Omit<Client, 'id'>;