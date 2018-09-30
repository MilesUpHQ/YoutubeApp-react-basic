import React from 'react';
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar"

const API_KEY = "AIzaSyANCvNnjC99rldCY5jP-KPjDdWFvCqPFBY";
// Create a new component to produce some html

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
//Take this components generated HTML and put it on the browser page.
ReactDOM.render(<App />, document.querySelector('.container'));