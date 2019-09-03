import React from 'react';
import MainStyled from './style';

import CompareList from '../../components/CompareList/index';

import logo from '../../assets/logo.png';

const Main = () => (
  <MainStyled>
    <img width="100" src={logo} alt="Github compare" />
    <form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </form>
    <CompareList />
  </MainStyled>
);

export default Main;
