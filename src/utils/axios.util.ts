import axios from "axios";

const axiosInstace = axios.create({
    baseURL: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline',
});


export default axiosInstace