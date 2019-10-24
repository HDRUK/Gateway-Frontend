import React from "react";

import LandingPage from "./Containers/LandingPage/LandingPage.js";
import AppContext from "./HOC/AppContext/AppContext.js";
import Apollo from "./HOC/Apollo/Apollo.js";

class App extends React.Component {
    render() {
        return (
            <Apollo>
                <AppContext>
                    <LandingPage />
                </AppContext>
            </Apollo>
        );
    }
}

export default App;
