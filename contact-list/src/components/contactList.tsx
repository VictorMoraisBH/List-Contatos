import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ContactItem from './contactItem';
import ContactForm from './contactForm';

const ContactList: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const [currentContact, setCurrentContact] = useState<null | typeof contacts[0]>(null);

    return (
        <div>
        <h1>Lista de Contatos</h1>
        <ContactForm currentContact={currentContact} resetCurrentContact={() => setCurrentContact(null)} />
        {contacts.map((contact) => (
            <ContactItem
            key={contact.id}
            contact={contact}
            onEdit={() => setCurrentContact(contact)}
            />
        ))}
        </div>
    );
    };

export default ContactList;
