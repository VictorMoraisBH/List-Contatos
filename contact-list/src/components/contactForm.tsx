import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../store/contactsSlice';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    `;

    interface ContactFormProps {
        currentContact: { id: number; name: string; email: string; phone: string } | null;
        resetCurrentContact: () => void;
    }

const ContactForm: React.FC<ContactFormProps> = ({ currentContact, resetCurrentContact }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (currentContact) {
        setName(currentContact.name);
        setEmail(currentContact.email);
        setPhone(currentContact.phone);
        }
    }, [currentContact]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentContact) {
        dispatch(editContact({ id: currentContact.id, name, email, phone }));
        resetCurrentContact();
        } else {
        dispatch(addContact({ name, email, phone }));
        }
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <Form onSubmit={handleSubmit}>
        <input placeholder="Nome completo" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <button type="submit">{currentContact ? 'Editar Contato' : 'Adicionar Contato'}</button>
        </Form>
    );
    };  

export default ContactForm;
