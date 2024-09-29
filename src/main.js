import javascriptLogo from '../assets/javascript.svg'
import viteLogo from '../assets/vite.svg'
import { setupCounter } from './counter.js'
import { initFlowbite } from 'flowbite'
import $ from 'jquery'

  // initialize components based on data attribute selectors
$(function() {
  initFlowbite()
});

$('#app').html(`
  <div>
    <a href="https://vitejs.dev" target="_blank" class="font-medium text-[#646cff] [text-decoration:inherit] hover:text-[#535bf2]">
      <img src="${viteLogo}" class="h-[6em] p-[1.5em] [transition:filter_300ms] hover:[filter:drop-shadow(0_0_2em_#646cffaa)]" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="font-medium text-[#646cff] [text-decoration:inherit] hover:text-[#535bf2]">
      <img src="${javascriptLogo}" class="h-[6em] p-[1.5em] [transition:filter_300ms] hover:[filter:drop-shadow(0_0_2em_#646cffaa)] hover:[filter:drop-shadow(0_0_2em_#f7df1eaa)]" alt="JavaScript logo" />
    </a>
    <h1 class="text-slate-900 dark:text-white text-[3.2em] leading-[1.1]">Hello Vite!</h1>
    <div class="p-[2em]">
      <button 
        id="counter"
        type="button"
        class="rounded-[8px] border-[1px] border-solid border-[transparent] px-[1.2em] py-[0.6em] text-[1em] font-medium [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s] hover:border-[#646cff] outline-[4px_auto_-webkit-focus-ring-color]">
      </button>
    </div>
    <p class="text-slate-900 dark:text-white">
      Click on the Vite logo to learn more
    </p>
  </div>
`);

setupCounter('#counter')
