import React, { useState } from 'react';
import styled from 'styled-components'
import ModalHelp from './modals/ModalHelp';

const NavBar = ({createCard}) => {

  const [isOpenModalHelp, setIsOpenModalHelp] = useState(false)
  
  const toggleModalHelp = () => {
    setIsOpenModalHelp(!isOpenModalHelp)
  }

  return (
    <Header>
      <HeaderMenu>
        <HeaderItem>
          <h1>ReactJS – Interactive Cards</h1>
          {/* <button onClick={createCard}>+</button> */}
          <div><button onClick={toggleModalHelp}>?</button></div>
        </HeaderItem>
      </HeaderMenu>
      <ModalHelp isOpen={isOpenModalHelp} toggleModal={toggleModalHelp}></ModalHelp>
    </Header>

  )
}
export default NavBar

NavBar.displayName = 'NavBar'

const Header = styled.header`
  background-color: #111111; 
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 0 15px;
`
const HeaderMenu = styled.div`
  margin-top: 0px;
  height: 100%;
`
const HeaderItem = styled.div`
  padding: 0 10px 0 10px;
  text-align: center;
  box-sizing: border-box;
  list-style-type: none;

  & h1 {
    display: block;
    font-size: 1.25em;
    font-weight: 200;
    text-align: left;
    margin: 0 5px; 
    float: left;
  }
  & div {
    float: right;
  }
`
