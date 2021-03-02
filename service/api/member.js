const path = '/me'

export default (apiWoker) => ({
  // 取得使用者
  me: () => apiWoker.get(`${path}`)
})
