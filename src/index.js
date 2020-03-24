import React from "react";
import ReactDOM from "react-dom";

const fName = "Michael";
const lName = "Skeen";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello, {`${fName} ${lName}`}!</h1>
    <p>My lucky number is {num + Math.floor(Math.random() * 10)}.</p>
  </div>,
  document.getElementById("root")
);
