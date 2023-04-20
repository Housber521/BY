<template>
	<view>
		<view class="header-nav">
			<view class="header-nav-container">
				<view class="header-nav-side left">
					<view @click="back" class="header-icon byicon-home">
						<image src="../../static/shouye.png" mode=""></image>
					</view>
				</view>
				<view class="header-nav-title">cast away illusions</view>
			</view>
		</view>

		<!-- tab -->
		<view id="fixedBar">
			<view class="category-select-scroll-wrap-wrap">
				<view class="category-select-scroll-wrap">
					<view class="category-scroll-box">
						<view class="">
							<view class="byui-scroll-wrapper">
								<scroll-view scroll-x="true">
									<view class="category-ul" style="pointer-events: auto;">
										<!-- category-li active item.categoryId-->
										<view v-for="(item,index) in ClistData" key="index"
											:class="[iinn===index?'category-li active':'category-li']"
											@click="smTab(item,index)">
											<text class="list-item">{{item.categoryName}}</text>
										</view>
									</view>
								</scroll-view>
							</view>
						</view>
					</view>
					<view @click="unfold" class="category-show-icon">
						<image src="../../static/xiajiantou.png" mode=""></image>
					</view>
				</view>

				<!-- category-select-box category-select-box_open category-select-box_showAni -->
				<view
					:class="[flag?'category-select-box category-select-box_open category-select-box_showAni':'category-select-box']">
					<view class="category-select-box-header">
						<view class="title">全部分类</view>
						<view @click="put" class="category-show-icon">
							<image class="xyx" src="../../static/shangjiantou.png" mode=""></image>
						</view>
					</view>
					<view class="category-selct-items-box-wrap">
						<view class="category-select-box-bg"></view>
					</view>
					<view class="category-selct-items-box">
						<view class="ul">
							<view v-for="(item,index) in ClistData" key="index" class="li" @click="smTab(item,index)" :class="[iinn===index?'category-li activeS':'category-li']">
								<text class="list-item">{{item.categoryName}}</text>
							</view>

						</view>
					</view>
				</view>
			</view>
		</view>
		<shop :area="goodList"></shop>
	</view>
</template>

<script setup>
	import {
		ref,
		onActivated
	} from "vue";

	import {
		getClassifyList
	} from '../../api/api.js'

	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	// 
	let back = () => {
		uni.switchTab({
			url:'/pages/index/index'
		})
	}

	let flag = ref(false) // 用来控制导航栏的展开与收起
	// 展开
	let unfold = () => {
		flag.value = true
	}
	// 收起
	let put = () => {
		flag.value = false
	}

	let ClistData = ref();


	let num = ref(0)
	let goodList = ref([]);
	let catId = ref();
	let iinn = ref(0)
	onLoad(async (options) => {

		// console.log(catId.value);
		catId.value = options.categoryId
		ClistData.value = uni.getStorageSync('Clist')
		let x = (await getClassifyList({
			categoryId: catId.value,
			pageIndex: 1,
			onclickIndex: num.value,
		}))
		// console.log(x);
		goodList.value = x.data.data.blockList[0].block
		// console.log(ClistData.value);
	})

	//    onShow((options)=>{
	//  // console.log(options);
	//  // console.log(catId.value);
	// })

	let smTab = async (item, index) => {
		iinn.value = index
		// console.log(item.categoryId);
		num.value = index
		catId.value = item.categoryId
		let x = (await getClassifyList({
			categoryId: catId.value,
			pageIndex: 1,
			onclickIndex: num.value,
		}))
		goodList.value = x.data.data.blockList[0].block
	}
	// onActivated(()=>{

	// })
</script>

<style scoped>
	@import url('../../assets/classifyList.css');
</style>