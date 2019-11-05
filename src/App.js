import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import classList from './classes';
import NavBar from './NavBar';
import Card from './Card';

const App = () => {
    const [classes, setClasses] = useState(classList)

    const createClass = () => {
      const lastItem = classes.reverse().slice(-1).pop();
      const lastId = lastItem.id + 1;
      const newClasses = [...classes, {
        id: lastId,
        title: "New Class",
        instructor: "Click on a card to edit it.",
        description: "Add a title, instructor, and description. Choose a picture. Indicate whether the class is Live or On-Demand and the class duration.",
        duration: "0",
        featureImage: "https://via.placeholder.com/500/000000/ffffff/?text=Choose+a+Picture",
        classType: "Type"
      }]
      setClasses(newClasses)
    }

    const deleteClass = (e, id) => {
      if (window.confirm('Are you sure you wish to delete this class?\nClick OK to delete class or Cancel to go back.')) {
        let index = classes.findIndex(klass => klass.id === id)
        classes.splice(index, 1)
        let newClasses = [...classes.reverse()]
        setClasses(newClasses)
      } 
      e.preventDefault();
    }

    return (
      <Wrapper>
        <NavBar />
        <h1>Interactive Cards</h1>
        <p>Click on a Card to edit it.</p>
        <button onClick={createClass}>+ New Card</button>
        <ModalProvider backgroundComponent={SpecialModalBackground}>
          <CardContainer>
            {classes.reverse().map(klass => <Card key={klass.id} content={klass} deleteClass={deleteClass} />)}
          </CardContainer>
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

