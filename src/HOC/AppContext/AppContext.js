import React, { useState } from "react";
import PropTypes from "prop-types";
import hdruk_logo_black from "../../assets/hdruk_black.png";
import { useQuery } from "@apollo/react-hooks";

import { DATASET_COUNT } from "../../queries/queries.js";

export const AppContext = React.createContext();
AppContext.displayName = "AppContext";
export const AppContextConsumer = AppContext.Consumer;

const outsideRange = (number, target, range) => {
    return number < target - range || number > target + range;
};

const AppContextProvider = props => {
    const [state, setState] = useState({
        counter: 0,
        searchPageState: false,
        resultsLimit: 10,
        modalVisibility: false,
        filterLocation: 0,
        windowScroll: 0,
        datasetCount: null,
        searchResultId: null
    });

    const [activeFilter, setActiveFilter] = useState(null);
    const [filters, setFilters] = useState([]);

    const [search, setSearch] = useState({
        term: null,
        previousTerm: null
    });

    const [searchData, setSearchData] = useState({
        offSet: 0,
        length: 0,
        data: []
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

    const setOffSet = offSet =>
        setSearchData({
            ...searchData,
            offSet
        });

    const clearSearchData = () => {
        setSearchData({
            ...searchData,
            offSet: 0,
            length: 0,
            data: []
        });
    };

    const itemRef = React.createRef();

    const filterObject = [
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

    const insertSearchData = (length, newData) => {
        setSearchData({
            ...searchData,
            length,
            offset: newData.length,
            data: [...newData]
        });
    };

    const useDatasetCount = () => {
        const { loading, error, data } = useQuery(DATASET_COUNT);
        if (loading || error) return null;
        data.hdrDataModelSearch.count !== state.datasetCount &&
            setState({
                ...state,
                datasetCount: data.hdrDataModelSearch.count
            });
    };

    const returnSearchResults = value => {
        !state.searchPageState &&
            setState({
                ...state,
                searchPageState: true
            });
        setSearch({
            ...search,
            term: value
        });
    };

    const setFilterLocation = () => {
        outsideRange(window.scrollY, state.windowScroll, 10) &&
            setState({
                ...state,
                windowScroll: window.scrollY
            });
        itemRef.current &&
            outsideRange(itemRef.current.getBoundingClientRect().y, state.filterLocation, 11) &&
            setState({
                ...state,
                filterLocation: itemRef.current.getBoundingClientRect().y
            });
    };

    const setFilterId = filterId => {
        setActiveFilter(filterId);
    };

    const setSearchResultId = id => {
        setState({
            ...state,
            searchResultId: id
        });
    };

    const counterFunc = () => {
        setState({
            ...state,
            counter: state.counter + 1
        });
    };

    const addFilter = id => {
        setFilters([...filters, id]);
    };

    const removeFilter = id => {
        setFilters(filters.filter(f => f !== id));
    };

    const openFilterBox = () => {
        setState({
            ...state,
            modalVisibility: true
        });
        document.getElementById("main-side-nav").childNodes[1].addEventListener("scroll", setFilterLocation);
    };

    const closeFilterBox = () => {
        setState({
            ...state,
            modalVisibility: false
        });
        document.getElementById("main-side-nav").childNodes[1].removeEventListener("scroll", setFilterLocation);
    };

    const loginUser = () => {
        fetch("/login")
            .then(res => {
                console.log("RES ", res.status);
            })
            .catch(err => {
                console.log("ERROR ", err);
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
                setSearch,
                searchData,
                setSearchData,
                clearSearchData,
                insertSearchData,
                setOffSet,
                setFilterLocation,
                setFilterId,
                itemRef,
                activeFilter,
                addFilter,
                removeFilter,
                openFilterBox,
                closeFilterBox,
                filterObject,
                setSearchResultId,
                loginUser,
                useDatasetCount
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
