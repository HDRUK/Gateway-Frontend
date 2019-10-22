import React from 'react';

import LandingPage from './Containers/LandingPage/LandingPage.js';
import Apollo from './HOC/Apollo/Apollo.js';

class App extends React.Component {
  render() {
    return (
      Apollo(LandingPage)
    )
  }
}

export default App;
