import React from 'react'
import Logo from '../../../Assets/Logo.png'
import './Sidebar.css'
import {useNavigate} from 'react-router-dom'

function Sidebar() {
  const Navigate = useNavigate()

  const logout =()=>{
    localStorage.removeItem('admin')
    Navigate('/admin')
  } 

  return (
    <div>
       <section className='sidebarsection'>
    <div class="sidebar">
      <header class="sidebar-header">
        <img class="sidebar-logo-img" src={Logo} />
      </header>
      <nav className='sidebar-nav'>

        <a href="/adminHome">
        <button className='sidebar-button'>
          <span className='sidebar-sapn'>
            <i class="fa fa-house"></i>
            <span className='sidebar-sapn'>Home</span>
          </span>
        </button>
        </a>

        <a href="/adminUserDetails">
        <button className='sidebar-button'>
          <span className='sidebar-sapn'>
            <i class="fa fa-users"></i>
            <span className='sidebar-sapn'>Users</span>
          </span>
        </button>
        </a>

        <a href="/adminPackagesDetails">
        <button className='sidebar-button'>
          <span className='sidebar-sapn'>
            <i class="fa fa-location-dot"></i>
            <span className='sidebar-sapn'>Packages</span>
          </span>
        </button>
        </a>

        <a href="">
        <button className='sidebar-button'>
          <span className='sidebar-sapn'>
            <i class="fa fa-envelope">
              <span className='sidebar-sapn'>13</span>
            </i>
            <span className='sidebar-sapn'>Messages</span>
          </span>
        </button>
        </a>

        <a href="">
        <button className='sidebar-button'>
          <span className='sidebar-sapn'>
            <i class="fa-solid fa-bell">
              <em></em>
            </i>
            <span className='sidebar-sapn'>Notifications</span>
          </span>
        </button>
        </a>

        <a onClick={(e)=>{logout()}}>
        <button className='sidebar-button'>
          <span className='sidebar-sapn'>
            <i class="fa fa-right-from-bracket"> </i>
            <span className='sidebar-sapn'>Logout</span>
          </span>
        </button>
        </a>
      </nav>
    </div>
  </section>
    </div>
  )
}

export default Sidebar