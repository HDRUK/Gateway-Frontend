import React from 'react';
import logo from './logo.svg';
import './LandingPage.css';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';
import { AppContext } from '../../HOC/AppContext/AppContext.js';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function LandingPage() {

  const Counter = () => {
    
    const countAndRefetch = (counterFunc, refetch) => {
      counterFunc();
      refetch();
    }

    const { loading, error, data, refetch } = useQuery(EXCHANGE_RATES);
    if (loading) return <p>Loading ...</p>;
    if (error) return <div>Error :(</div>;

    return (
      <AppContext.Consumer>
        {appContext => (
          <div>
            <p onClick={() =>
              countAndRefetch(appContext.counterFunc, refetch)}>{appContext.state.counter}
            </p>
            {data.rates.map((rate, i) => 
              <p key={`rate-${i}`}>{rate.currency}: {rate.rate}</p>
            )}
          </div>
        )}
      </AppContext.Consumer>
    )
  }

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


