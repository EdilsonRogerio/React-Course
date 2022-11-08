import { useState, useEffect } from 'react';
import Youtube from '../apis/Youtube';

const useVideos = (defaultSearchInput) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchInput);
    }, [defaultSearchInput]);

    const search = async input => {
        const response = await Youtube.get("/search", {
            params: {
                q: input,
            }
        });

        setVideos(response.data.items);
    };

    return [
        videos,
        search,
    ];
};

export default useVideos;