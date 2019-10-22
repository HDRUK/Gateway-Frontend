import React from 'react';
import logo from './logo.svg';
import './LandingPage.css';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_MOVIES = gql`
  query {
    movie(id: 1) {
      id
      title
    }
  }
`

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Query query={GET_MOVIES}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) {
            console.log(error);
            return <div>Error :(</div>;
          } 

          return (
            <p>{data.movie.title}</p>
          )
        }}
      </Query>
    </div>
  );
}

export default LandingPage


