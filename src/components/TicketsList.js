import React from 'react';
import propTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

// redux
import { connect } from 'react-redux';
import getDisplayedTickets from '../redux/selectors';

// components
import Ticket from './Ticket/Ticket';

const TicketsList = ({ tickets }) => {
  const ticketsList = tickets
    ? tickets.map((ticket) => <Ticket key={uuidv1()} ticket={ticket} />)
    : <p>Loading...</p>;

  return (
    <section>
      {ticketsList}
    </section>
  );
};

TicketsList.propTypes = {
  tickets: propTypes.arrayOf(
    propTypes.object.isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  tickets: getDisplayedTickets(state),
});

export default connect(mapStateToProps)(TicketsList);
