import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";

class App extends React.Component {

    state = {
        videos: [],
    }

    onInputSubmit = async input => {
        const response = await Youtube.get("/search", {
            params: {
                q: input,
            }
        });

        this.setState({
            videos: response.data.items
        });
    };  

    render () {
        return (
            <div className="ui container">
                <SearchBar 
                    onFormSubmit={this.onInputSubmit}
                />
                I have {this.state.videos.length} videos...
            </div>
        );
    }
}

export default App;