import React from 'react'
import Sidebar from '../../component/AdminComponent/sidebar/Sidebar'
import UserDetails from '../../component/AdminComponent/userDetails/UserDetails'

function AdminUserDetails() {
  return (
    <div className='flex'>
        <Sidebar/>
        <UserDetails/>
    </div>
  )
}

export default AdminUserDetails