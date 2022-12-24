import React from 'react'
import UserLeftBar from '../../../component/UserComponent/UserLeftBar/UserLeftBar'
import UserRightBar from '../../../component/UserComponent/UserRightBar/UserRightBar'
import Navbar from '../../../component/UserComponent/Navbar/Navbar'

function FeedPage() {
  return (
    <div>
        <Navbar/>
        <UserLeftBar/>
        <UserRightBar/>
    </div>
  )
}

export default FeedPage