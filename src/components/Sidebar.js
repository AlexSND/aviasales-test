import React from 'react';
import styled from 'styled-components';

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

const Sidebar = () => (
  <Wrapper>
    <h4>Количество пересадок</h4>
    <Checkbox>
      Все
    </Checkbox>
    <Checkbox>
      Без пересадок
    </Checkbox>
    <Checkbox>
      1 пересадка
    </Checkbox>
    <Checkbox>
      2 пересадки
    </Checkbox>
    <Checkbox>
      3 пересадки
    </Checkbox>
  </Wrapper>
);

export default Sidebar;
