const searchPageStates = {
    form: "form",
    results: "results"
};

const context = {
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

    state: {
        counter: 0,
        searchPageState: searchPageStates.form,
        modalVisibility: false,
        filterLocation: 0,
        filterId: null,
        windowScroll: 0
    },
    images: {
        logoHDR: "test"
    },
    textItems: { searchHeader: "TestSearchHeader" },
    counterFunc: jest.fn(),
    returnSearchResults: jest.fn(),
    addFilter: jest.fn(),
    removeFilter: jest.fn(),
    outsideRange: jest.fn(),
    setFilterLocation: jest.fn(),
    setFilterId: jest.fn(),
    openFilterBox: jest.fn(),
    closeFilterBox: jest.fn()
};

export default context;
