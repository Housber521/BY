<template>
	<view id="search">

		<view class="search_box">
			<div class="search-pre-head">
				<div id="searchPreBack" class="search-pre-back searchBack">
					<svg class="icon" aria-hidden="true">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more-copy"></use>
					</svg>
				</div>
				<div class="search-pre-input">
					<!-- <i class="iconfont search-icon">&#xe623;</i> -->
					<i class="search-icon"></i>
					<form id="myform" action="" onsubmit="return false;" class="forms">
						<input class="inputs" type="search" placeholder="请输入您想要的商品" id="searchPreInput" maxlength="128">
					</form>
					<span class="search-clear none"></span>
				</div>
				<div class="search-pre-btn">
					<button id="searchBtn" class="buttons">搜索</button>
				</div>
			</div>
		</view>

		<!-- 
		<view class="code1">

		</view> -->


	</view>
</template>

<script setup>
</script>

<style scoped>
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
					
					.buttons::after{
						display: none;
					}
				}
			}





		}


	}
</style>