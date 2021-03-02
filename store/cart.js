export const state = () => ({
  cart: []
})

export const mutations = {
  addCarts (state, payload) {
    state.cart = [...payload]
  }
}

export const actions = {}

export const getters = {
  isCart: (state) => {
    return state.cart.length > 0
  }
}
