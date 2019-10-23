import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// styles
const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  transition: 0.1s;

  &:hover {
    background: #F1FCFF;
    cursor: pointer;
  }
`;

const StyledCheckbox = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 13px;
  line-height: 20px;

  &:before {
    position: absolute;
    top: 50%;
    left: 0;
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 1px solid #9ABBCE;
    border-radius: 2px;
    transform: translateY(-50%);
  }

  &:after {
    position: absolute;
    top: 4px;
    left: 7px;
    content: '';
    display: block;
    width: 6px;
    height: 10px;
    margin-right: 10px;
    border-right: 2px solid #2196F3;
    border-bottom: 2px solid #2196F3;
    transform: rotate(40deg) skewX(-6deg);
    opacity: 0;
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:checked + ${StyledCheckbox} {
    &:before {
      border-color: #2196F3;
    }

    &:after {
      opacity: 1;
    }
  }
`;

const Checkbox = ({ children }) => (
  <CheckboxContainer>
    <HiddenCheckbox />
    <StyledCheckbox>
      {children}
    </StyledCheckbox>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  children: propTypes.string.isRequired,
  // checked: propTypes.bool,
  // onChange: propTypes.func.isRequired,
};

export default Checkbox;
