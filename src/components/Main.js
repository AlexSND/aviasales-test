import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { getTickets } from '../redux/dataActions';

// components
import TicketsList from './TicketsList';
import Sort from './Sort';

// styles
const StyledMain = styled.main`
  margin-left: 20px;
  flex-grow: 1;
`;

const Main = ({ getTickets }) => {
  useEffect(() => { getTickets(); }, []);

  return (
    <StyledMain>
      <Sort />
      <TicketsList />
    </StyledMain>
  );
};

Main.propTypes = {
  getTickets: PropTypes.func.isRequired,
};

const mapActionsToProps = {
  getTickets,
};

export default connect(null, mapActionsToProps)(Main);
