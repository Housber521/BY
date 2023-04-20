<template>
	<view>
		<view class="editor-wrap" id="by_w">
			<view class="header">
				<view class="header-down"
					style="background-image: url('https://bfs.biyao.com/group1/M00/B4/3B/rBACW1yjqW6Ae7RhAAAd5r4TJxY228.jpg')">
					<view class="header-price">50元</view>
					<view class="header-right">
						<view class="top-p">
							<text></text>
							<text>00:00:00
								<text>7</text>
							</text>
							后过期
						</view>
						<view class="bottom-p">下载app领取新用户限量专属特权</view>
					</view>
				</view>
			</view>
			<!-- 顶部 商品、评价、详情 -->
			<!-- <view class="editor-wrap" id="by_w">
			<view class="tabs" style="opacity: 1; transform: scaleY(1);">
				<view class="commodity active">
					<view class="sprites-icon dingwei tabs1">商品</view>
				</view>
			</view>
		</view> -->

			<!--  -->
			<view class="gl-wrap" style="padding-bottom: 40rpx;">
				<!-- 1. 商品部份 -->
				<view class="commodity">
					<!-- 轮播 -->
					<view class="gl-slider">
						<swiper indicator-dots indicator-color='#fff' indicator-active-color="red" circular
							class="gl-img-slider">

							<swiper-item v-for="(item,index) in detailData.imgList" key="index">
								<image :src="item.largeImg" mode=""></image>
							</swiper-item>
						</swiper>
					</view>

					<!-- 商品基本信息 -->
					<view class="gl-base-detial-wrap section">
						<view class="price-collec-info">
							<view class="price base-price">
								￥<text>{{detailData.suData?detailData.suData.price:''}}</text>
							</view>
							<view class="al-pay-hb">
								<text class="sprites-icon"></text>
								支持花呗分期付款
							</view>
							<view class="collect">
								<!-- <text class="sprites-icon"></text> -->
								<view class="collectText">收藏</view>
							</view>
						</view>

						<!--  -->
						<view class="makers-info">
							<view class="markers-text">
								<!-- <view class="sprites-icon img"></view> -->
								{{detailData.supplierBackground?detailData.supplierBackground:''}}
							</view>
							<view class="generate-time">
								生产周期:
								<text class="duration-days">{{detailData.suData?detailData.suData.duration:''}}</text>
								天
								<!-- <text class="iconfont"></text> -->
							</view>
						</view>

						<!--  -->
						<view class="product-h1-title">{{detailData?detailData.longProductName:''}}</view>
						<view class="product-h3-desc">{{detailData?detailData.productSale:''}}</view>
					</view>

					<!-- 服务协议 -->
					<view class="gl-service-content gl-service-wrap section">
						<view class="gl-service-list ul">
							<view v-for="(item,index) in ServiceAgreement" key="index" class="li">
								<text space="nbsp">🐷&nbsp;</text>
								{{item.policyName}}
							</view>
						</view>
					</view>

					<!-- 站内参团 -->
					<view
						class="tg-inner-group swiper-container swiper-container-vertical swiper-container-android section">
						<!-- <view class="swiper-wrapper"> -->
						<swiper class="swiper-wrapper" :autoplay="true" :interval="3000" vertical='false' circular
							display-multiple-items=2 disable-touch="false">
							<swiper-item v-for="(item,index) in groupTeam">
								<view class="group-list swiper-slide swiper-slide-next">
									<view class="group-info">
										<view class="flex-center">
											<image class="leader-img" :src="item.avatarUrl" mode=""></image>
											<view class="div">
												<view class="leader-name">{{item.nickname}}</view>
											</view>
										</view>
										<view class="" style="text-align:right;">
											<view class="group-residue">
												还差
												<text class="rsd-num">1</text>
												人拼成
												<br />
												<text class="group-residue-time">剩余
													<text class="h_des">00:00:00</text>
												</text>
											</view>
										</view>
									</view>
									<view class="join-group-btn in-group-buy eventLink">
										参团
									</view>
								</view>
							</swiper-item>
						</swiper>


						<!-- </view> -->
					</view>

					<!-- 拼团玩法 -->
					<view class="gl-rule-wrap">
						<view class="section">
							<view class="gl-rule-title">
								<view class="gl-rule-title-l">拼团玩法</view>
								<view class="gl-rule-title-r">
									<text class="gz">详细规则</text>
									<image class="gl-more iconfont" src="../../static/jinruS.png" mode=""></image>
								</view>
							</view>
						</view>
						<image class="gl-rule-img"
							src="https://static.biyao.com/mnew/img/master/togetherGroup/rule@2x_4b87758.png" mode="">
						</image>
					</view>

				</view>

				<!-- 2. 评价 -->
				<view class="evaluate">
					<view class="gl-comment-box aLinkJump">
						<view class="gl-comment-header">
							<view class="gl-comment-numbers">商品评价 (2579)</view>
							<view class="gl-comment-grades">
								<text>好评率99.3%</text>
								<image src="../../static/jinruS.png" mode=""></image>
							</view>
						</view>
						<view class="gl-comment-box-warp">
							<view class="gl-comment-box-content">
								<view class="person-head flex">
									<view class="head-left flex">
										<view class="head-img">
											<image
												src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJMxEiccw5Ql165jbq2Uib2S61gyLgq6tyHLHmO0RVwWyb3GfgNNaQ1nujqsaYNKibnrb0sSfu1FRsicw/132"
												mode=""></image>
										</view>
										<text class="head-nickname escp">李***超</text>
										<text class="sprites-icon user-vp user-vp5"></text>
									</view>
									<view class="head-right flex">
										<text class="sprites-icon1 label-icon label-icon2"></text>
										<text>满意</text>
									</view>
								</view>
								<view class="gl-comment-time escp-double">2019.09.08 颜色:黑色|尺寸:S</view>
								<view class="gl-comment-detail escp-double">衣服手感不错，合身</view>
							</view>
						</view>
					</view>
				</view>

				<!-- 3. 商家店铺展示区域 -->
				<view class="gl-supplier-wrap section">
					<view class="supplier-info-wrap aLinkJump sectionS">
						<view class="supplier-info-left">
							<image :src="detailData.onSellGoodsInfo?detailData.onSellGoodsInfo.supplierImg:''" mode="">
							</image>
						</view>
						<view class="supplier-info-center">
							<view class="h2">{{detailData.supplierInfo?detailData.supplierInfo.supplierName:''}}</view>
							<view class="p" space="nbsp">
								商品质量:{{detailData.supplierInfo?detailData.supplierInfo.productQuality:''}} &nbsp; &nbsp;
								服务态度: {{detailData.supplierInfo?detailData.supplierInfo.qualityGrade:''}}</view>
						</view>
						<view class="supplier-info-right">
							<text class="span">全部商品
								{{detailData.onSellGoodsInfo?detailData.onSellGoodsInfo.onsellCount:''}}</text>
							<image class="iconfont" src="../../static/jinruS.png" mode=""></image>
						</view>
					</view>

					<!-- 店铺相关商品 -->
					<view class="sipplier-img-wrap">
						<view class="commend-list ul">
							<view v-for="(item,index) in RelatedProducts" key="index" @click="goDetail(item)"
								class="aLinkJump li">
								<view class="commend-list-a a">
									<view class="recommend-pic">
										<image :src="item.imageUrl" mode=""></image>
									</view>
									<view class="recommend-tit inaline commend-list-tit">{{item.title}}</view>
									<view class="item-labels">
										<text style="background:;color:#FB4C81;border-color:#FB4C81">一起拼</text>
									</view>
									<view class="item-price">
										<text class="i">￥</text>
										<text class="item-only-int span">{{item.price}}</text>
									</view>
								</view>
							</view>

						</view>
					</view>
				</view>

				<!-- 4. 商品详情 -->
				<view class="pro-detail-warp">
					<view class="pro-detial-rule">
						<view class="pro-detial-top">
							<!-- heightAuto -->
							<view :class="[flag?'pro-detial-top-content':'pro-detial-top-content heightAuto']">
								<view class="">
									<view v-for="(item,index) in detailData.productTopDetail" key="index" class="dl">
										<view class="dt">{{item.name}}</view>
										<view class="dd">{{item.desc}}</view>
									</view>
								</view>
							</view>
							<view @click="spread" class="pro-detial-top-more">
								<text class="pro-top-more-text">{{spreadTxt}}</text>
								<image class="iconfont pro-top-more" src="../../static/xiajiantou.png" mode=""></image>
							</view>
						</view>
					</view>

					<view class="pro-detial">
						<view class="txq_container">
							<view class="txq_details">
								<rich-text :nodes="productDetails"></rich-text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 支付、参团 -->
			<view class="gl-footer">
				<view class="gl-other-wrap">
					<view class="customer-service">
						<image src="../../static/zixun.png" mode=""></image>
						<text class="gl-service-text" id="liveServerBtn">客服</text>
					</view>
				</view>
				<view class="choose-gl-btn">
					<view class="choose-bottom-btn-wrap">
						<view class="buy-shopcar group-buy-now eventLink li">
							单独购买￥{{detailData.suData?detailData.suData.price:''}}</view>
						<view class="buy-now group-buy open-group-buy eventLink fx-center li">
							新人参团￥{{Number(detailData.togGroupPriceStr).toFixed(0)}}</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部协议 -->
		<view class="index-foot-xyword">
			<view class="xy-link-wrap">
				<text>《用户服务协议》</text>
				|
				<text> 《隐私政策》</text>
			</view>
			<view class="word-wrap">
				必要商城提示您，产品“由某制造商出品”仅为陈述制造商既往生产经历，并不意味着相应产品与特定品牌产品相同或近似。
			</view>
		</view>
	</view>



