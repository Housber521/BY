<template>
	<view id="search">

		<view class="search_box">
			<div class="search-pre-head">
				<div id="searchPreBack" class="search-pre-back searchBack">
					<!-- <image  src="./../static/fenlei.png"   /> -->
					
					<image class="icon" src="../../static/shouye.png" mode="" @click="home"></image>
					
				
				</div>
				<div class="search-pre-input">
					<!-- <i class="iconfont search-icon">&#xe623;</i> -->
					<i class="search-icon"></i>
					<form id="myform" action="" onsubmit="return false;" class="forms">
						<input class="inputs" @input="searchInput" type="search" placeholder="请输入您想要的商品"
							id="searchPreInput" maxlength="128">
					</form>
					<span class="search-clear none"></span>
				</div>
				<div class="search-pre-btn">
					<button id="searchBtn" class="buttons">搜索</button>
				</div>
			</div>
		</view>


		<view class="code1" v-if="code == 0">
			<div class="search-pre-history-wrap clear" v-if="ls.length">
				<div class="search-pre-history-head">
					<h2 class="h2">历史记录</h2>
					<span class="search-history-del" @click="qc" id="historyDel">
					</span>
				</div>
				<ul class="clear" id="historyUl">
					<view class="li" v-for="(item) in ls" data-index="0">{{item}}</view>

				</ul>
			</div>
			<div class="search-block-bk none" style="display: block;"></div>
			<div class="search-pre-history-wrap clear">
				<div class="search-pre-history-head">
					<h2 class="h2">大家都在搜</h2>
				</div>
				<ul class="clear" id="historyUl">
					<view class="li" data-index="0">耳机</view>
					<view class="li" data-index="1">150被套</view>
					<view class="li" data-index="2">口红豆沙色</view>
					<view class="li" data-index="3">口红</view>
					<view class="li" data-index="4">裙</view>
					<view class="li" data-index="5">1</view>
				</ul>
			</div>
		</view>

		<view class="code2" v-if="code == 1">
			<div id="astlWordsList" class="astl-words-list">
				<li class="astl-words-item fx fx-r-sb fx-c-c" @click="searchListCl(item.sw)" v-for="item in searchList">
					<span class="words">
						<span
							class="key-words">{{searchTxt}}</span>{{ item.sw ? item.sw.split(searchTxt)[1] : ''}}</span>
					<i class="change-word"></i>
				</li>

			</div>
		</view>

		<view class="code3" v-if="code == 2">
			<div id="searchNavWrap" class="none" style="display: block;">
				<div class="searchNav" id="searchNav">
					<div class="nav-li nav-on" data-asccode="normal" data-desccode="normal">综合</div>
					<div class="nav-li" data-asccode="sale_desc" data-desccode="sale_desc">销量</div>
					<div class="nav-li" data-asccode="new" data-desccode="new">上新</div>
					<div class="nav-li nav-two" data-asccode="price_asc" data-desccode="price_desc">价格 <span
							class="nav-icon"></span></div>
					<div class="nav-Filter nav-li">筛选<span class="icon-Filte"></span></div>
				</div>
			</div>
			<div class="search-block">
				<div class="search-templates">
					<div class="singleProductTemplate" v-for="(item) in shopList">
						<ul class="ul">
							<li class="singleProduct  routeLink clear " data-suid="1304445010010000001"
								data-route-type="link"
								data-route="https://m.biyao.com/products/1304445010010000001.html?sid=1681912268483-c0b7-f77cad0abdd37&amp;pos=0&amp;stp=%7B%22spm%22%3A%221.1-100002-500011.qmatch.0%22%2C%22rpvid%22%3A%22bded8c20-1681911623316-a3f1db6582%22%2C%22sem%22%3A%22allmatch%3A1001_2002%22%2C%22aid%22%3A%22%7B%5C%22search%5C%22%3A%5C%2239b219bcdd3ebe12.1681912268591%5C%22%7D%22%7D&amp;jumpTog=1"
								data-trackparam="sid%3D1681912268483-c0b7-f77cad0abdd37%26bkId%3D9323b2b35cf0df76%26pos%3D0%26suid%3D1304445010010000001">
								<img class="img" :src="item.data ? item.data[0].image : ''" data-webp="1" />
								<div class="singleProductDes">
									<p class="singleTitle">{{item.data ? item.data[0].title : ''}}</p>
									<p class="singleShop">{{item.data ? item.data[0].fullTitle : ''}}</p>
									<ul class="singleTag productTag">
										<li class="li"
											style="background:#AB7FD1;border:solid 0.015rem #AB7FD1;color:#FFFFFF; ">爆品
										</li>
										<li class="li"
											style="background:#FFFFFF;border:solid 0.015rem #FB4C81;color:#FB4C81; ">一起拼
										</li>
									</ul>
									<p class="singleBackground">{{item.data ? item.data[0].productDes : ''}}</p>
									<p class="singlePrice"><i>￥</i><span
											class="singlePriceInt">{{item.data ? item.data[0].priceStr : ''}}</span><span
											class="singlePriceCent"></span></p>
									<div class="item-praise-wrap">
										<p class="item-praise escp">{{item.data ? item.data[0].commentInfo : ''}}</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		watchEffect,
		// getGoShop
	} from "vue"
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import {
		getSearchRc,
		getGoShop
	} from "../../api/api.js"

	let code = ref(0) // 页面状态
	let ls = ref([]) // 搜索历史
	let searchTxt = ref("") // 搜索热词
	let flag = ref(true) // 搜索i请求节流
	let searchList = ref([]) // 搜索热词
	let shopList = ref([])

	// 搜素
	let searchInput = (e) => {
		searchTxt.value = e.detail.value
		if (searchTxt.value) {
			code.value = 1
		} else {
			code.value = 0
		}
		if (flag.value) {
			flag.value = false;
			setTimeout(() => {
				flag.value = true;
			}, 1000)
		}
	}
	// 搜索点击
	let searchListCl = async (item) => {
		let ss = uni.getStorageSync("ls") || []
		ss.push(item)
		ls.value = ss
		uni.setStorageSync("ls", ls.value)
		let x = (await getGoShop({
			word: item
		}))
		shopList.value = x.data.data ? x.data.data.blockData[1].templates : [];
		code.value = 2
	}
	// 清楚搜索厉害
	let qc = () => {
		uni.clearStorageSync()
		ls.value = []
	}
	// 
	let home = ()=>{
		uni.switchTab({
			url:"/pages/index/index"
		})
	}
	onLoad(() => {
		ls.value = uni.getStorageSync('ls') || [];
	})

	watchEffect(async () => {
		if (flag.value) {
			console.log(searchTxt.value);
			let x = (await getSearchRc({
				inputquery: searchTxt.value
			}))
			searchList.value = x.data.data ? x.data.data.suggestionwords : [];
			if (searchList.value.length == 0) {
				code.value = 0
			}
			console.log(searchList.value);
		}
	})
