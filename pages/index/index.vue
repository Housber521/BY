<template>
	<view class="content">
		123
	</view>
</template>

<script setup>
	import {
		getHome
	} from '../../api/api/api.js'
	
	let x = async ()=>{
		let a = (await getHome())
		console.log(a);
	}
	x()
	
</script>

<style>
	
</style>