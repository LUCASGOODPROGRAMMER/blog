import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "ContentType": "application/json",
    }
})

export default blogFetch