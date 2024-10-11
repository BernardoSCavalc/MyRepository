import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  margin: 0;
  font-size: 1.75rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;

const Ul = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.25rem;
    position: relative;
  }

  a::after {
    content: "";
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

const ActionButton = styled(Link)`
  background-color: #f6e24b;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    scale: 1.05;
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

const Nav = styled(Link)`
  margin: 0 1em;
  cursor: pointer;
  color: black;
  text-decoration: none;
`;

const UlDropdow = styled.ul`
  // Essa é a 'ul' do DropDown
`;

const LiDropdown = styled(Link)`
  // Essa é a 'li' do DropDown
`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavbarContainer>
      <Logo to="/">SparkEnergy</Logo>
      <nav>
        <Ul>
          <Nav to="/">Home</Nav>
          <Nav to="/" onClick={(e) => scrollToSection(e, "about")}>
            About
          </Nav>
          <Nav to="#services" onClick={(e) => scrollToSection(e, "services")}>
            Services
          </Nav>
          <Nav to="/Contacts">Contacts</Nav>
        </Ul>
      </nav>

      <ActionButton to="/SparkConnect">SparkConnect</ActionButton>
      <ToggleButton onClick={toggleMenu}>
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </ToggleButton>

      <DropdownMenu className={isOpen ? "open" : ""}>
        <nav>
          <UlDropdow>
            <LiDropdown to="/">Home</LiDropdown>
            <LiDropdown to="/" onClick={(e) => scrollToSection(e, "about")}>
              About
            </LiDropdown>
            <LiDropdown
              to="#services"
              onClick={(e) => scrollToSection(e, "services")}
            >
              Services
            </LiDropdown>
            <LiDropdown to="/Contacts">Contacts</LiDropdown>
          </UlDropdow>
        </nav>
        <ActionButton to="/SparkConnect">SparkConnect</ActionButton>
      </DropdownMenu>
    </NavbarContainer>
  );
}

export default NavBar;