</script>

<style scoped>
	.uni-tabbar-bottom {
		display: block !important;
	}

	#search {
		.search-pre {
			position: fixed;
			width: 100%;
			height: 100%;
			background: #fff;
			z-index: 90;
			top: 0;
			left: 0
		}

		.search_box {
			.search-pre-head {
				height: 86rpx;
				display: -webkit-box;
				display: flex;

				.search-pre-back {
					width: 82rpx;
					padding: 11rpx 0rpx;
					height: 64rpx;
					text-align: center;

					.icon {
						font-size: 40rpx;
						width: 40rpx;
						height: 40rpx;
						display: block;
						margin: 12rpx auto;
						margin-left: 24rpx
					}



					.search-icon {
						position: absolute;
						display: inline-block;
						top: 27rpx;
						left: 24rpx;
						width: 36rpx;
						height: 36rpx;
						text-align: center;
						line-height: 36rpx;
						font-size: 30rpx;
						color: gray;
						background: url(https://static.biyao.com/mnew/img/master/search/icon_search@2x_4636d94.png) no-repeat center;
						-webkit-background-size: .36rpx;
						background-size: .36rpx;
						vertical-align: middle
					}
				}

				.search-pre-input {

					position: relative;
					padding: 11rpx 0rpx;
					height: 64rpx;
					width: 568rpx;
					margin: 0 auto;
					border-radius: 30rpx;

					.forms {
						outline: 0;
						width: 568rpx;
						height: 64rpx;
						background: #F4F4F4;
						border-radius: 32rpx;
						font-size: 26rpx;
						-webkit-appearance: none
					}


					.inputs {
						width: 425rpx;
						height: 64rpx;
						padding: 0 68rpx;
						border: 0;
						background: #F4F4F4;
						-webkit-appearance: none;
						outline: 0;
						border-radius: 30rpx;
					}

				}

				.search-pre-btn {
					width: 120rpx;
					height: 64rpx;

					padding: 11rpx 0rpx;

					.buttons {
						padding: 0;
						text-align: center !important;
						width: 100rpx;
						height: 64rpx;
						border: 0 !important;
						margin-left: 10rpx;
						font-family: PingFangSC-Regular;
						color: #7F4395;
						background: #fff;
						font-size: 26rpx;
						line-height: 64rpx;
					}

					.buttons::after {
						display: none;
					}
				}
			}
		}

		.code1 {
			width: 100%;

			.search-pre-history-wrap {
				width: 710rpx;
				padding: 0rpx 20rpx;

				.search-pre-history-head {
					display: flex;
					padding: 0.5rpx 0rpx;

					.h2 {
						width: 650rpx;
						height: 64rpx;
						display: -webkit-box;
						display: flex;
						line-height: 64rpx;
						font-family: PingFangSC-Semibold;
						font-size: 30rpx;
						color: #333;
						font-weight: 500;
					}

					.search-history-del {
						width: 50rpx;
						height: 64rpx;
						background: url(https://static.biyao.com/mnew/img/master/search/icon_del@2x_a0d21a5.png) no-repeat center;
						background-size: 60% 50%;
					}
				}
			}

			#historyUl {
				border: 1px solid transparent;
				display: flex;
				flex-wrap: wrap;

			}

			.li {
				max-width: 320rpx;
				height: 56rpx;
				line-height: 56rpx;
				margin-right: 18rpx;
				margin-bottom: 24rpx;
				padding: 0 28rpx;
				background: #F5F5F5;
				border-radius: 35rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				font-size: 26rpx;

			}

			.search-block-bk {
				width: 100%;
				background: #f2f2f2;
				height: 20rpx;
			}
		}

		.code2 {
			width: 100%;
			padding-top: 10rpx;
			background-color: #f2f2f2;

			.astl-words-list {
				margin-top: 0.8rpx;
				padding-left: 24rpx;
				min-height: calc(100% - 0.8rpx);
				background: #fff;
				border-radius: 12rpx;

				.astl-words-item {
					width: 702rpx;
					height: 88rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.words {
						width: 468rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						height: 32rpx;
						line-height: 32rpx;
						font-size: 26rpx;
						color: #333;

						.key-words {
							color: gray;
						}
					}

					.change-word {
						margin-right: -24rpx;
						width: 68rpx;
						height: 88rpx;
						background: url(https://static.biyao.com/mnew/img/master/search/jiantou3x_98ec6b4.png) center center no-repeat;
						background-size: 22rpx auto;
					}
				}



			}
		}

		.code3 {
			width: 100%;

			.searchNav {
				display: flex;
				justify-content: space-around;
				width: 750rpx;
				border-bottom: 0.15rpx solid #f4f4f4;
				background: #FFF;

				.nav-li {
					position: relative;
					width: 187.5rpx 0rpx;
					padding: 26rpx 0;
					text-align: center;
					font-size: 28rpx;
					color: #666;
					letter-spacing: 0;
					line-height: 28rpx;

					.nav-icon {
						width: 16rpx;
						height: 22rpx;
						display: inline-block;
						margin-left: 0.5rpx;
						background: url(https://static.biyao.com/mnew/img/master/search/Price-off@2x_3b08d6c.png) no-repeat top;
						background-size: 100% 100%;
					}

				}

				.nav-on {
					color: #804097;
				}
			}

			.search-block {
				.search-templates {
					.singleProductTemplate {
						width: 750rpx;
						border-bottom: #f4f4f4 solid 0.15rpx;

						.ul {
							list-style: none;

							.singleProduct {
								width: 726rpx;
								margin-top: 0.1rpx;
								padding: 20rpx 0 20rpx 24rpx;
								background: #fff;
								position: relative;
								display: flex;

								.img {
									width: 266rpx;
									height: 266rpx;
									margin-right: 22.5rpx;

								}

								.singleProductDes {

									width: 420rpx;

									.singleProductDes p.singleTitle {
										font-size: 28rpx;
										width: 420rpx;
										color: #4A4A4A;
										-webkit-line-clamp: 1;
									}

									.singleShop {
										margin: 10rpx 0;
										font-size: 24rpx;
										width: 420rpx;
										color: #999;
										overflow: hidden;
										text-overflow: ellipsis;
										display: -webkit-box;
										-webkit-box-orient: vertical;
										-webkit-line-clamp: 2;
									}

									.productTag {
										overflow: hidden;
										display: flex;

										.li {
											font-size: 20rpx;
											color: #FFF;
											height: 28rpx;
											overflow: hidden;
											line-height: 28rpx;
											padding: 0 0.4rpx;
											border-radius: 0.2rpx;
											margin: 10rpx;
										}
									}

									.singleBackground {
										font-size: .24rem;
										color: #BF9E6B;
										margin-top: 0.09rem;
										-webkit-line-clamp: 1;
									}

									.singlePrice {
										margin-top: 0.9rpx;
										font-size: 32rpx;
										color: #F7A701;

										i {
											font-size: 20rpx;
										}
									}

									.item-praise-wrap {
										display: flex;
										display: -webkit-flex;

										.item-praise {
											font-family: PingFangSC-Regular;
											font-size: 20rpx;
											color: #BBB;
											margin-top: 0.8rpx;
											max-width: 163rpx;
											overflow: hidden;
											text-overflow: ellipsis;
											display: -webkit-box;
											-webkit-box-orient: vertical;
											-webkit-line-clamp: 2;
										}
									}

								}
							}
						}
					}
				}
			}
		}
	}
</style>