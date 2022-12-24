import React, { useEffect } from 'react'
import './Home.scss'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="home">
      <div className="secContainer container">

        <div className="homeText">

          <h1 data-aos="fade-up" className="title">
            Plan Your Trip with Unico Holidays !
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Travel to your favourite city with respectful of the environment!
          </p>

          <button data-aos="fade-up" data-aos-duration="3000" className="homebtn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">

    <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
      <label htmlFor="location">Location</label>
      <div><input type="text" placeholder='Dream Destination' /></div>
    </div>

    <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
      <label htmlFor="distance">Contry</label>
      <div><input type="text" placeholder='Dream Contry' /></div>
    </div>
    
    {/* <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
      <label htmlFor="distance">Location</label>
      <div><input type="text" mute placeholder='11/Merers' /></div>
    </div> */}

    <button data-aos="fade-tight" data-aos-duration="3000" className='btn'>
      Search
    </button>
 
        </div>

      </div>
    </section>
  )
}

export default Home