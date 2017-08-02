import Vue from 'vue';
import App from './App.vue'
// importing the vueInstantSearch kitchen sink but think about shaking it down to only what's required later on. Details:
// https://community.algolia.com/vue-instantsearch/getting-started/using-components.html#only-the-used-components
import InstantSearch from 'vue-instantsearch';

Vue.use(InstantSearch);

new Vue({
  el: '#app',
  render: h => h(App)
});
