const path = '/auth'

export default (apiWoker) => ({
  // 登入
  login: (payload) => apiWoker.post(`${path}/login`, payload)
})
