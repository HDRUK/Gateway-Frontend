const context = {
    state: {
        counter: 0,
        searchPageState: false,
        modalVisibility: false,
        filterLocation: 0,
        windowScroll: 0,
        searchResultId: undefined
    },

    filters: [],

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

    filterObject: [
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
    ],

    images: {
        logoHDR: "test"
    },
    textItems: { searchHeader: "TestSearchHeader" },
    search: {
        term: ""
    },
    searchData: {
        offSet: 10,
        length: 0,
        data: []
    },
    setOffSet: jest.fn(),
    clearSearchData: jest.fn(),
    insertSearchData: jest.fn(),
    counterFunc: jest.fn(),
    returnSearchResults: jest.fn(),
    addFilter: jest.fn(),
    removeFilter: jest.fn(),
    outsideRange: jest.fn(),
    setFilterLocation: jest.fn(),
    setFilterId: jest.fn(),
    openFilterBox: jest.fn(),
    closeFilterBox: jest.fn(),
    setSearchResultId: jest.fn()
};

export default context;
