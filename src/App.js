import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import classList from './classes'
import NavBar from './NavBar'

const App = () => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    setClasses(classList)
  }, [])

  return (
    <Wrapper>
      <NavBar />
      <h1>Welcome to RookieCookie!</h1>
      <ClassCardContainer>
        {classes.map(klass => <ClassCard key={klass.id} content={klass}/>)}
      </ClassCardContainer>
    </Wrapper>
  )
}

export default App

const ClassCard = ({content}) => (
  <ClassCardWrapper>
    <img height="50%" width="100%" src={content.featureImage} alt='' />
    <h4>{content.title}</h4>
    <h5>{content.instructor}</h5>
    <h5>{content.description}</h5>
    <h5>{content.duration} min</h5>
  </ClassCardWrapper>
)

const Wrapper = styled.div `
  margin-top: 45px;
  text-align: center;
`

const ClassCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: center;
  height: auto;
  max-width: 1400px;
  margin: 45px;
  border-radius: 5px;
  border: solid 1px gold;
`

const ClassCardWrapper = styled.div`
  height: 100%;
  width: 175px;
  margin: 10px 5px;
  border-radius: 5px;
  border: solid 1px black;
`
