import { combineReducers } from 'redux';
import WeatherReduer from './reducer_weather'

const rootReducer = combineReducers({
  weather: WeatherReduer
});

export default rootReducer;
