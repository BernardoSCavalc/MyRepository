import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 2rem;
  z-index: 2;
`;

function Header() {
  return (
    <HeaderContainer>
      <NavBar />
    </HeaderContainer>
  );
}

export default Header;
