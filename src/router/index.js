import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home';
import Emails from '@/components/Emails';
import Event from '@/components/Event';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        auth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        auth: false
      }
    },
    {
      path: '/emails',
      name: 'Emails',
      component: Emails,
      meta: {
        auth: true
      }
    },
    {
      path: '/event',
      name: 'Event',
      component: Event,
      meta: {
        auth: true
      }
    }
  ]
});
