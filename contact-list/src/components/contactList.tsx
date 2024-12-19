    import React, { useState } from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { RootState } from '../store/store';
    import ContactItem from './contactItem';
    import ContactForm from './contactForm';
    import { addContact, editContact } from '../store/contactsSlice';

    const ContactList: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const [currentContact, setCurrentContact] = useState<null | typeof contacts[0]>(null); // Estado para armazenar o contato em edição
    const dispatch = useDispatch();

    const handleSave = (contact: { name: string; email: string; phone: string }) => {
        if (currentContact) {
        // Se já existe um contato sendo editado, fazemos um update
        dispatch(editContact({ ...currentContact, ...contact }));
        setCurrentContact(null); // Limpa o contato após salvar
        } else {
        // Se não, criamos um novo
        dispatch(addContact(contact));
        }
    };

    const handleEdit = (contact: typeof contacts[0]) => {
        setCurrentContact(contact); // Define o contato que será editado
    };

    const handleRemove = (id: number) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
    };

    return (
        <div>
        <h1>Lista de Contatos</h1>
        <ContactForm
            currentContact={currentContact}
            resetCurrentContact={() => setCurrentContact(null)} // Função para resetar o estado
            onSave={handleSave} // Função para salvar o contato
        />
        {contacts.map((contact) => (
            <ContactItem
            key={contact.id}
            contact={contact}
            onEdit={handleEdit}
            onRemove={handleRemove}
            />
        ))}
        </div>
    );
    };

    export default ContactList;
function removeContact(id: number): any {
    throw new Error('Function not implemented.');
}

