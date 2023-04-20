import axios from "./axios.js"

const beseUrl = "http://192.168.212.95:5056"

export function getClassify(params) {
	return axios({
		url: beseUrl + '/classify',

	})
}

// 获取当前页面ID
export function getHome() {
	return axios({
		url: beseUrl + "/home",
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
