import axios from 'axios'
import Utils from '../helpers/utils'

const instance = axios.create({
  baseURL: Utils.base_uri,
})

export default instance