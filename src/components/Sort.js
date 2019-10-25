import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { sortByPrice, sortByDuration } from '../redux/dataActions';

// styles
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
`;

const SortItem = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  background: ${(props) => (props.active ? '#2196F3' : '#FFFFFF')};
  color: ${(props) => (props.active && '#FFFFFF')};
  border: 1px solid ${(props) => (props.active ? '#2196F3' : '#DFE5EC')};
  transition: 0.1s;

  &:hover {
    cursor: pointer;
    color: #fff;
    background: #2196F3;
    border-color: #2196F3;
  }

  &:not(:last-child) {
    border-right: none;
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const Sort = ({
  sortByPrice,
  sortByDuration,
  sortedByPrice,
  sortedByDuration,
}) => (
  <Wrapper>
    <SortItem active={sortedByPrice} onClick={sortByPrice}>
      Самый дешевый
    </SortItem>
    <SortItem active={sortedByDuration} onClick={sortByDuration}>
      Самый быстрый
    </SortItem>
  </Wrapper>
);

Sort.propTypes = {
  sortByPrice: propTypes.func.isRequired,
  sortByDuration: propTypes.func.isRequired,
  sortedByPrice: propTypes.bool.isRequired,
  sortedByDuration: propTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  sortedByPrice: state.sort.price,
  sortedByDuration: state.sort.duration,
});

const mapActionsToProps = ({
  sortByPrice,
  sortByDuration,
});

export default connect(mapStateToProps, mapActionsToProps)(Sort);
