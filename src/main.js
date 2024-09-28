import javascriptLogo from '../assets/javascript.svg'
import viteLogo from '../assets/vite.svg'
import { setupCounter } from './counter.js'
import { initFlowbite } from 'flowbite'
import $ from 'jquery'

  // initialize components based on data attribute selectors
$(document).ready(function() {
  initFlowbite()
});

$('#app').html(`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button 
        id="counter"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      </button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`);

setupCounter('#counter')
