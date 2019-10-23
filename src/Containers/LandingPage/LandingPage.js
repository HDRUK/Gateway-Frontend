import React from 'react';
import logo from './logo.svg';
import './LandingPage.css';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { AppContext } from '../../HOC/AppContext/AppContext.js';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const Counter = () => {
  let queryResult = '';
  const countAndRefresh = counterFunc => {
    counterFunc();

    queryResult = <Query query={EXCHANGE_RATES}>
      {({ loading, error, data }) => {
        if (loading) {
          return <div>Loading...</div>;
        }
        if (error) {
          console.log(error);
          return <div>Error :(</div>;
        } 
        console.log(data.rates);
        return <p>hello</p>
      }}
    </Query>

    return queryResult;
  }
  
  return (
    <AppContext.Consumer>
      {appContext => (
        <div>
          <p onClick={() => countAndRefresh(appContext.counterFunc)}>{appContext.state.counter}</p>
          {queryResult}
        </div>
      )}
    </AppContext.Consumer>
  )
}

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

      <Counter />

    </div>
  );
}

export default LandingPage


