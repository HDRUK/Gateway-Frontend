import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import hdruk_logo_black from "../../assets/hdruk_black.png";
import nhs_logo from "../../assets/nhs_logo.png";
import ibm_logo_black from "../../assets/ibm_logo_black.png";
import oxford_logo from "../../assets/oxford_logo.png";
import landingPageImage1 from "../../assets/landing_page_image_1.png";
import landingPageImage2 from "../../assets/landing_page_image_2.png";
import landingPageImage3 from "../../assets/landing_page_image_3.png";
import landingPageImage4 from "../../assets/landing_page_image_4.png";
import partnerLogo1 from "../../assets/alliance_logos/1200px-University_Hospitals_Birmingham_NHS_Foundation_Trust_logo.svg.png";
import partnerLogo2 from "../../assets/alliance_logos/NHS Scotland.jpg";
import partnerLogo3 from "../../assets/alliance_logos/NHS Digital logo_RGB-01.jpg";
import partnerLogo4 from "../../assets/alliance_logos/Barts Health NHS Trust (RGB BLUE).jpg";
import partnerLogo5 from "../../assets/alliance_logos/NHS LOGO 4col.jpg";
import partnerLogo6 from "../../assets/alliance_logos/Cystic Fibrosis Trust RGB_Y (3).png";
import partnerLogo7 from "../../assets/alliance_logos/Genomics-England-logo_colour-HI-RES.jpg";
import partnerLogo8 from "../../assets/alliance_logos/H&SClogo.jpg";
import partnerLogo9 from "../../assets/alliance_logos/PHE small logo high res.jpg";
import partnerLogo10 from "../../assets/alliance_logos/HQIP_logo_for web.jpg";
import partnerLogo11 from "../../assets/alliance_logos/1200px-NHS_England_logo.svg.png";
import partnerLogo12 from "../../assets/alliance_logos/CPRD logo.jpg";
import partnerLogo13 from "../../assets/alliance_logos/Chief Scientist Office.jpg";
import partnerLogo14 from "../../assets/alliance_logos/The Brain Tumour Charity Logo in Device Centered - RGB Main.png";
import partnerLogo15 from "../../assets/alliance_logos/NHSX.png";
import partnerLogo16 from "../../assets/alliance_logos/RSC logo.JPG";

import { useQuery, useMutation } from "@apollo/react-hooks";

import { useCookies } from "react-cookie";

