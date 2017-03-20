<template>
	<div>
		<h1>{{mytext}}</h1>
		<List v-on:myshow="showdata"></List>
	</div>
</template>

<style scoped>
	h1{
		color:red;
	}
</style>

<script>
	import List from './list.vue';
	export default {
		data:function(){
			return {
				mytext:'hello mytext'
			}
		},
		methods:{
			showdata:function(data){
				alert(data)
			}
		},
		components:{List}
	}
</script>