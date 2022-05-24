import React from "react";
import ReactDOM from "react-dom";

const Root = () => {
  const r = [' ', ' ', ' '];
  return <div style={{ color: 'red', fontSize: '23px' }} > Hey React {r} </div>;
};

ReactDOM.render(<Root />, document.getElementById("root"));
