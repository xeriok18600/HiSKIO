const path = '/carts'

export default (apiWoker) => ({
  // 新增
  addCarts: (payload) => apiWoker.post(`${path}`, payload),
  // 刪除
  deleteCarts: (payload) => apiWoker.delete(`${path}`, payload)
})
