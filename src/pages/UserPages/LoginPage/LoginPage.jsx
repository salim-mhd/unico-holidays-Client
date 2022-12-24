import React, { useState, useEffect } from 'react'
import './loginPage.css'

import svgimage from '../../../Assets/undraw_location_search_re_ttoj.svg'
import svgimage1 from '../../../Assets/undraw_software_engineer_re_tnjc.svg'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { userlogin, userSignup } from '../../../api/UserRequests'


const LoginPage = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [loginEmail, setLoginEmail]=useState('');
  const [loginPassword, setLoginPassword]=useState('');
  const [loginError,setLoginError]=useState({});
  const [loginSubmit,setLoginSubmit]= useState(false);
  const [loginServerError,setLoginServerError] = useState('')

  const [signupName, setSignupName]=useState('');
  const [signupPhone, setSignupPhone]=useState('');
  const [signupEmail, setSignupEmail]=useState('');
  const [signupPassword, setSignupPassword]=useState('');
  const [signupError,setSignupError]=useState({});
  const [signupSubmit,setSignupSubmit]= useState(false);
  const [signupServerError,setSignupServerError] = useState('')

  const [animation,setAnimation] = useState('login-container')

  const errors = {};

// ------------------------------- Login validations ------------------------------ //

  useEffect(() => {
    setLoginSubmit(false);
    setLoginServerError('')
    const regexMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!loginEmail) {
      errors.loginEmail = "Email Is Required"
    } else if (!regexMail.test(loginEmail)) {
      errors.loginEmail = "Not a Valid Email Format"
    }
    setLoginError(errors);
  }, [loginEmail])

  useEffect(() => {
    setLoginSubmit(false);
    setLoginServerError('')
    if (!loginPassword) {
      errors.loginPassword = "Password Is Required"
    } else if (loginPassword.length < 6) {
      errors.loginPassword = "Password Must be More than 6 Characters"
    } else if (loginPassword.length > 10) {
      errors.loginPassword = "Password Should not Exceed 10 Characters"
    }
    setLoginError(errors);
  }, [loginPassword])

  const loginValidate = (loginEmail, loginPassword) => {

    const regexMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!loginEmail) {
      errors.loginEmail = "Email Is Required"
    } else if (!regexMail.test(loginEmail)) {
      errors.loginEmail = "Not a Valid Email Format"
    }
    if (!loginPassword) {
      errors.loginPassword = "Password Is Required"
    } else if (loginPassword.length < 4) {
      errors.loginPassword = "Password Must be More than 4 Characters"
    } else if (loginPassword.length > 10) {
      errors.loginPassword = "Password Should not Exceed 10 Characters"
    }
    return errors
  }

  const loginHandleSubmit = (e) => {
    e.preventDefault()
    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', loginEmail, loginPassword);
    setLoginError(loginValidate(loginEmail, loginPassword));
    setLoginSubmit(true);
  }

  useEffect(() => {
    console.log(loginError, 'useEffect');
    if (Object.keys(loginError).length === 0 && loginSubmit) {
      const loginData = { loginEmail, loginPassword }
      userlogin(loginData).then((res) => {
        console.log(res.data, 'ressssssssssssssssssssssssssssssss');
        if (res.data.error) {
          let resError = res.data.error
          setLoginServerError(resError)
          console.log(loginServerError, 'erorrrrrrrrrrrrrrrrrrrrrrrr');
        } else {
          let userDetails = res.data.res.user
          let token = res.data.token
          localStorage.setItem('user',userDetails.name)
          console.log(userDetails, 'useDetailssssssssssssssssssssssssssssssss');
          console.log(token, 'tokennnnnnnnnnnnnnnnnnnnnnnnnnn');
          console.log(localStorage.user, 'lockalsotorageeeeeeeeeeeeeeeeeeeeeeee');
          navigate('/')
        }
      })
    }
  }, [loginError]);

// ------------------------------- Signup validations -------------------------------- //

useEffect(() => {
  setSignupSubmit(false);
  setSignupServerError('')
  const regexname = /^[A-Za-z][A-Za-z0-9_ ]{4,14}$/i; 
  if(!signupName){
    errors.signupName= 'name is required';
    }else if(!regexname.test(signupName)){
      errors.signupName="name is not valid"
  }
  setSignupError(errors);
}, [signupName])

useEffect(() => {
  setSignupSubmit(false);
  setSignupServerError('')
  if(!signupPhone){
    errors.signupPhone="phone number is required"
  }else if(signupPhone.length!==10){
    errors.signupPhone="Phone number must be 10 digit"
  }
  setSignupError(errors);
}, [signupPhone])

useEffect(() => {
  setSignupSubmit(false);
  setSignupServerError('')
  const regexMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!signupEmail) {
    errors.signupEmail = "Email Is Required"
  } else if (!regexMail.test(signupEmail)) {
    errors.signupEmail = "Not a Valid Email Format"
  }
  setSignupError(errors);
}, [signupEmail])

useEffect(() => {
  setSignupSubmit(false);
  setSignupServerError('')
  if (!signupPassword) {
    errors.signupPassword = "Password Is Required"
  } else if (signupPassword.length < 6) {
    errors.signupPassword = "Password Must be More than 6 Characters"
  } else if (signupPassword.length > 10) {
    errors.signupPassword = "Password Should not Exceed 10 Characters"
  }
  setSignupError(errors);
}, [signupPassword])

