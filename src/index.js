import React from 'react';
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar"

const API_KEY = "AIzaSyANCvNnjC99rldCY5jP-KPjDdWFvCqPFBY";

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});

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