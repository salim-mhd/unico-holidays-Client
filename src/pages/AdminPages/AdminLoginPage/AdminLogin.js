import React, { useEffect, useState } from 'react'
import Logo from "../../../Assets/Logo.png"
import { useNavigate } from 'react-router-dom'
import './adminLogin.css'
import { adminlogin } from '../../../api/AdminRequests'




function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [serverError,setServerError] = useState('')
  const errors = {};

  useEffect(() => {
    setIsSubmit(false)
    const regexMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email) {
      errors.email = "email is required"
    } else if (!regexMail.test(email)) {
      errors.email = "Not a valid email format"
    }
    setFormErrors(errors);
  }, [email])

  useEffect(() => {
    setIsSubmit(false)
    if (!password) {
      errors.password = "password is required"
    } else if (password.length < 4) {
      errors.password = "Password must be more than 4 characters"
    } else if (password.length > 10) {
      errors.password = "Password should not exceed 10 characters"
    }
    setFormErrors(errors);
  }, [password])

  const validate = (email, password) => {

    const regexMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email) {
      errors.email = "email is required"
    } else if (!regexMail.test(email)) {
      errors.email = "Not a valid email format"
    }
    if (!password) {
      errors.password = "password is required"
    } else if (password.length < 4) {
      errors.password = "Password must be more than 4 characters"
    } else if (password.length > 10) {
      errors.password = "Password should not exceed 10 characters"
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', email, password);
    setFormErrors(validate(email, password));
    setIsSubmit(true);
  }

  useEffect((e) => {
    console.log(formErrors, 'useEffect');
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('iffffffffffffffffff');
      let admin = { email, password }     
      adminlogin(admin).then((response) => {
        console.log(response.data.res, 'adminressssssssssssssssssssssssssssss');

        if (response.data.admin) {
          setServerError('')
          localStorage.getItem('admin', response.data.admin)
          navigate('/adminHome')
        }else{ 
          setServerError(response.data.res)
        }

      })
    } else {
      console.log('elseeeeee');
    }
  }, [formErrors]);

  return (

    <div className="admin-container">
      <div className="admin-section">
        <div className='content'>
          <img
            className="logo"
            src={Logo}
            alt="logo"
          />
          <h2 className="admintitle">
            Admin Login
          </h2>
        </div>
        <div className="input-section" >
        {serverError ? <div className='errortext'><i class="fa fa-solid fa-triangle-exclamation"></i> {serverError}</div> : <></>}

          <input type="hidden" name="remember" defaultValue="true" />
          <div className="">
            <div className=''>
              <label htmlFor="email-address" className="label">
                Email address
              </label>
              <input
                onChange={(e) => { setEmail(e.target.value) }}
                value={email}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input"
                placeholder="Email address"
              />
              {formErrors.email ? <div className='errortext'><i class="fa fa-solid fa-triangle-exclamation"></i> {formErrors.email}</div> : <></>}
            </div>
            <div className='inputandlabel'>
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                onChange={(e) => { setPassword(e.target.value) }}
                value={password}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className=""
                placeholder="Password"
              />
            </div>
            {formErrors.password ? <div className='errortext'><i class="fa fa-solid fa-triangle-exclamation"></i> {formErrors.password}</div> : <></>}
          </div>


          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin