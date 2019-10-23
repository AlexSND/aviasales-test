import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// components
import CarrierLogo from './CarrierLogo';
import Price from './Price';
import Transfer from './Transfer';

// styles
const Wrapper = styled.article`
  margin-bottom: 20px;
  padding: 20px 20px 10px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const Ticket = ({ ticket: { price, carrier, segments } }) => (
  <Wrapper>
    <StyledHeader>
      <Price price={price} />
      <CarrierLogo carrier={carrier} />
    </StyledHeader>
    <Transfer data={segments[0]} />
    <Transfer data={segments[1]} />
  </Wrapper>
);

Ticket.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(
      PropTypes.instanceOf(Object),
    ),
  }).isRequired,
};

export default Ticket;
