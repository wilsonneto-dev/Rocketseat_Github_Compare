import React from 'react';
import CompareListStyle from './styles';

const CompareList = () => (
  <div>
    <CompareListStyle>
      <div>
        <header>
          <img src="" alt="Facebook" />
          <strong>react</strong>
          <small>facebook</small>
        </header>

        <ul>
          <li>
            95,019
            <small>starts</small>
          </li>
          <li>
            95,019
            <small>forks</small>
          </li>
          <li>
            95,019
            <small>issues</small>
          </li>
          <li>
            95,019
            <small>last commit</small>
          </li>
        </ul>
      </div>
    </CompareListStyle>
  </div>
);

export default CompareList;