import {
    DATASET_COUNT,
    RESULT_DETAIL,
    GET_ACCESS_REQUESTS_BY_USER_ID,
    REQUEST_ACCESS,
    SEARCH_AUDIT_LOG_SAVE
    // RESULT_DETAIL_SHORT
} from "../../queries/queries.js";

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
            setAuthenticated(localStorage.getItem("authenticated") === "true" ? true : false);
        } else {
            localStorage.setItem("authenticated", "true");
            setAuthenticated(localStorage.getItem("authenticated") === "true" ? true : false);
        }
    };

    const [cookies] = useCookies(["sessionID"]);

    const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
    const [userId, setUserId] = useState(localStorage.getItem("userId"));
    const [sessionId, setSessionId] = useState(cookies.sessionID);
    const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") === "true" ? true : false);

    useEffect(() => {
        setSessionId(cookies.sessionID);
    }, [cookies.sessionID, setSessionId]);

    const setUser = (userId, userEmail, token) => {
        localStorage.setItem("userId", userId);
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("token", token);
        setUserId(localStorage.getItem("userId"));
        setUserEmail(localStorage.getItem("userEmail"));
    };

    const [detailData, setDetailData] = useState({ status: "error", data: {} });

    // const [detailShort, setDetailShort] = useState([]);
    const [accessRequests, setAccessRequests] = useState({ status: "error", data: {}, refetch: null });
    const [activeFilter, setActiveFilter] = useState(null);

    const [accessRequested, setAccessRequested] = useState([]);
    const setNewAccessRequest = id => {
        setAccessRequested([...accessRequested, id]);
    };

    const [search, setSearch] = useState({
        term: null,
        previousTerm: null,
        latestSearchAuditLogId: null
    });

    const [searchData, setSearchData] = useState({
        offSet: 0,
        length: 0,
        data: []
    });

    const [searchSaveModalOpen, setSearchSaveModalOpen] = useState(false);
    const [searchSaved, setSearchSaved] = useState(false);
    const [searchSavedState, setSearchSavedState] = useState({
        state: false,
        status: null,
        message: null,
        loading: false,
        error: undefined
    });

    const [savedSearchesData, setSavedSearchesData] = useState({
        data: []
    });

    const images = {
        logoHDR: hdruk_logo_black,
        logoNHS: nhs_logo,
        logoIBM: ibm_logo_black,
        logoOXF: oxford_logo,
        landingPageImage1,
        newsItemOne: landingPageImage2,
        newsItemsTwo: landingPageImage3,
        newsItemThree: landingPageImage4,
        partnerLogo1,
        partnerLogo2,
        partnerLogo3,
        partnerLogo4,
        partnerLogo5,
        partnerLogo6,
        partnerLogo7,
        partnerLogo8,
        partnerLogo9,
        partnerLogo10,
        partnerLogo11,
        partnerLogo12,
        partnerLogo13,
        partnerLogo14,
        partnerLogo15,
        partnerLogo16
    };

    const newsItems = {
        newsItemOne: {
            image: images.newsItemOne,
            title: "What is health data science?",
            description: "HDR release news of new partners in exciting new digital project",
            readMore: "http://localhost:3000"
        },
        newsItemTwo: {
            image: images.newsItemsTwo,
            title: "Work with us",
            description: "HDR release news of new partners in exciting new digital project",
            readMore: "http://localhost:3000"
        },
        newsItemThree: {
            image: images.newsItemThree,
            title: "Better care",
            description: "HDR release news of new partners in exciting new digital project",
            readMore: "http://localhost:3000"
        }
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
    const [filterDivRef] = useState(React.createRef());

    const [sortItems] = useState([
        {
            id: "title",
            label: "Alphabetically by title",
            default: true
        },
        {
            id: "releaseDate",
            label: "Most recently updated"
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

    const removeFilter = ({ filter, valueIndex }) => {
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
                    userId,
                    sessionId,
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

    const [saveAccessRequest] = useMutation(REQUEST_ACCESS);

    const useGetAccessRequests = (userId, selectedSort) => {
        const { data, loading, error, refetch } = useQuery(GET_ACCESS_REQUESTS_BY_USER_ID, {
            variables: {
                userId: userId,
                sortField: {
                    applied: "created_on",
                    value: selectedSort === "oldest" ? "DESC" : "ASC"
                }
            }
        });
        loading
            ? accessRequests.status !== "loading" &&
              setAccessRequests({ status: "loading", data: {}, refetch: refetch || null })
            : error
            ? accessRequests.status !== "error" &&
              setAccessRequests({ status: "error", data: {}, refetch: refetch || null })
            : data.getAccessRequestsByUserID.data !== accessRequests.data &&
              setAccessRequests({ status: "ok", data: data.getAccessRequestsByUserID.data, refetch: refetch || null });
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

    // const [getDetailShort, { loading, error, data }] = useLazyQuery(RESULT_DETAIL_SHORT, {
    //     onCompleted: data => {
    //         console.log(data);
    //         setDetailShort([...detailShort, data]);
    //     }
    // });

    // const getDetailDataShort = id => {
    //     getDetailShort({
    //         variables: { ID: id },
    //         skip: id === null
    //     });

    // loading
    // ? detailData.status !== "loading" && setDetailData({ status: "loading", data: {} })
    // : error
    // ? detailData.status !== "error" && setDetailData({ status: "error", data: {} })
    // : data &&
    //   data.hdrDataModelID.data !== detailData.data &&
    //   setDetailData({ status: "ok", data: data.hdrDataModelID.data });
    // };

    const useDetailData = id => {
        const { loading, error, data } = useQuery(RESULT_DETAIL, {
            variables: { ID: id },
            skip: id === null
        });
        loading
            ? detailData.status !== "loading" && setDetailData({ status: "loading", data: {} })
            : error
            ? detailData.status !== "error" && setDetailData({ status: "error", data: {} })
            : data.hdrDataModelID.data !== detailData.data &&
              setDetailData({ status: "ok", data: data.hdrDataModelID.data });
    };

    const removeSavedSearchData = id => {
        const newSavedSearchesData = savedSearchesData.data.filter(search => search.id !== id);
        setSavedSearchesData({
            data: [...newSavedSearchesData]
        });
    };

    const returnSearchResults = (value, searchSavedBool = false, filters = [], sort = {}) => {
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
        setSearchSaved(searchSavedBool);
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

    const setSearchResultId = id => {
        setState({
            ...state,
            searchResultId: id
        });
    };

    const setFilterId = filterId => {
        setActiveFilter(filterId);
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
                filterDivRef,
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
                useDetailData,
                accessRequests,
                setAccessRequests,
                setNewAccessRequest,
                sortItems,
                selectedSort,
                setSelectedSort,
                useGetAccessRequests,
                saveAccessRequest,
                // getDetailDataShort,
                // detailShort
                handleSearch,
                searchAuditLogSave,
                formatFilterObjectForSave,
                searchSaveModalOpen,
                setSearchSaveModalOpen,
                searchSavedState,
                setSearchSavedState,
                sessionId
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
