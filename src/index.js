import React, {Component} from 'react';
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar"
import VideoList from "./components/video_list"
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyANCvNnjC99rldCY5jP-KPjDdWFvCqPFBY";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: []}

    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({ videos: data })
    });
  }
  render(){
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
//Take this components generated HTML and put it on the browser page.
ReactDOM.render(<App />, document.querySelector('.container'));