import React from 'react'
import styled from 'styled-components'

const NavBar = ({createClass, toggleIsHelpOpen}) => {
  return (
    <Header>
      <HeaderMenu>
        <HeaderItem>
          ReactJS – Interactive Cards
          <button onClick={createClass}>+</button>
          <button onClick={toggleIsHelpOpen}>?</button>
        </HeaderItem>
      </HeaderMenu>
    </Header>
  )
}
export default NavBar

NavBar.displayName = 'NavBar'

const Header = styled.header`
  background-color: #f9f9f9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 0 15px;
  box-shadow: 0 0 5px 0 gray;
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
`
