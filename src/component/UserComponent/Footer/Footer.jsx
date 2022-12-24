import React, { useEffect } from 'react'
import './Footer.scss'

import {ImFacebook} from 'react-icons/im'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footer">
      <div className="secContainer container grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">

          <div data-aos="fade-up" data-aos-duration="2000" className="footerLogo">
            <a href="#" className="logo">
              <h2 className='icon'>Unico Holidays</h2>
            </a>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="socials flex">
          <ImFacebook className='icon'/>
          <BsTwitter className='icon'/>
          <AiFillInstagram className='icon'/>
        </div>

        </div>

<div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
  <span className="linkTitle">
    Information Links
  </span>
  <li>
    <a href="">Destination</a>
  </li>
  <li>
    <a href="">Support</a>
  </li>
  <li>
    <a href="">Travel & Conditions</a>
  </li>
  <li>
    <a href="">Privacy</a>
  </li>
</div>

<div data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
  <span className="linkTitle">
    Helpful Links
  </span>
  <li>
    <a href="">Destination</a>
  </li>
  <li>
    <a href="">Support</a>
  </li>
  <li>
    <a href="">Travel & Conditions</a>
  </li>
  <li>
    <a href="">Privacy</a>
  </li>
</div>

<div data-aos="fade-up" data-aos-duration="5000" className="footerLinks">
  <span className="linkTitle">
    Contact Us
  </span>
  <span className="phone"> +444 565 6655</span>
  <div className="email">sampl@gmail.com</div>
</div>

      </div>
    </section>
  )
}

export default Footer