</template>

<script setup>
	import {
		getDetail
	} from '../../api/api.js';
	import {
		ref
	} from "vue";
	import {
		onLoad
	} from "@dcloudio/uni-app";

	let spreadTxt = ref('展开全部'); // 默认显示的文字
	let flag = ref(true); // 控制商品详情 展开全部和收起功能
	let spread = () => {
		flag.value = !flag.value
		flag.value ? spreadTxt.value = '展开全部' : spreadTxt.value = '收起'
	}


	let detailData = ref([]);
	let groupTeam = ref([]); // 拼团玩法上下轮播数据
	let ServiceAgreement = ref([]); // 拼团玩法上下轮播数据 recommendProducts
	let RelatedProducts = ref([]); // 店铺其他商品
	let productDetails = ref();
	let detail = async (options) => {
		// console.log(options);
		let x = (await getDetail({
			suId: options.Suid
		}))
		// console.log(x.data);
		detailData.value = x.data; // 
		groupTeam.value = x.data.recommendGroups.data.recommendGroup;
		ServiceAgreement.value = x.data.supplierInfo.policy;
		RelatedProducts.value = x.data.onSellGoodsInfo.recommendProducts;
		productDetails.value = x.data.productButtomDetail;
	}

	onLoad((options) => {
		detail(options)
	})

	let goDetail = (Suid) => {
		uni.navigateTo({
			url: '/pages/detail/detail?Suid=' + Suid.suId
		})
	}
</script>

<style scoped>
	@import url('../../assets/detail.css');
</style>