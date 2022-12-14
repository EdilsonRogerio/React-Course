import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount () {
        this.onInputSubmit("Ricky and morty");
    }

    onInputSubmit = async input => {
        const response = await Youtube.get("/search", {
            params: {
                q: input,
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    };

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video,
        });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar
                    onFormSubmit={this.onInputSubmit}
                />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail
                                video={this.state.selectedVideo}
                            />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;