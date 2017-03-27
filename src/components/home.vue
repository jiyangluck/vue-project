<template>
	<div>
		<h1>主页</h1>
		<p>您未登录, {{seconds}} 秒后跳转到登录页。</p>
	</div>
</template>

<script>

	export default {
		data(){
			return {
				seconds:5
			}
		},
		mounted(){
			var vm = this;
			
			setInterval(function(){
				vm.seconds--;
				if(vm.seconds === 0){
					vm.$router.push({path:'/login'});
				}
			},1000)
		}
	}
</script>