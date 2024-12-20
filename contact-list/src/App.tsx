import React, { useState } from 'react';
import ContactList from './components/contactList';
import ContactForm from './components/contactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App: React.FC = () => {
  const [contacts, setContacts] = useState<{ id: number; name: string; email: string; phone: string }[]>([]);
  const [currentContact, setCurrentContact] = useState<{ id: number; name: string; email: string; phone: string } | null>(null);

  const handleSave = (contact: { id?: number; name: string; email: string; phone: string }) => {
    if (contact.id) {
      setContacts(prevContacts => prevContacts.map(c => (c.id === contact.id ? { ...c, ...contact, id: c.id } : c)));
    } else {
      const newContact = { ...contact, id: Date.now() };
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
    setCurrentContact(null); // Limpar formulário após salvar
  };
  
  const removeContact = (id: number) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    setCurrentContact(null); // Limpar formulário após remover
  };
  
  

  return (
    <PageContainer>
      <ContactForm 
        currentContact={currentContact} 
        onSave={handleSave} 
        resetCurrentContact={() => setCurrentContact(null)}
        existingContacts={contacts}
      />
      <ContactList 
        contacts={contacts} 
        setCurrentContact={setCurrentContact}
        removeContact={removeContact}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        aria-label="Toast notifications"
      />
    </PageContainer>
  );
};

export default App;
