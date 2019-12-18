import React, { useState } from "react";
import PropTypes from "prop-types";
import hdruk_logo_black from "../../assets/hdruk_black.png";
import nhs_logo from "../../assets/nhs_logo.png";
import ibm_logo_black from "../../assets/ibm_logo_black.png";
import oxford_logo from "../../assets/oxford_logo.png";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { SEARCH_AUDIT_LOG_SAVE } from "../../queries/queries.js";
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
    const [detailData, setDetailData] = useState([]);

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
        logoHDR: hdruk_logo_black,
        logoNHS: nhs_logo,
        logoIBM: ibm_logo_black,
        logoOXF: oxford_logo
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

    const [sortItems] = useState([
        {
            id: "title",
            label: "Title",
            default: true
        },
        {
            id: "releaseDate",
            label: "Release Date"
        }
    ]);
    const [selectedSort, setSelectedSort] = useState({
        current: "title",
        previous: "title"
    });

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

    // *****************************
    // *** ON SEARCH DEVELOPMENT ***
    // *****************************

    const [searchAuditLogSave] = useMutation(SEARCH_AUDIT_LOG_SAVE, {
        onCompleted: data => {
            updateSearchAuditLogId(data.searchAuditLogSave.data.id);
        }
    });

    const formatFilterObjectForSave = filterObject => {
        let finalArray = [];
        Object.keys(filterObject)
            .map(filterIndex => {
                return Object.keys(filterObject[filterIndex])
                    .filter(valueIndex => filterObject[filterIndex][valueIndex].applied)
                    .map(valueIndex => ({
                        type: filterIndex,
                        value: filterObject[filterIndex][valueIndex].value
                    }));
            })
            .forEach(array => (finalArray = [...finalArray, ...array]));
        return finalArray;
    };

    const handleSearch = e => {
        if (e && e.key === "Enter" && e.target.value !== search.term) {
            const filterArray = filterObject ? formatFilterObjectForSave(filterObject) : [];
            searchAuditLogSave({
                variables: {
                    userId: userId,
                    searchTerm: e.target.value,
                    endPoint: "",
                    offSet: 0,
                    recordLimit: state.resultsLimit,
                    sort: { applied: selectedSort.current, value: "ASC" },
                    filters: filterArray
                }
            });
            returnSearchResults(e.target.value, false, filterArray, { applied: selectedSort.current });
            clearSearchData();
            return true;
        }
        return false;
    };

    // *****************************
    // *** ON SEARCH DEVELOPMENT ***
    // *****************************

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

    const returnSearchResults = (value, searchSaved = false, filters = [], sort = {}) => {
        const newFilterObjects = {};
        filters &&
            filters.forEach((filter, i) => {
                newFilterObjects[filter.type] = {
                    ...newFilterObjects[filter.type],
                    [i]: { value: filter.value, checked: true, applied: true }
                };
            });

        setFilterObject({
            ...newFilterObjects
        });

        setFilterString(filters ? `?${filters.map(filter => `${filter.type}=${filter.value}`).join("&")}` : "");
        sort &&
            setSelectedSort({
                current: sort.applied,
                previous: sort.applied
            });
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
                removeFilter,
                detailData,
                setDetailData,
                sortItems,
                selectedSort,
                setSelectedSort,
                handleSearch,
                searchAuditLogSave,
                formatFilterObjectForSave
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
