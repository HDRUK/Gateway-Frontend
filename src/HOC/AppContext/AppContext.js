import React, { Component } from "react";
import PropTypes from "prop-types";
import hdruk_logo_black from "../../assets/hdruk_black.png";

export const AppContext = React.createContext();

export const AppContextConsumer = AppContext.Consumer;

class AppContextProvider extends Component {
    newsItems = {
        newsItemOne: {
            image: "",
            description: "HDR release news of new partners in exciting new digital project",
            readMore: "http://localhost:3000"
        },
        newsItemTwo: {
            image: "",
            description: "HDR release news of new partners in exciting new digital project",
            readMore: "http://localhost:3000"
        },
        newsItemThree: {
            image: "",
            description: "HDR release news of new partners in exciting new digital project",
            readMore: "http://localhost:3000"
        }
    };

    images = {
        logoHDR: hdruk_logo_black
    };

    textItems: { searcHeader: "What health data do you need?" };

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
                    counterFunc: this.counterFunc,
                    newsItems: this.newsItems,
                    images: this.images,
                    textItems: this.textItems
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
