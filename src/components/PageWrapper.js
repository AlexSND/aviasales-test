import React from 'react';
import styled from 'styled-components';

// components
import Sidebar from './Sidebar';
import Main from './Main';

// styles
const StyledWrapper = styled.div`
  max-width: 795px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
`;

const PageWrapper = () => (
  <StyledWrapper>
    <Sidebar />
    <Main />
  </StyledWrapper>
);

export default PageWrapper;
