import {
    requests
} from "../request.js";

export let getNewsList = (data)=>{
    return requests.get(`/api/owNews/getNewsList`,data)
}
