const context = {
    state: {
        counter: 0
    },
    counterFunc: jest.fn(),
    newsItems: {
        newsItemOne: {
            image: "",
            description: "test description",
            readMore: "#"
        }
    }
};

export default context;
