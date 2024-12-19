import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    border-radius: 5px;
`;

const Button = styled.button`
    background-color: #ffc107;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background-color: #e0a800;
    }
    `;

    const ButtonRemove = styled.button`
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background-color: #c82333;
    }
`;
interface ContactItemProps {
    contact: { id: number; name: string; email: string; phone: string };
    onEdit: (contact: { id: number; name: string; email: string; phone: string }) => void;
    onRemove: (id: number) => void; // Adicione a prop onRemove
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onEdit, onRemove }) => {
    return (
        <ItemContainer>
            <div>
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            </div>
            <div>
            <Button onClick={() => onEdit(contact)}>Editar</Button> {/* Passa o contato para edição */}
            <ButtonRemove onClick={() => onRemove(contact.id)}>Remover</ButtonRemove> {/* Passa o id para remover */}
            </div>
        </ItemContainer>
        );
    };

export default ContactItem;
function onRemove(id: any): void {
    throw new Error('Function not implemented.');
}

