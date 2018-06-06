import axios from 'axios'

const API_KEY = 'aa4272bf4c71ade9422627ec317714de';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather( city ) {
    const url = `${ROOT_URL}&q=${city},uk`
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}