import axios from './Axios'

export const userlogin = (loginData) => axios.post("/login",loginData)

export const userSignup = (signupData) => axios.post("/signup",signupData)
