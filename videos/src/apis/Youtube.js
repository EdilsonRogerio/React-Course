import axios from "axios";

const KEY = "AIzaSyCnB-c3tx-EI3PsHp6fIs3DQrGhXL35cMk";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 10,
        key: KEY,
        type: "video",
    }
});


