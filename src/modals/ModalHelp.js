import React, { useState} from 'react';
import Modal from 'styled-react-modal';

const ModalHelp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [opacity, setOpacity] = useState(0)
  
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 200);
  }
  
  const beforeClose = () => {
    return new Promise(resolve => {
      setOpacity(0);
      setTimeout(resolve, 200);
    });
  }

  return (
    <>
      <button onClick={toggleModal}>?</button>
      <ModalContentHelp
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}>
        <div className="container__title">
          <h2>Help</h2>
          <div className="container__close">
            <button onClick={toggleModal}>X</button>
          </div>
          <div className="container__body">
            <h3>Create</h3>
            <p> Click on the "+" button.</p>
            <h3>Update</h3>   
            <p> Click on any card to edit it's content.</p>
            <h3>Delete</h3>   
            <p> Click on a card and then click the Delete button and confirm.</p>
          </div>
        </div>
      </ModalContentHelp>
    </>
  )
}
  
export default ModalHelp

const ModalContentHelp = Modal.styled`
  position:absolute;
  background-color: #111111; 
  color: #ffffff;
  z-index: 40;
  width: 100vw;
  height: 100vh;
  max-height: 1400px;

  & .container__close {
    position: absolute;
    top: 8px;
    right: 3px;
    padding: 4px 8px;
  }
  & .container__title  {   
    margin: 0;
    text-align: left;
    h2 {    
      display: block;
      font-size: 1.25em;
      font-weight: 200;
      text-align: left;
      margin: 10px; 
    }
  }
  & .container__body  { 
    background-color: #1f1f1f;  
    margin: 0;
    padding: 15px;
    text-align: left;
    
    h3 {
      margin: 0;
    }
    p {
      font-size: .9em;
      font-weight: 200;
      text-align: left;
      padding: 5px;
      margin: 0 0 10px 0;
    }
  }
  & .container__body {
    height: 100%;
    min-height: 480px;
    overflow: scroll;
  }
  @media (min-width: 415px)  {
    width: 100vw;
    height: 100vh;
  }
  @media (min-width: 768px)  {
    width: 90vw;
    height: 90vh;
    box-shadow: 3px 3px 12px 0px rgba(0,0,0,.25);
  }
  @media (min-width: 1200px)  {
    width: 70vw;
    height: 90vh;
  }
`