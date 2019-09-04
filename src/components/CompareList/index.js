/* eslint-disable react/require-default-props */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
import React from 'react';
import CompareListStyle from './styles';
import PropTypes from 'prop-types';

const CompareList = ({ repositories }) => (
  <div>
    <CompareListStyle>
      {repositories.map(repository => (
        <div key={repository.id} className="repository">
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <strong>react</strong>
            <small>facebook</small>
          </header>

          <ul>
            <li>
              {repository.stargazers_count}
              <small> starts</small>
            </li>
            <li>
              {repository.forks_count}
              <small> forks</small>
            </li>
            <li>
              {repository.open_issues_count}
              <small> issues</small>
            </li>
            <li>
              {repository.lastCommit}
              <small> last commit</small>
            </li>
          </ul>
        </div>
      ))}
    </CompareListStyle>
  </div>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string
      }),
      startgazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string
    }).isRequired
  )
};

export default CompareList;
