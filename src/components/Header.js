import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';

const StyledHeader = styled.header`
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => (
  <StyledHeader>
    <img src={Logo} alt="logo" />
  </StyledHeader>
);

export default Header;
