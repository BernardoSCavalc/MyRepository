import styled from "styled-components"
import NavBar from "./NavBar"

const HeaderContainer = styled.header`
    background-color: yellow;
    padding: 1px 20px;
`

function Header() {
    return (
        <div>
            <HeaderContainer>
                <h1>Header</h1>
                <NavBar/>
            </HeaderContainer>
        </div>
    )
}

export default Header