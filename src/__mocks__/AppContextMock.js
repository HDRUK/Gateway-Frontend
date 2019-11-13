const context = {
    state: {
        counter: 0
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
    returnSearchResults: jest.fn()
};

export default context;
