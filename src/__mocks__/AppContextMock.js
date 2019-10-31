const context = {
    state: {
        counter: 0
    },
    counterFunc: jest.fn(),
    newsItems: {
        newsItemOne: {
            image: "",
            description: "test description one",
            readMore: "#"
        },
        newsItemTwo: {
            image: "",
            description: "test description two",
            readMore: "#"
        },
        newsItemThree: {
            image: "",
            description: "test description three",
            readMore: "#"
        }
    }
};

export default context;