const signupValidate = (signupName,signupEmail,signupPhone,signupPassword)=>{
  const regexname = /^[A-Za-z][A-Za-z0-9_ ]{4,14}$/i; 
    const regexMail=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(!signupName){
      errors.signupName= 'name is required';
      }else if(!regexname.test(signupName)){
        errors.signupName="name is not valid"
    }
    if(!signupEmail){
      errors.signupEmail="email is required"

    }else if(!regexMail.test(signupEmail)){
      errors.signupEmail="Not a valid email format"
    }
    if(!signupPhone){
      errors.signupPhone="phone number is required"
    }else if(signupPhone.length!==10){
      errors.signupPhone="Phone number must be 10 digit"
    }
    if(!signupPassword){
      errors.signupPassword = "password is required"
    }else if(signupPassword.length<4){
      errors.signupPassword = "Password must be more than 4 characters"
    }else if(signupPassword.length>10){
      errors.signupPassword = "Password should not exceed 10 characters"
    }
    return errors
  }

  const signupHandleSubmit=(e)=>{
    e.preventDefault()
    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',signupName,signupEmail,signupPhone,signupPassword);
    setSignupError(signupValidate(signupName,signupEmail,signupPhone,signupPassword));
    setSignupSubmit(true);
  }

useEffect(()=>{
  console.log(signupError,'useEffect');
  if(Object.keys(signupError).length===0 && signupSubmit){
console.log('iffffffffffffffffff');
const signupData ={signupName,signupPhone,signupEmail,signupPassword}
userSignup(signupData).then((respons)=>{
console.log(respons,'hiiiiiiiiiiiiiiiiiiiiiii');
if(respons.data.error){
let resError = respons.data.error 
setSignupServerError(resError)
}else{
setSignupServerError('')
setAnimation("login-container")
}
})

  }
},[signupError]);
 
return (

    <div className={animation}>
      <div className="forms-container">
        <div className="signin-signup">

          <form action='' className="sign-in-form">
            <h2 className="title">Sign In</h2>
            { loginServerError ? <div className='error-text'><i class="fa fa-circle-exclamation error-icon"></i> {loginServerError}</div> : <></> }
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input onChange={(e) => { setLoginEmail(e.target.value) }} value={loginEmail} type="email" placeholder='Email' />
            </div>
            {loginError.loginEmail ? <div className='error-text'><i class="fa fa-triangle-exclamation error-icon"></i> {loginError.loginEmail}</div> : <></>}
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input onChange={(e) => { setLoginPassword(e.target.value) }} value={loginPassword} type="password" placeholder='Password' />
            </div>
            {loginError.loginPassword ? <div className='error-text'><i class="fa fa-triangle-exclamation error-icon"></i> {loginError.loginPassword}</div> : <></>}
            <button onClick={(e)=>{loginHandleSubmit(e)}} className="login-signup-btn" id="sign-in-btn">Login</button>

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>

          </form>

          <form action="" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            
            { signupServerError ? <div className='error-text'><i class="fa fa-circle-exclamation error-icon"></i> {signupServerError}</div> : <></> }
            
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input onChange={(e) => { setSignupName(e.target.value) }} value={signupName} type="text" placeholder='Username' />
            </div>
            
            {signupError.signupName ? <div className='error-text'><i class="fa fa-triangle-exclamation error-icon"></i> {signupError.signupName}</div> : <></>}
            
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input onChange={(e) => { setSignupPhone(e.target.value) }} value={signupPhone} type="number" placeholder='Phone Number' />
            </div>
            
            {signupError.signupPhone ? <div className='error-text'><i class="fa fa-triangle-exclamation error-icon"></i> {signupError.signupPhone}</div> : <></>}
            
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input onChange={(e) => { setSignupEmail(e.target.value) }} value={signupEmail} type="email" placeholder='Email' />
            </div>

            {signupError.signupEmail ? <div className='error-text'><i class="fa fa-triangle-exclamation error-icon"></i> {signupError.signupEmail}</div> : <></>}

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input onChange={(e) => { setSignupPassword(e.target.value) }} value={signupPassword} type="password" placeholder='Password' />
            </div>

            {signupError.signupPassword ? <div className='error-text'><i class="fa fa-triangle-exclamation error-icon"></i> {signupError.signupPassword}</div> : <></>}
            
            <button onClick={(e)=>{signupHandleSubmit(e)}} className="login-signup-btn" id="sign-in-btn">Signup</button>


            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit quidem quivusdam?</p>
            <button onClick={()=>{setAnimation("login-container sign-up-mode")}} className="login-signup-btn transparent" id="sign-up-btn">Sign up</button>
          </div>

          <img src={svgimage} alt="" className='image' />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit quidem quivusdam?</p>
            <button onClick={()=>{setAnimation("login-container")}} className="login-signup-btn transparent" id="sign-in-btn">Login in</button>
          </div>
          <img src={svgimage1} alt="" className='image' />
        </div>


      </div>

    </div>
  )
}

export default LoginPage