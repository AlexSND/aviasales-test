import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// styles
const StyledPrice = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #2196F3;
`;

const Price = ({ price }) => {
  const displayedPrice = `${price.toLocaleString()} Р`;

  return (
    <StyledPrice>
      {displayedPrice}
    </StyledPrice>
  );
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
};

export default Price;
