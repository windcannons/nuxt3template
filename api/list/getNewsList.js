import {
  Request
} from "../request.js";

export let getNewsList = (data)=>{
    return Request.get(`/api/owNews/getNewsList`,data)
}
