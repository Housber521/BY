import axios from "./axios.js"

const beseUrl = "http://192.168.212.95:5056"

export function getClassify(params) {
	return axios({
		url: beseUrl + '/classify',
	
	})
}
