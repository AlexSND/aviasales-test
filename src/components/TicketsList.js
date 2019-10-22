import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

// redux
import { connect } from 'react-redux';

// components
import Ticket from './Ticket/Ticket';

const TicketsList = ({ tickets }) => {
  const ticketsList = tickets
    ? tickets.map((ticket) => (<Ticket key={uuidv1()} price={ticket.price} carrier={ticket.carrier} forward={ticket.segments[0]} backward={ticket.segments[1]} />)) : <p>Loading...</p>;

  return (
    <section>
      {ticketsList}
    </section>
  );
};

TicketsList.propTypes = {
  // tickets: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     price: PropTypes.number.isRequired,
  //     name: PropTypes.string.isRequired,
  //   }),
  // ).isRequired,
  tickets: PropTypes.shape({
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (store) => ({
  tickets: store.tickets,
});

export default connect(mapStateToProps)(TicketsList);
