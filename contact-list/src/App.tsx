import React from 'react';
import ContactList from './components/contactList';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f7fb;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <ContactList />
    </AppContainer>
  );
};

export default App;
