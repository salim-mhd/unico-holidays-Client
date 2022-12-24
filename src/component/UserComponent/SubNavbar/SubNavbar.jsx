import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../../reduxToolKit/userReducer'
import './SubNavbar.scss'

import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'


import logo from '../../../Assets/Logo.png'
import userNullImag from '../../../Assets/UserNull.png'

const SubNavbar = () => {

  const Navigate = useNavigate()

  const dispatch = useDispatch()
  const Logout =()=>{
    dispatch(setUser(''))
    Navigate('/')
  }

  const user=useSelector((state)=>{
    return state.user.user
  })

  console.log(user.name,'userrrrrrrrrrrrrrrrrrrrrrrr');

  const [active,setActive]=useState('navBar')
  
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  const removeNav =()=>{
    setActive('navBar')
  }

  const [transparent,setTransparent] = useState('header')

  const addBg = ()=>{
    if(window.scrollY >=10){
      setTransparent('header activeHeader')
    }else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <section className="navBarSection">
      <div className='header activeHeader'>

        <div className="logoDiv">
          <a href="/" className="logo">
            <img src={logo} alt="" />        
          </a>
        </div>

        <div className={active}>
        <ul className="navLists flex">
          <li className="navItem">
            <a href="#" className="navLink">Home</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Products</a>
          </li>
          <li className="navItem">
            <a href="/feed" className="navLink">Resurse</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Contact</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Blog</a>
          </li>

{user.name ? <label class="dropdown">

<div class="dd-button">
    <div className='userDropdown'>
    <span>{user.image ? <img src={user.image} alt="" className='userImage'/> : <img src={userNullImag} alt="" className='userImage'/>}</span>
  <span className='userName'>{user.name}</span>
    </div>
</div>

<input type="checkbox" class="dd-input" id="test"/>

<ul class="dd-menu">
  <li><i class="fa fa-user logout-icon"></i>Profile</li>
  <li>Another action</li>
  <li>Something else here</li>
  <li class="divider"></li>
  <li>
    <span onClick={(e)=>{{Logout()}}}><i class="fa fa-arrow-right-from-bracket logout-icon"></i>Log Out</span>
  </li>
</ul>

</label> : <div className="headerBtns flex">
  <button className="btn loginBtn">
    <a href="/login">Login</a>
  </button>
</div>}

        </ul>

        <div onClick={removeNav} className="closeNavbar">
          <AiFillCloseCircle className="icon"/> 
        </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className="icon"/>
        </div>
      </div>
    </section>
  )
}

export default SubNavbar