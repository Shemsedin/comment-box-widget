import React from "react";
import renderer from "react-test-renderer";
import NoMention from "../NoMention";

describe("NoMention", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<NoMention />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
