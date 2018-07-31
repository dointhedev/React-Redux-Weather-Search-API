import {FETCH_WEATHER} from "../actions/index";

export default function (state = [], action) {
    switch (action.type && state !== [ ]) {
        case FETCH_WEATHER:
        return [action.payload.data, ...state];  
        default:
        return [action.payload, ...state]; 
    }
}