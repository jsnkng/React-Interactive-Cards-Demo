import React from 'react';
import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import NavBar from './NavBar';
import Cards from './Cards';

const App = () => {


    return (
      <Wrapper>
        <ModalProvider backgroundComponent={ModalBackground}>  
          
          <NavBar />
          
          <Cards />

        </ModalProvider>
      </Wrapper>
    )
}

export default App

const Wrapper = styled.div `
  padding: 45px 0 0 0;
  text-align: center;
`
const ModalBackground = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: rgba(0,0,0,.9);
`