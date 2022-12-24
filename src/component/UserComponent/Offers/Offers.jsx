import React, { useEffect } from 'react'
import './Offers.scss'

import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'

import photo1 from '../../../Assets/images.jpg'
import photo2 from '../../../Assets/Hill-Stations-Holidays.jpg'
import photo3 from '../../../Assets/img 4.jpg'
import photo4 from '../../../Assets/imge 5.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'



const offerData = [
  {
    id:1,
    imgSrc:photo1,
    destTitle:'Machu pichu',
    location:'peru',
    price:'$1234'
  },

  {
    id:2,
    imgSrc:photo2,
    destTitle:'Machu pichu',
    location:'peru',
    price:'$222'
  },

  {
    id:3,
    imgSrc:photo3,
    destTitle:'Machu pichu',
    location:'peru',
    price:'$333'
  },

  {
    id:4,
    imgSrc:photo4,
    destTitle:'Machu pichu',
    location:'peru',
    price:'$444'
  },

  {
    id:5,
    imgSrc:photo1,
    destTitle:'Machu pichu',
    location:'peru',
    price:'$555'
  },

  {
    id:6,
    imgSrc:photo2,
    destTitle:'Machu pichu',
    location:'peru',
    price:'$666'
  }
]


const Offers = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="offer container section">
      <div className="secContainer">

        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">
            special offers
          </h2>
          <p>
            Form historical cities to natural specteculars, come see the best of the world!
          </p>
        </div>

        <div className="mainContent grid">

          {
            offerData.map(({id, imgSrc, destTitle, location, price})=>{
              return(
                <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
            <div className="destImage">
              <img src={imgSrc} alt="" />

              <span className="discount">
                30% Off
              </span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>
                  {price}
                </h4>
                <span className="status">
                  For Rent
                </span>
              </div>

              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className="icon"/>
                  <small>2 Beds</small>
                </div>
                <div className="singleAmenity flex">
                  <MdBathtub className="icon"/>
                  <small>1 Bath</small>
                </div>
                <div className="singleAmenity flex">
                  <FaWifi className="icon"/>
                  <small>Wi-Fi</small>
                </div>
                <div className="singleAmenity flex">
                  <MdAirportShuttle className="icon"/>
                  <small>Shuttle</small>
                </div>
              </div>

              <div className="location flex">
                <MdLocationOn className="icon"/>
                <small>{destTitle} , {location}</small>
              </div>

              <button className="btn flex">
                View Details
                <BsArrowRightShort className="icon"/>
              </button>
            </div>
          </div>
              )
            })
          }

        </div>
      </div>
    </section>
  )
}

export default Offers