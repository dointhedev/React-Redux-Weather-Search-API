//import axios from "axios";
import axios from "axios";

const BASEURL = "http://api.openweathermap.org/data/2.5/forecast?q=";
const API_KEY = "&appid=a963e6b070ba9a83c487b4ed1c3d0bef";
const COUNTRY = ",US"; 


export default {
  weatherSearch: city => {
    return axios.get(BASEURL + city + COUNTRY + API_KEY);
}}