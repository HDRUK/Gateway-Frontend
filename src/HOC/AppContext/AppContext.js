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

    filterObject = [
        {
            id: 0,
            title: "Date created"
        },
        {
            id: 1,
            title: "Classifier",
            values: [
                {
                    id: 0,
                    title: "First classifier"
                },
                {
                    id: 1,
                    title: "Second classifier"
                },
                {
                    id: 2,
                    title: "Third classifier"
                },
                {
                    id: 3,
                    title: "Fourth classifier"
                },
                {
                    id: 4,
                    title: "Fifth classifier"
                }
            ]
        },
        {
            id: 2,
            title: "Test Item",
            values: [
                {
                    id: 0,
                    title: "First test"
                },
                {
                    id: 1,
                    title: "Second test"
                },
                {
                    id: 2,
                    title: "Third test"
                },
                {
                    id: 3,
                    title: "Fourth test"
                },
                {
                    id: 4,
                    title: "Fifth test"
                }
            ]
        },
        {
            id: 3,
            title: "Data model type",
            values: [
                {
                    id: 0,
                    title: "First type"
                },
                {
                    id: 1,
                    title: "Second type"
                }
            ]
        }
    ];

    state = {
        counter: 0,
        searchPageState: this.searchPageStates.form,
        modalVisibility: false,
        filterLocation: 0,
        filterId: null,
        windowScroll: 0
    };

    returnSearchResults = event => {
        if (event.key === "Enter") {
            this.setState({
                searchPageState: this.searchPageStates["results"]
            });
        }
    };

    outsideRange = (number, target, range) => {
        return number < target - range || number > target + range;
    };

    setFilterLocation = () => {
        this.outsideRange(window.scrollY, this.state.windowScroll, 10) &&
            this.setState({ windowScroll: window.scrollY });
        this.itemRef.current &&
            this.outsideRange(this.itemRef.current.getBoundingClientRect().y, this.state.filterLocation, 11) &&
            this.setState({ filterLocation: this.itemRef.current.getBoundingClientRect().y });
    };

    setFilterId = props => {
        this.setState({ filterId: props });
    };

    counterFunc = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    addFilter = props => {
        this.filters[props] = props;
        console.log(this.filters);
    };

    removeFilter = props => {
        delete this.filters[props];
        console.log(this.filters);
    };

    openFilterBox = () => {
        this.setState(
            {
                modalVisibility: true
            },
            () =>
                document
                    .getElementById("main-side-nav")
                    .childNodes[1].addEventListener("scroll", this.setFilterLocation)
        );
    };

    closeFilterBox = () => {
        this.setState(
            {
                modalVisibility: false
            },
            () =>
                document
                    .getElementById("main-side-nav")
                    .childNodes[1].removeEventListener("scroll", this.setFilterLocation)
        );
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
                    setFilterId: this.setFilterId,
                    itemRef: this.itemRef,
                    addFilter: this.addFilter,
                    removeFilter: this.removeFilter,
                    filterHeadings: this.filterHeadings,
                    openFilterBox: this.openFilterBox,
                    closeFilterBox: this.closeFilterBox,
                    filterObject: this.filterObject
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
