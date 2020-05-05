import axios from 'axios'

const MC_DC = process.env.MC_DC || 'us8'
const MC_AUDIENCE_ID = process.env.MC_AUDIENCE_ID || '839995474b'
const MC_API_KEY = process.env.MC_API_KEY || 'c2986fd0d67de255fcde242599c9797e-us8'

const baseURL = `https://${MC_DC}.api.mailchimp.com/3.0`

const Http = axios.create({ baseURL })

Http.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${MC_API_KEY}`
  return request
})

export const ENDPOINT = {
  AUDIENCE: `lists/${MC_AUDIENCE_ID}/members`
}

export default Http
