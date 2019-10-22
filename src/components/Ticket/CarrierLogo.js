import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// styles
const Wrapper = styled.div`
  width: 33.33%;
  height: 36px;
  display: flex;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const CarrierLogo = ({ carrier }) => (
  <Wrapper>
    <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="Carrier logo" />
  </Wrapper>
);

CarrierLogo.propTypes = {
  carrier: PropTypes.string.isRequired,
};

export default (CarrierLogo);
