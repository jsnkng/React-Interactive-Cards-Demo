import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import classList from './classes';
import NavBar from './NavBar';
import ClassCard from './ClassCard';

const App = () => {
  const [classes, setClasses] = useState(classList)

  const newClass = () => {
    let lastItem = classes.reverse().slice(-1).pop();
    let lastId = lastItem.id;
    let newClasses = [...classes, {
      id: ++lastId,
      title: "Click to Edit",
      instructor: "",
      description: "",
      duration: "0",
      featureImage: "",
      classType: "Type"
    }]
    setClasses(newClasses)
  }

  const deleteClass = (e, id) => {
    if (window.confirm('Are you sure you wish to delete this class?\nClick OK to delete class or Cancel to go back.')) onDeleteClass(id) 
    e.preventDefault();
  }

  const onDeleteClass = (id) => { 
    let index = classes.findIndex(klass => klass.id === id)
    classes.splice(index, 1)
    let newClasses = [...classes.reverse()]
    setClasses(newClasses)
  }

  return (
    <Wrapper>
      <NavBar />
      <h1>Welcome to RookieCookie!</h1>
      <button onClick={newClass}>+ New Class</button>
      <ModalProvider backgroundComponent={SpecialModalBackground}>
        <ClassCardContainer>
          {classes.reverse().map(klass => <ClassCard key={klass.id} content={klass} deleteClass={deleteClass} />)}
        </ClassCardContainer>
      </ModalProvider>
    </Wrapper>
  )
}


export default App


const Wrapper = styled.div `
  padding: 45px 0 0 0;
  text-align: center;
`
const ClassCardContainer = styled.div`
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
  background-color: rgba(0,0,0,.75);
`

