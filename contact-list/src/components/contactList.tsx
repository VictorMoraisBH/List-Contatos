    import React, { useState } from 'react';
        import { useSelector, useDispatch } from 'react-redux';
        import { RootState } from '../store/store';
        import ContactItem from './contactItem';
        import ContactForm from './contactForm';
        import { addContact, editContact, removeContact } from '../store/contactsSlice';

        const ContactList: React.FC = () => {
            const contacts = useSelector((state: RootState) => state.contacts.contacts);
            const [currentContact, setCurrentContact] = useState<null | typeof contacts[0]>(null);
            const dispatch = useDispatch();
        
            const handleSave = (contact: { name: string; email: string; phone: string }) => {
            if (currentContact) {
                dispatch(editContact({ ...currentContact, ...contact }));
                setCurrentContact(null); // Limpa o contato após salvar
            } else {
                const newContact = {
                ...contact,
                id: Date.now()
                };
                dispatch(addContact(newContact));
            }
            };
        
            const handleEdit = (contact: typeof contacts[0]) => {
            setCurrentContact(contact); // Define o contato que será editado
            };
        
            const handleRemove = (id: number) => {
            dispatch(removeContact(id)); // Dispara a ação para remover o contato
            };
        
            return (
            <div>
                <h1>Lista de Contatos</h1>
                <ContactForm
                currentContact={currentContact}
                resetCurrentContact={() => setCurrentContact(null)}
                onSave={handleSave}
                existingContacts={contacts.map(contact => ({
                    email: contact.email,
                    phone: contact.phone
                }))} // Passa os contatos existentes
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