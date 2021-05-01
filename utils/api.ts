import axios from 'axios'
import getConfig from 'next/config'
import Router from 'next/router'
const { publicRuntimeConfig } = getConfig()

const $axios = axios.create({
  baseURL: publicRuntimeConfig.backendUrl,
})

$axios.interceptors.request.use(
  (req) => {
    const token = ''
    if (token) req.headers['Authorization'] = 'Bearer ' + token
    return req
  },
  (err) => {
    if (err) return Promise.reject(err)
  }
)

$axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err && err.response.status === 401) return Router.push('/about')
  }
)

export default $axios
