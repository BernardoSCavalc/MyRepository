import styled from 'styled-components';
import { Link } from "react-router-dom"
import { useState } from 'react';

const NavbarContainer = styled.div`
    width: 100%;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    list-style: none;
    cursor: pointer;
`;

const Links = styled.ul`
    display: flex;
    gap: 3.5rem;
    list-style: none;

    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.35rem;
        position: relative;
        padding-bottom: 5px;
    }

    a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        background-color: #fff;
        left: 0;
        bottom: 0;
        transition: width 0.3s ease-in-out;
    }

    a:hover::after {
        width: 100%;
    }
`;

const ActionButton = styled.a`
    background-color: #000;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        scale: 1.05;
        color: #f6e24b;
    }

    &:active {
        scale: 0.95;
    }
`;

const ToggleButton = styled.div`
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 992px) {
    display: block;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  right: 2rem;
  top: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  overflow: hidden;
  height: 0;
  width: 300px;
  transition: height 0.1s ease-in-out;

  &.open {
    display: block;
    height: 240px;
  }

  li {
    font-size: 1.1rem;
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
    <NavbarContainer>
        <Logo>
            <a>SparkEnergy</a>
        </Logo>
        <nav>
        <Links>
            <li><a>Início</a></li>
            <li><a href="#">Notícias</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Doe</a></li>
        </Links>
        </nav>
        <ActionButton href="#">Comece Agora</ActionButton>
        <ToggleButton onClick={toggleMenu}>
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </ToggleButton>
        <DropdownMenu className={isOpen ? 'open' : ''}>
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Notícias</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Doe</a></li>
            </ul>
            <ActionButton href="#">Comece Agora</ActionButton>
        </DropdownMenu>
    </NavbarContainer>
  );
}

export default NavBar

// ======================= Last Code ====================================

// import styled from "styled-components"
// import { Link } from "react-router-dom"
// import Button from "./ButtonHeader"

// const NavBarContainer = styled.nav`
//     border: 2px solid green;

// `
// const Nav = styled(Link)`
//     margin: 0 1em;
//     cursor: pointer;
//     color: black;
//     text-decoration: none;
//     &:hover {
//         text-decoration: underline;
//         color: black;
//     }
// `

// function NavBar() {

//     return(
//         <NavBarContainer>
//             <Nav to="/">Inicio</Nav>
//             <Nav to="/About">Sobre nós</Nav>
//             <Nav to="/Services">Services</Nav>
//             <Nav to="/Contacts">Contact</Nav>
//             <Button />
//         </NavBarContainer>
//     )
// }

