import React from 'react';
import Modal from 'styled-react-modal';

const ModalHelp = ({isOpen, toggleModal}) => {

  return (
     <ModalContentHelp
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}>
        <div className="container__help_title">
          <h2>Help</h2>
          <div className="container__help_close">
            <button onClick={toggleModal}>X</button>
          </div>
          <div className="container__help_body">
            <h3>Create</h3>
            <p> Click on the "+" button.</p>
            <h3>Update</h3>   
            <p> Click on any card to edit it's content.</p>
            <h3>Delete</h3>   
            <p> Click on a card and then click the Delete button and confirm.</p>
          </div>
        </div>
      </ModalContentHelp>
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

  & .container__help_close {
    position: absolute;
    top: 8px;
    right: 3px;
    padding: 4px 8px;
  }
  & .container__help_title  {   
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
  & .container__help_body  { 
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
  & .container__help_body {
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