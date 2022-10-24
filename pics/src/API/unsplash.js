import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID HcdUQD6OeV7sJZBaUdby59OllC4XneLwsxOUkgof2Dc",
    }
});