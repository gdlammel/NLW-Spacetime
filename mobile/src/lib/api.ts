import axios from 'axios'
import { HOST } from '@env'

export const api = axios.create({
  baseURL: `http:/${HOST}/:3333`,
})
