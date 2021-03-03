import axios from 'axios'
import qs from 'qs'
import camelCase from 'lodash/camelCase'

export default ({ store, app }, inject) => {
  const apiWorker = axios.create({
    baseURL: 'https://api.hiskio.com/v2'
  })
  /* Request Interceptor */
  apiWorker.interceptors.request.use((config) => {
    if (!/(\/login)$/.test(config.url)) {
      config.headers.Authorization = `Bearer ${store.state.auth.token}`
    }
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    console.log(config)
    return config
  })
  /* Response Interceptor */
  apiWorker.interceptors.response.use(
    (response) => {
      const { data, status } = response
      if (status && status === 20001 && data.error_code) {
        // console.log(data.error_code)
        return Promise.reject(data.error_code)
      }
      return data
    },
    (err) => {
      const { status } = err.response
      console.log(status)

      return Promise.reject(err.response.status)
    }
  )

  // Collect API modules
  const apiModules = {}
  const requireApiModule = require.context('./api', false, /\.js$/)
  requireApiModule.keys().forEach((fileName) => {
    const moduleConfig = requireApiModule(fileName)
    const moduleName = camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )

    apiModules[moduleName] = moduleConfig.default(apiWorker)
  })

  inject('service', apiModules)
}
