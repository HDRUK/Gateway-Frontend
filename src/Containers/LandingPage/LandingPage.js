import React from "react";
import logo from "./logo.svg";
import "./LandingPage.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

const BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;

function LandingPage() {
  const Counter = () => {
    const countAndRefetch = (counterFunc, refetch) => {
      counterFunc();
      refetch();
    };

    const { loading, error, data, refetch } = useQuery(BOOKS);
    if (loading) return <p>Loading ...</p>;
    if (error) return <div>Error :(</div>;

    return (
      <AppContext.Consumer>
        {appContext => (
          <div>
            <p onClick={() => countAndRefetch(appContext.counterFunc, refetch)}>
              {appContext.state.counter}
            </p>
            {data.books.map((book, i) => (
              <p key={`book-${i}`}>
                {book.title}: {book.author}
              </p>
            ))}
          </div>
        )}
      </AppContext.Consumer>
    );
  };

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

export default LandingPage;
