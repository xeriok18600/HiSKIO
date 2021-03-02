export const state = () => ({
  token: '',
  user: {},
  dialog: false
})

export const mutations = {
  getToken (state, payload) {
    state.token = payload
    localStorage.setItem('token', JSON.stringify(payload))
  },
  getUser (state, payload) {
    state.user = { ...payload }
    localStorage.setItem('user', JSON.stringify(payload))
  },
  setDialog (state, payload) {
    state.dialog = payload
  }
}

export const actions = {}

export const getters = {
  isAuth: (state) => {
    return !!state.token
  }
}
