import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import classList from './classes';
import NavBar from './NavBar';
import Card from './Card';
import Modal from 'styled-react-modal';

const App = () => {
    const [cards, setCards] = useState(classList)
    const [isHelpOpen, setIsHelpOpen] = useState(false)
    
    const toggleIsHelpOpen = () => {
      setIsHelpOpen(!isHelpOpen)
    }

    const createClass = () => {
      const lastItem = cards.reverse().slice(-1).pop();
      const lastId = lastItem ? lastItem.id + 1 : 1;
     
      const newCards = [...cards, {
        id: lastId,
        title: "New Class",
        instructor: "Click on a card to edit it.",
        description: "Add a title, instructor, and description. Choose a picture. Indicate whether the class is Live or On-Demand and the class duration.",
        duration: "0",
        featureImage: "https://via.placeholder.com/500/000000/ffffff/?text=Choose+a+Picture",
        classType: "Type"
      }]
      setCards(newCards)
    }

    const deleteCard = (e, id) => {
      if (window.confirm('Are you sure you want to do this?\nOK to delete or Cancel to go back.')) {
        let index = cards.findIndex(item => item.id === id)
        cards.splice(index, 1)
        let newCards = [...cards.reverse()]
        setCards(newCards)
      } 
      e.preventDefault();
    }

    return (
      <Wrapper>
        <NavBar createClass={createClass} toggleIsHelpOpen={toggleIsHelpOpen} />
        
        <ModalProvider backgroundComponent={SpecialModalBackground}>
          
          <CardContainer>
            {cards.reverse().map(item => <Card key={item.id} content={item} deleteCard={deleteCard} />)}
          </CardContainer>

          <StyledModal
            isOpen={isHelpOpen}
            onBackgroundClick={toggleIsHelpOpen}
            onEscapeKeydown={toggleIsHelpOpen}>
            <button className="container__help_close" onClick={toggleIsHelpOpen}>Close</button>
            <div className="container__help_body">
              <h2>Help</h2>
              <p>To Create: Click on the "+" button.</p>
              <p>To Update: Click on any card to edit it's content.</p>
              <p>To Delete: Click on a card and then click the Delete button and confirm.</p>
            </div>
          </StyledModal>

        </ModalProvider>

      </Wrapper>
    )
}

export default App


const Wrapper = styled.div `
  padding: 45px 0 0 0;
  text-align: center;
`
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: center;
  margin: 20px;
`
const SpecialModalBackground = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: rgba(0,0,0,.5);
`
const StyledModal = Modal.styled`
  position:absolute;
  width: 90%;
  height: auto;
  max-width: 960px;
  max-height: 800px;
  background-color: #333333;
  color: #ffffff;
  border-radius: 8px;
  z-index: 40;
  box-shadow: 3px 3px 12px 0px rgba(0,0,0,.25);
  overflow: auto;

  @media (max-width: 414px)  {
    width: 100vw;
    height: 100vh;
    max-height: 1400px;
    border-radius: 0px !important;
  }
  & .container__help_close {
    position: absolute;
    top: 15px;
    right: 13px;
    padding: 5px 10px;
  }
`