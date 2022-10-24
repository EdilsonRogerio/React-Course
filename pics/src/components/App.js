import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubimt(term) {
        axios.get("https://api.unsplash.com/search/photos", {
            params: {
                query: term,
            },
            headers: {
                Authorization: "Client-ID HcdUQD6OeV7sJZBaUdby59OllC4XneLwsxOUkgof2Dc",
            }
        });
    }
    render () {
        return (
            <div className="ui container" style={{marginTop: "50px"}}>
                <SearchBar onSubmit={this.onSearchSubimt} />
            </div>
        );
    }
}

export default App;