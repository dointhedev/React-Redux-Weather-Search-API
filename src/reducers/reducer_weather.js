import {FETCH_WEATHER} from "../actions/index";

export default function (state = [], action) {
    console.log('reqeust:',action)

    switch (action.type) {
        case FETCH_WEATHER:
        return [action.payload.data, ...state];  
        default:
        return state; 
    }
    
}