    import React from 'react';
    import styled from 'styled-components';

    const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    border-radius: 5px;
    `;

    const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
    `;

    const ButtonRemove = styled.button`
    background-color: #f44336;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: #e53935;
    }
    `;

    interface ContactItemProps {
    contact: { id: number; name: string; email: string; phone: string };
    onEdit: (contact: { id: number; name: string; email: string; phone: string }) => void;
    onRemove: (id: number) => void;
    }

    const ContactItem: React.FC<ContactItemProps> = ({ contact, onEdit, onRemove }) => {
    return (
        <ItemContainer>
        <div>
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
        </div>
        <Button onClick={() => onEdit(contact)}>Editar</Button>
        <ButtonRemove onClick={() => onRemove(contact.id)}>Remover</ButtonRemove>
        </ItemContainer>
    );
    };

    export default ContactItem;
