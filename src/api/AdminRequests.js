import axios from './Axios'

export const adminlogin=(admin) => { axios.post('/admin/login', admin) }