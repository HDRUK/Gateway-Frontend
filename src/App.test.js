import React from "react";
import { create } from "react-test-renderer";
import App from "./App";

describe("<App> ", () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = create(<App />);
  });

  it("should test the Panel Snapshot", () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
