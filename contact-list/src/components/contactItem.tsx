import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../store/contactsSlice';
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    `;

    interface ContactItemProps {
    contact: {
        id: number;
        name: string;
        email: string;
        phone: string;
    };
    onEdit: () => void;
    }

    const ContactItem: React.FC<ContactItemProps> = ({ contact, onEdit }) => {
    const dispatch = useDispatch();

    return (
        <Item>
        <div>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
        </div>
        <div>
            <button onClick={onEdit}>Editar</button>
            <button onClick={() => dispatch(removeContact(contact.id))}>Remover</button>
        </div>
        </Item>
    );
    };

export default ContactItem;
