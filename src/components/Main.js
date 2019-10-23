import React from 'react';
import styled from 'styled-components';

// components
import TicketsList from './TicketsList';
import Sort from './Sort';

// styles
const StyledMain = styled.main`
  margin-left: 20px;
  flex-grow: 1;
`;

const Main = () => (
  <StyledMain>
    <Sort />
    <TicketsList />
  </StyledMain>
);

export default (Main);
