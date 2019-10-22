import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// styles
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
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
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 1px solid #9ABBCE;
  border-color: ${(props) => (props.checked ? '#2196F3' : '#9ABBCE')};
  border-radius: 2px;
  transition: 0.1s;

  &{HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #2196F3;
  }
  /* display: flex;
  position: relative;
  padding: 10px 20px;

  &:hover {
    background: #F1FCFF;
    cursor: pointer;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;

    + span {
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
    }

    &:checked + span {
      &:before {
        border-color: #2196F3;
      }

      &:after {
        opacity: 1;
      }
    }
  } */
`;

const Checkbox = ({ checked, children, onChange }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked} />
    {children}
  </CheckboxContainer>
);

Checkbox.propTypes = {
  children: propTypes.string.isRequired,
  checked: propTypes.bool,
  onChange: propTypes.func.isRequired,
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
