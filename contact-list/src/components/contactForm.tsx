    import React, { useState, useEffect } from 'react';
    import styled from 'styled-components';

    const FormContainer = styled.div`
    padding: 20px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    border-radius: 5px;
    `;

    const Input = styled.input`
    padding: 10px;
    margin: 5px 0;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ddd;
    `;

    const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
    `;

    interface ContactFormProps {
    currentContact: { id: number; name: string; email: string; phone: string } | null;
    onSave: (contact: { name: string; email: string; phone: string }) => void;
    resetCurrentContact: () => void;
    }

    const ContactForm: React.FC<ContactFormProps> = ({ currentContact, onSave, resetCurrentContact }) => {
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
        onSave({ name, email, phone });
        resetCurrentContact(); // Resetar após salvar
    };

    return (
        <FormContainer>
        <h2>{currentContact ? 'Editar Contato' : 'Adicionar Novo Contato'}</h2>
        <form onSubmit={handleSubmit}>
            <Input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Nome" 
            />
            <Input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            />
            <Input 
            type="text" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="Telefone" 
            />
            <Button type="submit">{currentContact ? 'Salvar Alterações' : 'Adicionar Contato'}</Button>
        </form>
        </FormContainer>
    );
    };

    export default ContactForm;
