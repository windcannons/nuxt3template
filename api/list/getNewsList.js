import {
    requests
} from "../http.js";

export let getNewsList = (data)=>{
    return requests.get(`/api/owNews/getNewsList`,data)
}

