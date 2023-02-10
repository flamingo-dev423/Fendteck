import { createApp } from 'vue'
import router from './router'
// import VueVideoPlayer from '@videojs-player/vue'
// import 'video.js/dist/video-js.css'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import App from './App.vue'
import './assets/tailwind.css';

createApp(App).use(router).mount('#app')
