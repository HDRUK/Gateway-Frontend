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
        loading: false,
        data: [
            {
                title: "Card 1"
            },
            {
                title: "Card 2"
            },
            {
                title: "Card 3"
            }
        ]
    },
    counterFunc: jest.fn(),
    returnSearchResults: jest.fn()
};

export default context;
