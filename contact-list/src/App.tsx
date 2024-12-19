import React from 'react';
import ContactList from './components/contactList';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify'; // Importar o ToastContainer

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        aria-label="Toast notifications" 
      />
    </AppContainer>
  );
};

export default App;
