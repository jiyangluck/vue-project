<template>
	<div>
		<h1>登录</h1>
		<form v-on:submit="checklogin">
			<input type="text" placeholder="用户名">
			<input type="password" placeholder="密码">
			<input type="submit" val="登录">
		</form>
	</div>
</template>

<script>
	export default {
		methods:{
			checklogin(){
				this.$router.push({path:'/videos'})
			}
		}
	}
</script>