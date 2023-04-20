<template>

	<view class="doubleRowList" v-for="(item,ind) in goodList" :key="ind">
		<!-- shop -->
		<view class="module-list" v-for="value in item.data" :key="value.routerParams.suId">
			<view @click="goDetail(value)" class="recommendLinkJump">
				<image :src="value.imageOrigin ? value.imageOrigin : ''" class="new-item-img" />
				<dl id="shop-show">
					<dt class="price"><span class="spansb">￥</span> <span class="spans">108</span> <!----></dt>
					<dd class="labels dds"><span class="spans"
							style="background: rgb(171, 127, 209); color: rgb(255, 255, 255); border: 0.15rpx solid rgb(171, 127, 209); border-radius: 4rpx;">爆品</span><span
							class="spans"
							style="background: rgb(255, 255, 255); color: rgb(251, 76, 129); border: 0.15rpx solid rgb(251, 76, 129); border-radius: 4rpx;">一起拼</span>
					</dd>
					<dd class="escp module-subtitle dds">
						{{value.subtitle ? value.subtitle.split("|")[0] : ''}}
					</dd>
					<dd class="escp module-title dds">{{value.mainTitle}}</dd>
					<dd class="last-line dds"><span class="comment">2.6w+条好评</span>
					</dd>
				</dl>
			</view>
		</view>

		<!-- shop -->
	</view>

</template>

<script setup>
	import {
		ref,
		defineProps,
		watchEffect
	}
	from "vue"
	

	const props = defineProps({
		area: Array,
	})


	const goodList = ref([])


	watchEffect(() => {
		goodList.value = props.area
	})

	// 跳转详情
	let goDetail = (Suid) => {
		console.log(Suid.routerParams.suId);
		uni.navigateTo({
			url: '/pages/detail/detail?Suid=' + Suid.routerParams.suId
		})

	}
</script>

<style scoped>
	.doubleRowList {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-wrap: wrap;
		flex-wrap: wrap;
		background-color: white;

		.module-list {
			width: 373.6rpx;
			position: relative;
			border-bottom: 0.2rpx solid #f4f4f4;
			border-right: 0.1rpx solid #f4f4f4;
			background: #fff;
			padding-bottom: 28rpx;

			.recommendLinkJump {
				font-size: 44rpx;

				.new-item-img {
					display: block;
					width: 373rpx;
					height: 374rpx;
					margin-bottom: 16rpx;
				}

				#shop-show {
					width: 373rpx !important;


					.dds {
						margin-left: 24rpx;
						font-size: 24rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.price {
						color: #f7a701;
						margin-bottom: 0.8rpx;
						display: -webkit-flex;
						display: -webkit-box;
						display: flex;
						margin-left: 24rpx;

						.spansb {
							font-size: 20rpx;
							line-height: 50rpx;
						}

						.spans {
							font-size: 32rpx;
						}

					}

					.labels {
						.spans {
							margin-right: 8rpx;
							margin-bottom: 12rpx;
							display: inline-block;
							padding: 0.3rpx 0.4rpx;
						}
					}

					.module-subtitle {
						color: #bf9e6b;
						margin-bottom: 8rpx;
						font-size: 24rpx;
					}

					.module-title {
						margin-bottom: 8rpx;
						color: #4a4a4a;
						line-height: 28rpx;
					}

					.last-line {
						color: #bbbbbb;
						padding-top: 6rpx;

						.comment {
							font-size: 2rpx;
						}
					}
				}
			}
		}
	}
</style>