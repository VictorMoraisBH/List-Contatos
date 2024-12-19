    import React, { useState } from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { RootState } from '../store/store';
    import ContactItem from './contactItem';
    import ContactForm from './contactForm';
    import { addContact, editContact, removeContact } from '../store/contactsSlice';
    import { toast } from 'react-toastify';


    const ContactList: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const [currentContact, setCurrentContact] = useState<null | typeof contacts[0]>(null);
    const dispatch = useDispatch();

    const notifyEmailError = () => toast.error("Este email já está cadastrado.");
    const notifyPhoneError = () => toast.error("Este telefone já está cadastrado.");

    const handleSave = (contact: { name: string; email: string; phone: string }) => {
        // Verificação de email duplicado
        const isEmailExist = contacts.some((contactItem) => contactItem.email === contact.email);
        if (isEmailExist) {
        notifyEmailError(); // Exibe o erro do email
        return;
        }

        // Verificação de telefone duplicado
        const isPhoneExist = contacts.some((contactItem) => contactItem.phone === contact.phone);
        if (isPhoneExist) {
        notifyPhoneError(); // Exibe o erro do telefone
        return;
        }

        const newContact = {
        ...contact,
        id: Math.floor(Math.random() * 1000000), // Gerando ID único (tipo number)
        };

        if (currentContact) {
        // Se já existe um contato sendo editado, fazemos um update
        dispatch(editContact({ ...currentContact, ...newContact }));
        setCurrentContact(null); // Limpa o contato após salvar
        } else {
        // Se não, criamos um novo
        dispatch(addContact(newContact));
        }
    };

    const handleEdit = (contact: typeof contacts[0]) => {
        setCurrentContact(contact); // Define o contato que será editado
    };

    const handleRemove = (id: number) => {
        dispatch(removeContact(id)); // Passando o id para remoção
    };

    return (
        <div>
        <h1>Lista de Contatos</h1>
        <ContactForm 
            currentContact={currentContact}
            resetCurrentContact={() => setCurrentContact(null)} 
            onSave={handleSave} 
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
