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

// 详情页数据
export function getDetail(params) {
	return axios({
		url: beseUrl + "/details",
		data: {
			...params
		}
	})
}