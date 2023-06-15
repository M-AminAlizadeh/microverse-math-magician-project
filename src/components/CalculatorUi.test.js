import React from "react";
import renderer from "react-test-renderer";
import CalculatorUi from "./CalculatorUi";

describe("CalculatorUi", () => {
  it("renders correctly", () => {
    const component = renderer.create(<CalculatorUi />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});