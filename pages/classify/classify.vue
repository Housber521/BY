<template>
	<view>
		<!-- 搜索框 -->
		<!-- <view class="aaa" style=""> -->
		<view class="search-input-container">
			<view class="search-input">
				<text class="searchIcon">
					<image class="byicon-search-2" src="../../static/sousuo.png" mode=""></image>
				</text>
				<text>请输入您想要的商品</text>
			</view>
		</view>
		<!-- </view> -->

		<!-- 左侧导航栏 右边商品列表 -->
		<view class="section-classify">
			<!-- scroll-view 左侧导航栏 -->
			<view class="section-firstCate">
				<view class="byui-scroll-wrapper">
					<view class="byui-scroll-content">
						<view class="ul">
							<view @click="LeftHead(item,index)" v-for="(item, index) in general" :key="index"
								:class="[LeftHeadIndex===index?'li firstCateActive':'li']">
								<text class="escp">{{item.categoryName}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- scroll-view 右边商品列表 -->
			<view class="section-cateList">
				<view class="byui-scroll-wrapper">
					<!-- <view class="byui-scroll-content"> -->
					<view class="content_ul" style="pointer-events: auto;">
						<view class="cateList-first show">
							<view>
								<!-- 标题 -->
								<view class="first-cateList-item flex">
									<view class="first-cateList-name-before"></view>
									<view class="escp first-cateList-name">{{RightTitle}}</view>
									<view class="first-cateList-name-after"></view>
								</view>
								<!--  -->
								<view class="">
									<view v-for="(item, index) in RightData" :key="index" class="cateList-second">
										<view class="list-hd-wrap aLinkJump" @click="goClist(item)">
											<view class="list-hd flex">
												<view class="list-hd-name escp">{{item.categoryName}}</view>
												<view class="list-hd-more">
													<text>更多</text>
													<image class="iconfont byicon-arrow-light-right"
														src="../../static/jinru.png" mode=""></image>
												</view>
											</view>
										</view>
										<!--  -->
										<view class="clear clear_ul">
											<view v-for="(ele, ind) in item.subCategoryList" :key="ind"
												class="cateList-third aLinkJump" @click="goClistAll(ele,ind)">
												<view class="">
													<view class="">
														<view class="">
															<image :src="ele.imageUrl" mode=""></image>
															<view class="escp-double titlt">{{ele.categoryName}}</view>
														</view>
													</view>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		getClassify
	} from '../../api/api.js'

	import {
		ref,
		onMounted
	} from "vue";

	// 获取分类页所有数据
	let RightData = ref([]); // 右侧数据 
	let RightTitle = ref(); // 右侧标题 
	let general = ref([]);

	let arrData = ref([])
	let leftHead = async () => {
		general.value = (await getClassify()).data.listData;
		RightTitle.value = general.value[0].categoryName; // 右侧数据 默认给第一个
		RightData.value = general.value[0].subCategoryList; // 右侧标题 默认给第一个

	}
	leftHead()

	// 左侧导航栏点击事件
	let LeftHeadIndex = ref(0); // 索引记录  进行类名操作
	let num = ref(0);
	let LeftHead = (item, index) => {
		LeftHeadIndex.value = index; // 记录当前索引
		num.value = index
		RightTitle.value = general.value[index].categoryName // 右侧标题 根据索引给相应标题
		RightData.value = general.value[index].subCategoryList // 右侧商品 根据索引给相应数据
	}

	// 商品列表页
	let goClist = (item) => {
		uni.setStorageSync('Clist', item.subCategoryList)
		uni.navigateTo({
			url: '/pages/classifyList/classifyList?categoryId=' + item.categoryId
		})
	}
	let goClistAll = (ele, ind) => {
		let arr = [];
		general.value[num.value].subCategoryList.forEach((item, index) => {
			arr = [...arr, ...item.subCategoryList]
		})
		uni.setStorageSync('Clist', arr)
		uni.navigateTo({
			url: '/pages/classifyList/classifyList?categoryId=' + ele.categoryId
		})

	}
</script>

<style scoped>
	@import url('../../assets/classify.css');
</style>