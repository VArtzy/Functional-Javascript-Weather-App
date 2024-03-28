import api from './api.js'
import { getWeatherItems } from './model.js'

const toTr = weather => `<tr><td>${weather.dt}</td><td>${weather.temp}</td></tr>`

const populateUI = zip => getWeatherItems({zip, api}).map(weathers => weathers.map(toTr))

export function setupRequest(input, button, results) {
    const zip = input.value
    button.addEventListener('click', () => {
        populateUI(zip).fork(console.error, html => {
            results.innerHTML = html.join('')
        })
    })
}
