import React from "react";
import renderer from "react-test-renderer";
import Displayer from "./Displayer";

describe("Displayer", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Displayer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
