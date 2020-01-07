const context = {
    state: {
        counter: 0,
        searchPageState: false,
        modalVisibility: false,
        filterLocation: 0,
        windowScroll: 0,
        searchResultId: null,
        datasetCount: null,
        resultsLimit: 10
    },

    newsItems: {
        newsItemOne: {
            image: "TestImage",
            description: "TestDescription",
            readMore: "http://localhost:3000"
        },
        newsItemTwo: {
            image: "",
            description: "Test",
            readMore: "http://localhost:3000"
        },
        newsItemThree: {
            image: "",
            description: "Test",
            readMore: "http://localhost:3000"
        }
    },

    userEmail: "test@test.com",
    authenticated: "true",
    userId: "test",

    sortItems: [
        {
            id: "title",
            label: "Title",
            default: true
        },
        {
            id: "releaseDate",
            label: "Release Date"
        }
    ],
    selectedSort: {
        current: "title",
        previous: "title"
    },

    filterString: "",
    prevFilterString: "",
    filterObject: {},

    images: {
        logoHDR: "test"
    },
    textItems: { searchHeader: "TestSearchHeader" },
    search: {
        term: null,
        previousTerm: null
    },
    searchData: {
        offSet: 10,
        length: 0,
        data: []
    },
    savedSearchesData: {
        data: []
    },
    filterDivRef: {
        current: undefined
    },
    setOffSet: jest.fn(),
    clearSearchData: jest.fn(),
    insertSearchData: jest.fn(),
    insertSavedSearchesData: jest.fn(),
    counterFunc: jest.fn(),
    returnSearchResults: jest.fn(),
    addFilter: jest.fn(),
    removeFilter: jest.fn(),
    outsideRange: jest.fn(),
    setFilterLocation: jest.fn(),
    setFilterId: jest.fn(),
    openFilterBox: jest.fn(),
    closeFilterBox: jest.fn(),
    setSearchResultId: jest.fn(),
    setSearch: jest.fn(),
    removeSavedSearchData: jest.fn(),
    useDatasetCount: jest.fn(),
    filterString: jest.fn(),
    setFilterString: jest.fn(),
    prevFilterString: jest.fn(),
    setPrevFilterString: jest.fn(),
    applyFilter: jest.fn(),
    checkFilters: jest.fn(),
    removeFilter: jest.fn(),
    setSelectedSort: jest.fn()
};

export default context;
