import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './userDetails.css'

import sampleimg from '../../../Assets/images.jpg'

function UserDetails() {



    
   const [userDetails,setUserDetails] = useState([])

useEffect(()=>{
    axios.get('http://localhost:5000/admin/usersDetails').then((response)=>{
      let responseUserDetails = response.data.res
    setUserDetails(responseUserDetails)
    })
},[])


  return (

    <table class="responsive-table">
    <caption>All Users Details</caption>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Image</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Email Id</th>
        <th scope="col">Join Date</th>
        <th scope="col">Status</th>
        <th scope="col">Block / UnBlock</th>
      </tr>
    </thead>
    <tbody>

    {userDetails.map((details)=>(
      <tr>
        <th scope="row">{details.name}</th>
        <td data-title="Image"><img className='table-image' src={sampleimg} alt="" /></td>
        <td data-title="Phone Number" >{details.phone}</td>
        <td data-title="Email Id<" >{details.email}</td>
        <td data-title="Join Date" >{details.createdat}</td>
        <td data-title="Status">Online</td>
        <td data-title="Block / UnBlock">{ details.block ? <span><i class="fa fa-lock"></i></span> : <span><i class="fa fa-lock-open"></i></span> }</td>
      </tr>
          ))}

    </tbody>
  </table>

  )
}

export default UserDetails