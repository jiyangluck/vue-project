<template>
	<div>
		<h1>主页</h1>
		<button v-on:click="getdata">获取数据</button>
		<button><router-link to="/videos">视频</router-link></button>
	</div>
</template>

<script>

	export default {
		methods:{
			getdata(){
				this.$http.get('data/text.txt').then(function(res){
					alert(res.data);
				})
			}
		}
	}
</script>