import React from "react";
import { create } from "react-test-renderer";
import Apollo from "./Apollo";
import { ApolloProvider } from "react-apollo";

describe("<Apollo> ", () => {
    let renderedComponent;
    let renderedOutput;

    const envVarMock = {
        REACT_APP_GRAPH_QL_ENDPOINT: "REACT_APP_GRAPH_QL_ENDPOINT"
    };

    beforeAll(() => {
        process.env.REACT_APP_GRAPH_QL_ENDPOINT = envVarMock.REACT_APP_GRAPH_QL_ENDPOINT;
    });

    beforeEach(() => {
        renderedComponent = create(<Apollo>test</Apollo>);
        renderedOutput = renderedComponent.root;
    });

    it("should test the Apollo HOC", () => {
        expect(process.env.REACT_APP_GRAPH_QL_ENDPOINT).toEqual(envVarMock.REACT_APP_GRAPH_QL_ENDPOINT);
        expect(renderedOutput.props.children).toEqual("test");
        renderedOutput.findByType(ApolloProvider);
    });
});
