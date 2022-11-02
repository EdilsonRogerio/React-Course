import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onInputSubmit("Ricky and morty");
    }, []);

    const onInputSubmit = async input => {
        const response = await Youtube.get("/search", {
            params: {
                q: input,
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    return (
        <div className="ui container">
            <SearchBar
                onFormSubmit={onInputSubmit}
            />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail
                            video={selectedVideo}
                        />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>

            </div>
        </div>
    );

};

export default App;