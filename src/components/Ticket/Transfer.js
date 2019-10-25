import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import formatFlightTime from '../../utils/formatFlightTime';
import formatFlightPeriod from '../../utils/formatFlightPeriod';
import wordEnding from '../../utils/wordEnding';

// styles
const StyledTransfer = styled.div`
  display: flex;
`;

const Segment = styled.div`
  margin-bottom: 12px;
  width: 33.33%;
  padding-right: 20px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #A0B0B9;
  text-transform: uppercase;
`;

const Body = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

const Transfer = ({
  data: {
    date,
    origin,
    destination,
    duration,
    stops,
  },
}) => {
  const way = `${origin} - ${destination}`;
  const flightTime = formatFlightTime(duration);
  const flightPeriod = formatFlightPeriod(date, duration);
  const stopsLength = wordEnding(stops.length, ['пересадка', 'пересадки', 'пересадок']);
  const stopsList = stops.length > 0 && stops.join(', ');
  return (
    <StyledTransfer>
      <Segment>
        <Title>
          {way}
        </Title>
        <Body>
          {flightPeriod}
        </Body>
      </Segment>
      <Segment>
        <Title>
          В пути
        </Title>
        <Body>
          {flightTime}
        </Body>
      </Segment>
      <Segment>
        <Title>
          {stopsLength}
        </Title>
        <Body>
          {stopsList}
        </Body>
      </Segment>
    </StyledTransfer>
  );
};

Transfer.propTypes = {
  data: propTypes.shape({
    date: propTypes.string.isRequired,
    origin: propTypes.string,
    destination: propTypes.string,
    duration: propTypes.number,
    stops: propTypes.arrayOf(
      propTypes.string.isRequired,
    ),
  }).isRequired,
};

export default Transfer;
