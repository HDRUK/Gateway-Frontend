import React, { Component } from "react";

export const AppContext = React.createContext();

export const AppContextConsumer = AppContext.Consumer;

class AppContextProvider extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.counterFunc = this.counterFunc.bind(this);
    }

    counterFunc() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

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

export default AppContextProvider;
