import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

function AddPackages() {
  const navigate = useNavigate()
  return (
    <div className='mx-2'>
        <div class="sm:w-full mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-4xl">
  <div class="bg-blue-800 px-10 py-10 text-center text-white">
    <p class="font-serif text-2xl font-semibold tracking-wider">Enter Package Details</p>
    <p class="text-center text-blue-100">Please keep it short and succinct</p>
  </div>

  <div class="space-y-4 px-8 py-10">
    <label class="block" for="name">
      <p class="text-gray-600">Name</p>
      <input class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your name" />
    </label>
    <label class="block" for="name">
      <p class="text-gray-600">Email Address</p>
      <input class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="email" placeholder="Enter your email" />
    </label>
    <label class="block" for="name">
      <p class="text-gray-600">Request</p>
      <textarea class="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."></textarea>
    </label>
    <button onClick={()=>{ navigate("/adminPackagesDetails") }} class="mt-4 rounded-full hover:bg-red-900 bg-red-800 px-4 py-2 text-white"><span className='font-light'><ArrowBackIosIcon/></span><span className='font-semibold'>Back</span></button>
    <button class="mt-4 ml-5 rounded-full bg-blue-800 px-10 py-2 font-semibold  hover:bg-green-700 text-white">Submit</button>
  </div>
</div>

    </div>
  )
}

export default AddPackages