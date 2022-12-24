import React from 'react'
import Logo from "../../../asset/Logo.png"
import { useNavigate } from 'react-router-dom'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ForumIcon from '@mui/icons-material/Forum';






function Header() {
  const Navigate = useNavigate()

  return (
        <header class="text-white w-full bg-green-700 relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
  <a href="/" class="flex items-center whitespace-nowrap text-2xl font-black">
    <span className="mr-2 w-16">
      <img src={Logo} alt="" />
    </span>
  </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-9 right-5 cursor-pointer lg:hidden" for="navbar-open">
    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="peer-checked:pt-8 peer-checked:max-h-80 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
    <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
      <li class="lg:mr-12"><a class="rounded text-white transition hover:text-blue-900 hover:border-b-4 hover:border-blue-900" href="#">Home</a></li>
      <li class="lg:mr-12"><a class="rounded text-white transition hover:text-blue-900 hover:border-b-4 hover:border-blue-900" href="#">Packages</a></li>
      <li class="lg:mr-12"><a class="rounded text-white transition hover:text-blue-900 hover:border-b-4 hover:border-blue-900" href="#">Contact</a></li>
      <li class="lg:mr-12"><a class="rounded text-white transition hover:text-blue-900 " href="#"><h3 className='hover:border-b-4 hover:border-blue-900'><RssFeedIcon /></h3></a></li>
      <li class="lg:mr-12"><a class="rounded text-white transition hover:text-blue-900 " href="#"><h3 className='hover:border-b-4 hover:border-blue-900'><ForumIcon /></h3></a></li>
    </ul>
    <hr class="mt-4 w-full lg:hidden" />
    <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
      <a href="/login" title="" class="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"> Log in </a>
      <a href="/signup" title="" class="whitespace-nowrap rounded-xl bg-blue-900 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600">sign up</a>
    </div>
  </nav>
</header>
  )
}

export default Header