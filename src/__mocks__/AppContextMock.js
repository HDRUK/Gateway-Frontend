const context = {
    newsItems: {
        newsItemOne: {
            image: "",
            description: "Test",
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
        counter: 0
    },
    images: {
        logoHDR: "test"
    },
    counterFunc: jest.fn()
};

export default context;
