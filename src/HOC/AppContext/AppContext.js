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

    textItems = { searchHeader: "What health data do you need?" };

    searchPageStates = {
        form: "form",
        results: "results"
    };
    itemRef = React.createRef();

    state = {
        counter: 0,
        searchPageState: this.searchPageStates.form,
        modalVisibility: false,

        filterLocation: 0,
        filterId: 0
    };

    returnSearchResults = event => {
        if (event.key === "Enter") {
            this.setState({
                searchPageState: this.searchPageStates["results"]
            });
        }
    };

    setFilterLocation = () => {
        this.itemRef.current && this.setState({ filterLocation: this.itemRef.current.getBoundingClientRect().y });
    };

    setFilterId = props => {
        this.setState({ filterId: props });
    };

    counterFunc = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    toggleModal = () => {
        this.setState({
            modalVisibility: !this.state.modalVisibility
        });
        // this.state.itemRef.current && console.log(this.state.itemRef.current.getBoundingClientRect().y);
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    counterFunc: this.counterFunc,
                    newsItems: this.newsItems,
                    images: this.images,
                    textItems: this.textItems,
                    returnSearchResults: this.returnSearchResults,
                    setFilterLocation: this.setFilterLocation,
                    toggleModal: this.toggleModal,
                    setFilterId: this.setFilterId,
                    itemRef: this.itemRef
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
