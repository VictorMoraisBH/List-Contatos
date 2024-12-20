    import React, { useState, useEffect } from 'react';
    import styled from 'styled-components';
    import InputMask from 'react-input-mask';

    const FormContainer = styled.div`
    padding: 20px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    onSave: (contact: { id?: number; name: string; email: string; phone: string }) => void;
    resetCurrentContact: () => void;
    existingContacts: { id: number; email: string; phone: string }[];
    }

    const ContactForm: React.FC<ContactFormProps> = ({ currentContact, onSave, resetCurrentContact, existingContacts }) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    useEffect(() => {
        if (currentContact) {
        setName(currentContact.name);
        setEmail(currentContact.email);
        setPhone(currentContact.phone);
        } else {
        setName('');
        setEmail('');
        setPhone('');
        }
    }, [currentContact, existingContacts]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isEmailExist = existingContacts.some(contact => contact.email === email && contact.id !== currentContact?.id);
        const isPhoneExist = existingContacts.some(contact => contact.phone === phone && contact.id !== currentContact?.id);

        if (isEmailExist) {
        alert('Este e-mail já está cadastrado.');
        return;
        }

        if (isPhoneExist) {
        alert('Este telefone já está cadastrado.');
        return;
        }

        onSave({ id: currentContact?.id, name, email, phone });
        resetCurrentContact();
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
            <InputMask
            mask="(99) 9 9999-9999"
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            >
            {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
                <Input 
                {...inputProps}
                placeholder="Telefone" 
                />
            )}
            </InputMask>
            <Button type="submit">{currentContact ? 'Salvar Alterações' : 'Adicionar Contato'}</Button>
        </form>
        </FormContainer>
    );
    };

    export default ContactForm;
