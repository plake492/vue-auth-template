import Vue from 'vue'
import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3000'
})

API.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`
  return config
}, error => {
  return Promise.reject(error)
})

export const sendReq = async () => await API.get('/test')
