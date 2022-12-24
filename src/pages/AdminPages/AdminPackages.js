import React from 'react'
import Sidebar from '../../component/AdminComponent/sidebar/Sidebar'
import Packages from '../../component/AdminComponent/packages/Packages'

function AdminPackages() {
  return (
    <div className='flex'>
        <Sidebar/>
        <Packages/>
    </div>
  )
}

export default AdminPackages