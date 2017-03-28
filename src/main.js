import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//自定义组件
import App from './components/app.vue';
import Home from './components/home.vue';
import Movie from './components/movie.vue';
import Videos from './components/videos.vue';
import List from './components/list.vue';
import Login from './components/login.vue';


Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes:[
		{path:'/',component:Home},
		{path:'/login',component:Login},
		{path:'/movie',component:Movie},
		{path:'/videos',component:Videos}
	]
})

new Vue({
	el:'#app',
	components:{App,Home,Videos,Movie},
	router
})


