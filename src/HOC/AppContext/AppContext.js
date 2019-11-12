import React, { useState } from "react";
import PropTypes from "prop-types";
import hdruk_logo_black from "../../assets/hdruk_black.png";

// import { useQuery, useLazyQuery } from "@apollo/react-hooks";
// import { CATALOGUE_ITEMS_SEARCH } from "../../queries/queries.js";

export const AppContext = React.createContext();
export const AppContextConsumer = AppContext.Consumer;

const AppContextProvider = props => {
    const [state, setState] = useState({
        counter: 0,
        searchPageState: false
    });

    const newsItems = {
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

    const images = {
        logoHDR: hdruk_logo_black
    };

    const textItems = { searchHeader: "What health data do you need?" };

    const [search, setSearch] = useState({
        term: ""
    });

    const [searchData, setSearchData] = useState({
        offSet: 10,
        length: 0,
        data: []
    });

    const setOffSet = offSet =>
        setSearchData({
            ...searchData,
            offSet
        });

    const setDataLength = length => {
        const newObject = {
            ...searchData,
            length
        };
        console.log("setDataLength", length, newObject);
        setSearchData(newObject);
    };

    const clearSearchData = () => {
        setSearchData({
            ...searchData,
            offSet: 10,
            data: []
        });
    };

    const insertSearchData = (length, newData) => {
        setSearchData({
            ...searchData,
            length,
            data: [...searchData.data, ...newData]
        });
    };

    const returnSearchResults = event => {
        if (event.key === "Enter") {
            setState({
                searchPageState: true
            });
            setSearch({
                term: event.target.value
            });
        }
    };

    const counterFunc = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    return (
        <AppContext.Provider
            value={{
                state,
                counterFunc,
                newsItems,
                images,
                textItems,
                returnSearchResults,
                search,
                searchData,
                setSearchData,
                clearSearchData,
                insertSearchData,
                setOffSet,
                setDataLength
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    children: PropTypes.node
};

export default AppContextProvider;
