import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app.vue';
import Movie from './components/movie.vue';
import Videos from './components/videos.vue';
import Home from './components/home.vue';
import List from './components/list.vue';
import VueResource from 'vue-resource';

Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes:[
		{path:'/',component:Home},
		{path:'/movie',component:Movie},
		{path:'/videos',component:Videos}
	]
})

new Vue({
	el:'#app',
	components:{App,Home,Videos,Movie},
	router
})


