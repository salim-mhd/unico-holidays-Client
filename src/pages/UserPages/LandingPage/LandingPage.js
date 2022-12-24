
import React from 'react'
import './landingPage.css'
import Navbar from '../../../component/UserComponent/Navbar/Navbar'
import Home from '../../../component/UserComponent/Home/Home'
import Popular from '../../../component/UserComponent/Popular/Popular'
import Offers from '../../../component/UserComponent/Offers/Offers'
import About from '../../../component/UserComponent/About/About'
import Blog from '../../../component/UserComponent/Blog/Blog'
import Footer from '../../../component/UserComponent/Footer/Footer'

const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Popular/>
    <Offers/>
    <About/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default LandingPage

