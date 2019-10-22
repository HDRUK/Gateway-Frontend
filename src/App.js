import React from 'react';

import App from './Containers/App/App.js';
import Apollo from './HOC/Apollo/Apollo.js';

class App extends React.Component {
  render() {
    return (
      <Apollo >
        <App />
      </Apollo>
    )
  }
}

export default App;
