import { setupRequest } from './setupRequest.js'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <input id="zip" value="55401"/>
    <button id="go">Go</button>
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Temp</th>
            </tr>
        </thead>
        <tbody id="results"></tbody>
    </table>
  </div>
`

setupRequest(document.querySelector('#zip'), document.querySelector('#go'), document.querySelector('#results'))
