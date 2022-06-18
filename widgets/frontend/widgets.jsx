import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Tabs from "./tabs";

const panes = [
  { title: "one", content: "tab 1" },
  { title: "two", content: "tab 2" },
  { title: "three", content: "tab3" },
];

const names = [
  "Abba",
  "Barney",
  "Barbara",
  "Jeff",
  "Jenny",
  "Sarah",
  "Sally",
  "Xander",
];
function Root() {
  return (
    <div>
      <h1>Hello World</h1>
      <Clock />

      <div>
        <Tabs panes={panes} />
      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root />, document.getElementById("root"));
});
