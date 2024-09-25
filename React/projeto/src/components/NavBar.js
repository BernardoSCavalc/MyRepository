import styled from "styled-components"
import { Link } from "react-router-dom"

const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1em 0;
`
const Menu = styled(Link)`
    justify-content: space-around;
    margin: 0 1em;
    cursor: pointer;
    color: black;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        color: black;
    }
`

function NavBar() {

    return(
        <NavBarContainer>
            <Menu to="/">Home</Menu>
            <Menu to="/About">About</Menu>
            <Menu to="/Services">Services</Menu>
            <Menu to="/Contacts">Contacts</Menu>
            <Menu to="/Form">Form</Menu>
        </NavBarContainer>
    )
}

export default NavBar