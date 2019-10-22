import React from 'react';
import styled from 'styled-components';

// redux
import { connect } from 'react-redux';
import { sortByPrice } from '../redux/dataActions';

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
  background: #FFFFFF;
  border: 1px solid #DFE5EC;
  transition: 0.2s;

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

const Sort = ({ sortByPrice }) => (
  <Wrapper>
    <SortItem onClick={() => sortByPrice()}>
      Самый дешевый
    </SortItem>
    <SortItem>
      Самый быстрый
    </SortItem>
  </Wrapper>
);

const mapActionsToProps = (dispatch) => ({
  sortByPrice: () => dispatch(sortByPrice),
});

export default connect(null, mapActionsToProps)(Sort);
