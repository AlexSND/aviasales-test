import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

// redux
import { connect } from 'react-redux';

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
  tickets: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

const mapStateToProps = (store) => ({
  tickets: store.tickets,
});

export default connect(mapStateToProps)(TicketsList);
