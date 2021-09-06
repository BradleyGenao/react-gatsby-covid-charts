import React from 'react'
import { Link } from "gatsby"
import { ImStatsBars} from 'react-icons/im'
import styled from "styled-components"

const Header = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Covid Data Charts</NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/vaccine">Vaccine Data Charts</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavMenu>
      </Nav>
    </div>
  )
}

export default Header


const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;


`

const Bars = styled(ImStatsBars)`
  display: none;
  color: greenyellow;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`