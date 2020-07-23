import React from "react";
import { setup } from "../../util/enzyme";
import { shallow } from "enzyme";
import SuggestionList from "../SuggestionList";
import CommentWidget from "../CommentWidget";

setup();

const sampleUsers = {};
sampleUsers.filteredSuggestions = [
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

describe("SuggestionList", () => {
  it("should render a list of filtered users", () => {
    const wrapper = shallow(<SuggestionList {...sampleUsers} />);
    const items = wrapper.find("li");
    expect(items).toHaveLength(sampleUsers.filteredSuggestions.length);
    expect(items.first().text()).toEqual("Paula Turner");
  });
});
