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
