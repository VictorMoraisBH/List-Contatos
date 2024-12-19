    interface ContactItemProps {
        contact: { id: number; name: string; email: string; phone: string };
        onEdit: (contact: { id: number; name: string; email: string; phone: string }) => void;
        onRemove: (id: number) => void; // Adiciona a propriedade onRemove
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
            <ButtonRemove onClick={() => onRemove(contact.id)}>Remover</ButtonRemove> {/* Passa o id para a função de remover */}
        </ItemContainer>
        );
    };
    
    export default ContactItem;
    