import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
// importing the vueInstantSearch kitchen sink but think about shaking it down to only what's required later on. Details:
// https://community.algolia.com/vue-instantsearch/getting-started/using-components.html#only-the-used-components
import InstantSearch from 'vue-instantsearch';

Vue.use(InstantSearch);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      name: 'search',
      path: '/search',
      component: App,
      props: route => ({ query: route.query.q }),
    },
    { path: '/', redirect: '/search' },
  ],
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
