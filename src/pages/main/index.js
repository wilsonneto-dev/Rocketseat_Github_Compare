import React, { Component } from 'react';
import CompareList from '../../components/CompareList/index';
import api from '../../services/api';
import moment from 'moment';
import MainStyled from './style';
import logo from '../../assets/logo.png';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      repositories: [],
      repositoryInput: ''
    };
  }

  handleAddRepository = async e => {
    e.preventDefault();
    const { repositories } = this.state;
    const { repositoryInput } = this.state;

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      const newRepositories = [...repositories, repository];
      this.setState({ repositories: newRepositories });
      console.log(this.repositories);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { repositories } = this.state;
    const { repositoryInput } = this.state;

    return (
      <MainStyled>
        <img width="100" src={logo} alt="Github compare" />
        <form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">OK</button>
        </form>
        <CompareList repositories={repositories} />
      </MainStyled>
    );
  }
}
