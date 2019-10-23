import React from 'react';

import LandingPage from './Containers/LandingPage/LandingPage.js';
import Context from './HOC/Context/Context.js';
import Apollo from './HOC/Apollo/Apollo.js';

class App extends React.Component {
  render() {
    return (
      <Context>
        <Apollo>
          <LandingPage />
        </Apollo>
      </Context>
    )
  }
}

export default App;
