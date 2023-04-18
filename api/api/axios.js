export default obj => {
  return new Promise((res, rej) => {
  
    uni.request({
      ...obj,
      success(data) {
        res(data)
      },
      fail(err) {
        rej(err)
      }
    })
  })
}