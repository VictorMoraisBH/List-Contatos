    import React from 'react';
    import styled from 'styled-components';

    const Container = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    `;

    const ContactItem = styled.li`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    list-style-type: none;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `;

    const EditButton = styled.button`
    margin-left: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
    `;

    const DeleteButton = styled.button`
    margin-left: 10px;
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        background-color: #d32f2f;
    }
    `;

    const ContactInfo = styled.div`
    flex-grow: 1;
    margin-left: 10px;
    `;

    interface ContactListProps {
    contacts: { id: number; name: string; email: string; phone: string }[];
    setCurrentContact: (contact: { id: number; name: string; email: string; phone: string } | null) => void;
    removeContact: (id: number) => void;
    }

    const ContactList: React.FC<ContactListProps> = ({ contacts, setCurrentContact, removeContact }) => {
    return (
        <Container>
        <h2>Lista de Contatos</h2>
        <ul>
            {contacts.map(contact => (
            <ContactItem key={contact.id}>
                <ContactInfo>
                <strong>{contact.name}</strong><br />
                {contact.email}<br />
                {contact.phone}
                </ContactInfo>
                <EditButton onClick={() => setCurrentContact(contact)}>Editar</EditButton>
                <DeleteButton onClick={() => removeContact(contact.id)}>Deletar</DeleteButton>
            </ContactItem>
            ))}
        </ul>
        </Container>
    );
    };

    export default ContactList;
