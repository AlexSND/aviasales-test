import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatFlightTime from '../../utils/formatFlightTime';
import formatFlightPeriod from '../../utils/formatFlightPeriod';

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
  const stopsLength = `${stops.length} пересадки`;
  const stopsList = stops.map(item => <span>{item} </span>);
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
  data: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    origin: PropTypes.string,
    destination: PropTypes.string,
    duration: PropTypes.number,
  }).isRequired,
};

export default Transfer;
