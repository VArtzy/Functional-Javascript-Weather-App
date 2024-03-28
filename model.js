import { OpenWeather } from './openWeather.js'

const Weather = (dt, temp) => ({
    dt,
    temp
})

const toCelcius = (k) => Math.round(k - 273.15)

const toWeather = (dt, temp) => Weather(new Date(dt).toLocaleDateString(), toCelcius(temp))

const prepareItems = w => toWeather(w.dt_txt, w.main.temp)

const getWeatherItems = args => OpenWeather.fetch(args).map(json => json.list.map(prepareItems))

export { getWeatherItems }
