import React from 'react';
import styled from 'styled-components';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import NavBar from './components/NavBar';
import Cards from './components/Cards';

const App = () => {

    return (
      <Wrapper>
        <ModalProvider backgroundComponent={FadingBackground}>
          
          <NavBar />
          
          <Cards />

        </ModalProvider>
      </Wrapper>
    )
}

export default App

const Wrapper = styled.div `
  padding: 75px 0 0 0;
  text-align: center;
`

const FadingBackground = styled(BaseModalBackground)`
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
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
`;