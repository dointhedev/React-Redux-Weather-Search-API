import API from "../utils/API";


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function getWeather(city) {
    const REQUEST = API.weatherSearch(city);
    return {type: FETCH_WEATHER, payload: REQUEST};
}
