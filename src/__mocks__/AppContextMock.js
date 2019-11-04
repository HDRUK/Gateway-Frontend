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

    state: {
        counter: 0,
        searchPageState: searchPageStates.form
    },
    images: {
        logoHDR: "test"
    },
    textItems: { searchHeader: "TestSearchHeader" },
    counterFunc: jest.fn(),
    returnSearchResults: jest.fn()
};

export default context;
