import React, { Component } from 'react';
import moment from 'moment';

import CompareList from '../../components/CompareList/index';
import api from '../../services/api';

import MainStyled from './style';
import logo from '../../assets/logo.png';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      repositories: [],
      repositoryInput: '',
      repositoryError: false,
      loading: false
    };
  }

  handleAddRepository = async e => {
    e.preventDefault();
    const { repositories } = this.state;
    const { repositoryInput } = this.state;

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      const newRepositories = [...repositories, repository];
      this.setState({ repositories: newRepositories, repositoryError: false });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { repositories } = this.state;
    const { repositoryInput } = this.state;
    const { repositoryError } = this.state;

    return (
      <MainStyled withError={repositoryError}>
        <img width="100" src={logo} alt="Github compare" />
        <form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              'OK'
            )}
          </button>
        </form>
        <CompareList repositories={repositories} />
      </MainStyled>
    );
  }
}
