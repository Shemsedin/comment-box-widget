import React from "react";
import { setup } from "../../util/enzyme";
import { shallow, mount } from "enzyme";
import CommentWidget from "../CommentWidget";
import Config from "../../config/config";

setup();

const sampleUsers = [
  {
    username: "pturner0",
    avatar_url:
      "https://secure.gravatar.com/avatar/cd4318b7fb1cf64648f59198aca8757f?d=mm",
    name: "Paula Turner",
  },
  {
    username: "pdixon1",
    avatar_url:
      "https://secure.gravatar.com/avatar/be09ed96613495dccda4eeffc4dd2daf?d=mm",
    name: "Patrick Dixon",
  },
  {
    username: "mhansen2",
    avatar_url:
      "https://secure.gravatar.com/avatar/15442f219c2c472e0f1572aacc1cdfd7?d=mm",
    name: "Michael Hansen",
  },
  {
    username: "nbennett3",
    avatar_url:
      "https://secure.gravatar.com/avatar/e21a9ebe5d4937a2d968a97e21bb9480?d=mm",
    name: "Nicholas Bennett",
  },
];

describe("CommentWidget", () => {
  it("should start mention trigger", () => {
    const component = shallow(<CommentWidget users={sampleUsers} />);
    const InputTrigger = component.find("t");
    InputTrigger.props().trigger.keyCode;
    expect(InputTrigger.props().trigger.keyCode).toEqual(
      Config.KEY_CODES.TRIGGER_MENTION
    );
  });

  it("should update the state on onChange event on textarea", () => {
    const component = shallow(<CommentWidget users={sampleUsers} />);
    // We are mocking event so it is how we are doing on handleTextareaInput
    // i.e. we are getting the input value and updating state's textAreaValue
    // with it.
    const txtValue = "some value";
    const mockEvent = {
      target: {
        name: "textAreaValue",
        value: txtValue,
      },
    };
    const expected = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      top: null,
      left: null,
      startPosition: null,
      isTriggered: false,
      textAreaValue: txtValue,
    };

    component.instance().handleTextareaInput(mockEvent);
    expect(component.instance().state).toEqual(expected);
  });
});
