import React, { Component } from "react";
import PropTypes from "prop-types";

export const AppContext = React.createContext();

export const AppContextConsumer = AppContext.Consumer;

class AppContextProvider extends Component {
    state = {
        counter: 0
    };

    counterFunc = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    counterFunc: this.counterFunc
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

AppContextProvider.propTypes = {
    children: PropTypes.node
};

export default AppContextProvider;
