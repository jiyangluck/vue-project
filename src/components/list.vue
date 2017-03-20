<template>
	<h1 v-on:click="show">这是一个列表</h1>
</template>

<script>
	export default {
		methods:{
			// show:function(){
			// 	this.$emit('myshow',"测试数据")
			// }
			show(){
				this.$emit('myshow',"测试数据")
			}
		}
	}
</script>

<style scoped>
	h1{
		color:blue;
	}
</style>