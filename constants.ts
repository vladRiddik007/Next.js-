import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/posts',
  withCredentials: true,
})
