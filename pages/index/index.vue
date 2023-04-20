<template>
	<view id="index_home">
		<scroll-view class="box">
			<view class="home-top">
				<view class="search-input-container">
					<view class="search-input" @click="goSearch">
						<view class="byicon-search-2">
						</view>
						<view class="searchIcon">请输入您想要的商品</view>
					</view>
				</view>

				<scroll-view scroll-x class="byui-scroll-content">
					<div class="category-ul">
						<div :class="categoryId == item.categoryId ? 'category-li active' : 'category-li'"
							v-for="(item) in titleAll" @click="titleCl(item.categoryId)" key="item.categoryId">
							{{item.categoryName}}
						</div>
					</div>
				</scroll-view>
			</view>
			<!-- 轮播 -->
			<view class="home-banner">
				<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="3000"
					:duration="1000">

					<swiper-item v-for="(item,ind) in banners">
						<view class="swiper-item">

							<image class="img" :src="item.newImageUrl" mode=""></image>
						</view>
					</swiper-item>
					<!-- <swiper-item>
						<view class="swiper-item"></view>
					</swiper-item> -->
				</swiper>
			</view>
			<!-- 小分类 -->
			<view data-v-bf7bb9e2="" class="home-characteristic">
				<view class="ul">
					<view data-v-bf7bb9e2="">大牌品质</view>
					<view data-v-bf7bb9e2="">/</view>
					<view data-v-bf7bb9e2="">工厂价格</view>
					<view data-v-bf7bb9e2="">/</view>
					<view data-v-bf7bb9e2="">分期支付</view>
					<view data-v-bf7bb9e2="">/</view>
					<view data-v-bf7bb9e2="">顺丰包邮</view>
					<view data-v-bf7bb9e2="">/</view>
					<view data-v-bf7bb9e2="">无忧退款</view>
				</view>
			</view>

			<!-- 品牌男装 -->
			<div data-v-bf7bb9e2="" class="home-operational">
				<ul class="ul">
					<li class="li" v-for="(item) in operational">
						<image :src="item.iconWebp" class="home-operational-icon" />
						<p class="p">{{item.title}}</p> <img v-if="item.superscriptUrl" :src="item.superscriptUrl"
							class="home-operational-point" />
						<b v-if="item.redPointNumber"
							class="sign-superscript-number ico-num-2">{{item.redPointNumber}}</b>
					</li>
				</ul>
			</div>

			<!-- 小组件 -->
			<shop :area="goodList"></shop>

		</scroll-view>
	</view>
</template>

<script setup>
	import shop from "../../components/shop/shop"
	import {
		getHome
	} from '../../api/api.js'
	import {
		ref
	} from "vue"

	import {
		onReachBottom
	} from "@dcloudio/uni-app"


	let banners = ref([]) // 轮播图
	let goodList = ref([]) // 商品列表
	let titleAll = ref([]) // 女装男装
	let categoryId = ref(294) // 女装男装对应索引
	let operational = ref([]) // 品质男装...


	onReachBottom(() => {
		console.log(1111);
	})


	// title 点击
	let titleCl = (id) => {
		categoryId.value = id
	}

	let goSearch = () => {
		uni.navigateTo({
			url:"/pages/search/search"
		})
	}

	let x = async () => {
		let a = (await getHome())
		// console.log(a);
		banners.value = a.data.homeData.banners
		goodList.value = a.data.floorData.blockList[1].block
		titleAll.value = a.data.homeData.oneLevelCategoryList
		operational.value = a.data.homeData.operationNavigation
		// console.log(operational.value);
	};
	x()
	
	
</script>

<style scoped lang="scss">
	.box {
		width: 100%;
		min-height: 100vh;
		background-color: #f4f4f4;
		padding-top: 171rpx;
		position: relative;
	}

	.home-top {
		width: 100%;
		height: 171rpx;
		background-color: antiquewhite;
		position: fixed;
		top: 0;
		left: 0;
		background-color: white;
		z-index: 100;
	}

	.search-input-container {
		height: 64rpx;
		width: 100%;
		background: #fff;
		padding-top: 20rpx;
		padding-bottom: 12rpx;

		.search-input {
			width: 710rpx;
			height: 64rpx;
			margin: 0 auto;
			background: #f4f4f4;
			border-radius: 30rpx;
			overflow: hidden;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-pack: start;
			-webkit-justify-content: flex-start;
			justify-content: flex-start;
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;

			.byicon-search-2 {
				width: 40rpx;
				height: 40rpx;
				background-image: url("../../static/搜索.png");
				background-size: 100% 100%;
				margin: 0 15rpx;
			}

			.searchIcon {
				font-family: PingFangSC-Regular;
				font-size: 28rpx;
				color: #bbb;
			}
		}

	}


	.byui-scroll-content {
		.category-ul {
			display: block;
			white-space: nowrap;
			padding: 0 10rpx;
			color: #000000;

			.category-li {
				display: inline-block;
				font-size: 28rpx;
				height: 72rpx;
				line-height: 72rpx;
				padding: 0 20rpx;
			}

			.active {
				font-family: PingFangSC-Medium;
				border-bottom: 2rpx solid #7f4395;
				color: #7f4395;
			}
		}
	}

	.home-banner {
		height: 260rpx;

		.swiper {
			width: 100%;
			height: 100%;
		}



		.swiper-item {
			width: 100%;
			height: 100%;

			.img {
				width: 100%;
				height: 100%;
			}
		}
	}

	.home-characteristic {
		height: 72rpx;
		width: 750rpx;
		font-size: 24rpx;
		color: #9687a4;
		background: #fff;
		line-height: 72rpx;

		.ul {
			padding: 0;
			width: 100%;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-justify-content: space-around;
			justify-content: space-around;
			list-style: none;
		}
	}

	.home-operational {
		width: 720rpx;
		padding: 15rpx 15rpx 25rpx;
		background: #ffffff;
		margin-bottom: 30rpx;

		.ul {
			padding: 0;
			list-style: none;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-flex-wrap: wrap;
			flex-wrap: wrap;

			.li {
				width: 144rpx;
				overflow: hidden;
				position: relative;
				padding-top: 32rpx;
				margin-top: 1rpx;

				.home-operational-icon {
					width: 48rpx;
					height: 48rpx;
					display: block;
					margin: 0 auto 0.8rpx;
				}

				.p {
					font-size: 22rpx;
					text-align: center;
					height: 24rpx;
					line-height: 24rpx;
					color: #666;
					width: 120rpx;
					padding: 0rem 12rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}

				.home-operational-point {
					display: block;
					position: absolute;
					top: 1rpx;
					left: 12rpx;
					width: 120rpx;
					height: 30rpx;
				}

				.ico-num-2 {
					width: 38rpx;
					background: url(https://static.biyao.com/mnew/img/master/index/Group-2@2x_1d833d2.png) no-repeat;
					background-size: 100% 100%;
				}

				.sign-superscript-number {
					display: inline-block;
					min-width: 29rpx;
					max-width: 50rpx;
					height: 29rpx;
					text-align: center;
					line-height: 29rpx;
					position: absolute;
					top: 0rem;
					right: 18rpx;
					font-family: PingFangSC-Regular;
					font-size: 18rpx;
					color: #fff;
				}
			}
		}
	}
</style>