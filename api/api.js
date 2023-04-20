import axios from "./axios.js"

const beseUrl = "http://192.168.212.95:5056"


// 获取当前页面ID
export function getHome() {
	return axios({
		url: beseUrl + "/home",
	})
}

// 分类页数据
export function getClassify(params) {
	return axios({
		url: beseUrl + '/classify',

	})
}
// 分类页数据
export function getClassifyList(params) {
	return axios({
		url: beseUrl + '/classify/categoryListNew',
		data: {
			...params
		}
	})
}
// 搜索热词
export function getSearchRc(parmas) {
	return axios({
		url: beseUrl + "/search",
		data:{
			...parmas
		}
	})
}

// 详情页数据
export function getDetail(params) {
	return axios({
		url: beseUrl + "/details",
		data: {
			...params
		}
	})
}
// 搜索热词点击

// http://192.168.212.95:5056/searchShop?word=口红
export function getGoShop(parmas) {
	return axios({
		url: beseUrl + "/searchShop",
		data:{
			...parmas
		}
	})
}
