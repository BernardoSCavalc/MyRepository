import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 5px;
  background-color: transparent;
`;

function Header() {
  return (
    <HeaderContainer>
      <NavBar />
    </HeaderContainer>
  );
}

export default Header;
