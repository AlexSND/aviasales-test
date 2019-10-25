import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { setStopsFilter } from '../redux/dataActions';

// components
import Checkbox from './UI/Checkbox';

// styles
const Wrapper = styled.form`
  width: 232px;
  padding: 0 0 12px;
  flex-shrink: 0;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  h4 {
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 8px;
    padding: 0 20px;
  }
`;

const Sidebar = ({ setStopsFilter }) => {
  const [filters, setFilters] = useState([
    {
      name: 'reset',
      text: 'Все',
      value: 'reset',
      isChecked: false,
    },
    {
      name: 'without-stops',
      text: 'Без пересадок',
      value: '0',
      isChecked: false,
    },
    {
      name: 'one-stop',
      text: '1 пересадка',
      value: '1',
      isChecked: false,
    },
    {
      name: 'two-stops',
      text: '2 пересадки',
      value: '2',
      isChecked: false,
    },
    {
      name: 'three-stops',
      text: '3 пересадки',
      value: '3',
      isChecked: false,
    },
  ]);

  const handleChange = (e) => {
    let updatedFilters;

    if (e.target.name === 'reset') {
      updatedFilters = [...filters].map((filter) => {
        if (filter.name === 'reset') {
          // eslint-disable-next-line no-param-reassign
          filter.isChecked = true;
        } else {
          // eslint-disable-next-line no-param-reassign
          filter.isChecked = false;
        }
        return filter;
      });
    } else {
      updatedFilters = [...filters].map((filter) => {
        if (filter.name === 'reset') {
          // eslint-disable-next-line no-param-reassign
          filter.isChecked = false;
        }
        if (filter.name === e.target.name) {
          // eslint-disable-next-line no-param-reassign
          filter.isChecked = e.target.checked;
        }
        return filter;
      });
    }

    setFilters(updatedFilters);

    const filterValues = [];
    filters.forEach((filter) => {
      if (filter.isChecked === true && filter.name !== 'reset') {
        filterValues.push(filter.value);
      }
    });
    setStopsFilter(filterValues);
  };

  const checkboxes = filters.map(
    (filter) => (
      <Checkbox
        key={filter.value}
        name={filter.name}
        value={filter.value}
        checked={filter.isChecked}
        handleChange={handleChange}
      >
        {filter.text}
      </Checkbox>
    ),
  );

  return (
    <Wrapper>
      <h4>Количество пересадок</h4>
      {checkboxes}
    </Wrapper>
  );
};

Sidebar.propTypes = {
  setStopsFilter: propTypes.func.isRequired,
};

const mapActionsToProps = ({
  setStopsFilter,
});

export default connect(null, mapActionsToProps)(Sidebar);
