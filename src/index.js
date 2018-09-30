import React from 'react';
import ReactDOM from "react-dom";

// Create a new component to produce some html

const App = () => {
  return <div>Hi!</div>
}
//Take this components generated HTML and put it on the browser page.
ReactDOM.render(<App />, document.querySelector('.container'));