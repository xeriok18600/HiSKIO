const path = '/courses'

export default (apiWoker) => ({
  // 取得課程
  fundraising: () => apiWoker.get(`${path}/fundraising`)
})
