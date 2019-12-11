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

    const checkAuthenticated = () => {
        if (localStorage.getItem("userId") === "" || localStorage.getItem("userId") === undefined) {
            localStorage.setItem("authenticated", "false");
            setAuthenticated(localStorage.getItem("authenticated"));
        } else {
            localStorage.setItem("authenticated", "true");
            setAuthenticated(localStorage.getItem("authenticated"));
        }
    };

    const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
    const [userId, setUserId] = useState(localStorage.getItem("userId"));
    const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated"));

    const setUser = (userId, userEmail, token) => {
        localStorage.setItem("userId", userId);
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("token", token);
        setUserId(localStorage.getItem("userId"));
        setUserEmail(localStorage.getItem("userEmail"));
    };

    const [activeFilter, setActiveFilter] = useState(null);

    const [search, setSearch] = useState({
        term: null,
        previousTerm: null,
        latestSearchAuditLogId: null
    });

    const [searchSaved, setSearchSaved] = useState(false);

    const [searchData, setSearchData] = useState({
        offSet: 0,
        length: 0,
        data: []
    });

    const [savedSearchesData, setSavedSearchesData] = useState({
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

    const [itemRef] = useState(React.createRef());

    const [filterObject, setFilterObject] = useState({});
    const [filterString, setFilterString] = useState("");
    const [prevFilterString, setPrevFilterString] = useState("");

    const checkFilters = (filter, valueIndex) => {
        const filterValue = filterObject[filter][valueIndex];

        setFilterObject(
            Object.assign({}, filterObject, {
                [filter]: {
                    ...filterObject[filter],
                    [valueIndex]: {
                        ...filterValue,
                        checked: !filterValue.checked
                    }
                }
            })
        );
    };

    const applyFilter = filter => {
        const filterValues = Object.keys(filterObject[filter]).map(valueIndex => ({
            ...filterObject[filter][valueIndex],
            applied: filterObject[filter][valueIndex].checked
        }));

        setFilterObject(
            Object.assign({}, filterObject, {
                [filter]: {
                    ...filterValues
                }
            })
        );
    };

    const removeFilter = (filter, valueIndex) => {
        const filterValue = filterObject[filter][valueIndex];

        setFilterObject(
            Object.assign({}, filterObject, {
                [filter]: {
                    ...filterObject[filter],
                    [valueIndex]: {
                        ...filterValue,
                        checked: false,
                        applied: false
                    }
                }
            })
        );
    };

    const insertSearchData = (length, newData) => {
        const newOffset = Math.ceil(newData.length / 10) * 10;
        setSearchData({
            ...searchData,
            length,
            offSet: newOffset < 10 ? 0 : newOffset - 10,
            data: [...newData]
        });
    };

    const insertSavedSearchesData = newData => {
        setSavedSearchesData({
            ...savedSearchesData,
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

    const removeSavedSearchData = id => {
        const newSavedSearchesData = savedSearchesData.data.filter(search => search.id !== id);
        setSavedSearchesData({
            data: [...newSavedSearchesData]
        });
    };

    const returnSearchResults = (value, searchSaved = false) => {
        !state.searchPageState &&
            setState({
                ...state,
                searchPageState: true
            });
        setSearch({
            ...search,
            term: value
        });
        setSearchSaved(searchSaved);
    };

    const updateSearchAuditLogId = id => {
        setSearch({
            ...search,
            latestSearchAuditLogId: id
        });
    };

    const setFilterLocation = () => {
        if (itemRef.current && outsideRange(itemRef.current.getBoundingClientRect().y, state.filterLocation, 11)) {
            setState({
                ...state,
                filterLocation: itemRef.current.getBoundingClientRect().y
            });
        }

        if (outsideRange(window.scrollY, state.windowScroll, 10)) {
            setState({
                ...state,
                windowScroll: window.scrollY
            });
        }
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

    const openFilterBox = () => {
        setState({
            ...state,
            modalVisibility: true
        });
    };

    const closeFilterBox = () => {
        setState({
            ...state,
            modalVisibility: false
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
                openFilterBox,
                closeFilterBox,
                filterObject,
                setFilterObject,
                searchSaved,
                setSearchSaved,
                setSearchResultId,
                useDatasetCount,
                userId,
                savedSearchesData,
                insertSavedSearchesData,
                userEmail,
                authenticated,
                setUser,
                setAuthenticated,
                checkAuthenticated,
                removeSavedSearchData,
                updateSearchAuditLogId,
                filterString,
                setFilterString,
                prevFilterString,
                setPrevFilterString,
                applyFilter,
                checkFilters,
                removeFilter
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
