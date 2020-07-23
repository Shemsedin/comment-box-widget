import React from "react";
import { render } from "react-dom";
import App from "./App";

it("App should render fine", () => {
  const div = document.createElement("div");
  render(<App />, div);
});
