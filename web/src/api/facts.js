import axios from "./index";
import {returnData} from "./utils";

export function getDayFact() {
    return axios.get('/facts/get_random/')
        .then(returnData)
}