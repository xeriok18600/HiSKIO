export const state = () => ({
  cart: [],
  showCart: false
})

export const mutations = {
  addCarts (state, payload) {
    state.cart = [...payload]
  },
  setShowCart (state, payload) {
    state.showCart = payload
  }
}

export const actions = {}

export const getters = {
  isCart: (state) => {
    return state.cart.length > 0
  }
}
