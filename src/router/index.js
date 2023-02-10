import { createRouter, createWebHistory } from 'vue-router'
import homeview from '../views/homeview.vue';
import CardName from '../components/CardName.vue';
import vidFiles from '../components/vidFiles.vue';
import Countdown from '../components/Countdown.vue';



const routes = [
    {
      path: '/',
      name: 'homeview',
      component: homeview
    },
    {
      path: '/cardname',
      name: 'CardName',
      component: CardName
    },
    {
      path: '/vidFiles',
      name: 'vidFiles',
      component: vidFiles
    },
    {
      path: '/countdown',
      name: 'Countdown',
      component: Countdown
    }

];

 const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        mode: "history",
        routes
      });

export default router;