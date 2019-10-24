import React from "react";
import { create } from "react-test-renderer";
import Apollo from "./Apollo";

describe("<Apollo> ", () => {
    let renderedComponent;

    const envVarMock = {
        REACT_APP_GRAPH_QL_ENDPOINT: "REACT_APP_GRAPH_QL_ENDPOINT"
    };

    beforeAll(() => {
        process.env.REACT_APP_GRAPH_QL_ENDPOINT = envVarMock.REACT_APP_GRAPH_QL_ENDPOINT;
    });

    beforeEach(() => {
        renderedComponent = create(
            <Apollo>
                <div>test</div>
            </Apollo>
        );
    });

    it("should test the Apollo HOC", () => {
        expect(process.env.REACT_APP_GRAPH_QL_ENDPOINT).toEqual(envVarMock.REACT_APP_GRAPH_QL_ENDPOINT);
        expect(renderedComponent).toMatchSnapshot();
    });
});
