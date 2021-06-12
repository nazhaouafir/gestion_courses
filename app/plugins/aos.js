// @/plugins/aos.js
// I've went ahead to declare all the config here so it is global
// Read up more here: https://github.com/michalsnik/aos

import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({ 
    disable: window.innerWidth < 640,
    offset: 100,
    duration: 700,
    easing: 'ease-in-out-cubic',
    once: true
  }); // or any other options you need

};