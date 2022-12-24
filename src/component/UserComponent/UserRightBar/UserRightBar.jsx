import React from 'react'
import Logo from '../../../Assets/Logo.png'
import './UserRightBar.css'
import {useNavigate} from 'react-router-dom'

function UserRightBar() {
  const Navigate = useNavigate()

  const logout =()=>{
    localStorage.removeItem('admin')
    Navigate('/admin')
  } 

  return (
    <div>
       <section className='rightsidebarsection'>
    <div class="rightsidebar">
      <nav className='rightsidebar-nav'>

        <a href="/adminHome">
        <button className='rightsidebar-button'>
          <span className='rightsidebar-sapn'>
            <i class="fa fa-house"></i>
            <span className='rightsidebar-sapn'>Home</span>
          </span>
        </button>
        </a>

        <a href="/adminUserDetails">
        <button className='rightsidebar-button'>
          <span className='rightsidebar-sapn'>
            <i class="fa fa-users"></i>
            <span className='rightsidebar-sapn'>Users</span>
          </span>
        </button>
        </a>

        <a href="/adminPackagesDetails">
        <button className='rightsidebar-button'>
          <span className='rightsidebar-sapn'>
            <i class="fa fa-location-dot"></i>
            <span className='rightsidebar-sapn'>Packages</span>
          </span>
        </button>
        </a>

        <a href="">
        <button className='rightsidebar-button'>
          <span className='rightsidebar-sapn'>
            <i class="fa fa-envelope">
              <span className='rightsidebar-sapn'>13</span>
            </i>
            <span className='rightsidebar-sapn'>Messages</span>
          </span>
        </button>
        </a>

        <a href="">
        <button className='rightsidebar-button'>
          <span className='rightsidebar-sapn'>
            <i class="fa-solid fa-bell">
              <em></em>
            </i>
            <span className='rightsidebar-sapn'>Notifications</span>
          </span>
        </button>
        </a>

        <a onClick={(e)=>{logout()}}>
        <button className='rightsidebar-button'>
          <span className='rightsidebar-sapn'>
            <i class="fa fa-right-from-bracket"> </i>
            <span className='rightsidebar-sapn'>Logout</span>
          </span>
        </button>
        </a>
      </nav>
    </div>
  </section>
    </div>
  )
}

export default UserRightBar