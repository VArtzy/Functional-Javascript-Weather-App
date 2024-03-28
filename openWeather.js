import { Task } from './types.js';
import { compose } from 'rambda';

const makeWeatherUrl = ({zip, api}) =>
    `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${api}`

const fetchIt = url => Task((rej, res) => fetch(url).then(x => x.json()).then(res).catch(rej))

const OpenWeather = {
    fetch: compose(fetchIt, makeWeatherUrl)
}

export { OpenWeather }
