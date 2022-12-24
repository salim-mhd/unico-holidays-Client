import React, { useEffect } from 'react'
import './About.scss'

import img from '../../../Assets/img 4.jpg'
import video from '../../../Assets/Saigon - 14385.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 data-aos="fade-up" data-aos-duration="1500" className="title">
          why Hikings?
        </h2>

        <div className="mainContent container grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="sigleItem">
          <img src={img} alt="" />

          <h3>100+ Mountains</h3>

          <p>
            Research shows that a chance to breake away from the normal rhythms of 
            daily life reduces stress and improves health and well-being.
          </p>

        </div>

        <div data-aos="fade-up" data-aos-duration="2500" className="sigleItem">
          <img src={img} alt="" />

          <h3>1000+ Hikings</h3>

          <p>
            Research shows that a chance to breake away from the normal rhythms of 
            daily life reduces stress and improves health and well-being.
          </p>
          
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="sigleItem">
          <img src={img} alt="" />

          <h3>2000+ Customer</h3>

          <p>
            Research shows that a chance to breake away from the normal rhythms of 
            daily life reduces stress and improves health and well-being.
          </p>
          
        </div>

        </div>

        <div className="videoCard container">
          <div className="cardContent grid">

            <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
              <h2>
                Wonderfull House experince nin there!
              </h2>
              <p>
                The Adventure subranking is based on an equally weighted average of scores from five country.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" className="cardVideo">
              <video src={video} autoPlay loop muted type='video/mp4'></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About