import axios from 'axios'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
})

// Request interceptor – đính kèm Bearer token
// getAuthToken được inject từ ngoài để tránh circular dependency với auth store
let getAuthToken = null

export function setAuthTokenGetter(fn) {
  getAuthToken = fn
}

httpClient.interceptors.request.use((config) => {
  const token = getAuthToken?.()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor – xử lý lỗi toàn cục
let onUnauthorized = null

export function setUnauthorizedHandler(fn) {
  onUnauthorized = fn
}

httpClient.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response?.status === 401) {
      onUnauthorized?.()
    }
    return Promise.reject(err)
  }
)

export default httpClient
