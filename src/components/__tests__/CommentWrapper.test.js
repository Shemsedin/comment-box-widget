import React from "react";
import renderer from "react-test-renderer";
import CommentWrapper from "../CommentWrapper";

describe("CommentWrapper", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<CommentWrapper />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
