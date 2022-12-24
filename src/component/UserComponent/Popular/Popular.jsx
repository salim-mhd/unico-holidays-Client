import React, { useEffect } from 'react'
import './Popular.scss'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'

import photo1 from '../../../Assets/images.jpg'
import photo2 from '../../../Assets/Hill-Stations-Holidays.jpg'
import photo3 from '../../../Assets/img 4.jpg'
import photo4 from '../../../Assets/imge 5.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'


const Data = [
  {
    id: 1,
    photo: photo1,
    destTitle: 'Machu Picchu',
    location: 'peru',
    grade: 'CULTURAL RELAX'
  },
  {
    id: 1,
    photo: photo2,
    destTitle: 'Machu Picchu',
    location: 'peru',
    grade: 'CULTURAL RELAX'
  },
  {
    id: 2,
    photo: photo3,
    destTitle: 'Machu Picchu',
    location: 'peru',
    grade: 'CULTURAL RELAX'
  }, {
    id: 3,
    photo: photo4,
    destTitle: 'Machu Picchu',
    location: 'peru',
    grade: 'CULTURAL RELAX'
  },
  {
    id: 4,
    photo: photo1,
    destTitle: 'Machu Picchu',
    location: 'peru',
    grade: 'CULTURAL RELAX'
  },
  {
    id: 5,
    photo: photo2,
    destTitle: 'Machu Picchu',
    location: 'peru',
    grade: 'CULTURAL RELAX'
  },
  {
    id: 6,
    photo: photo4,
    destTitle: 'Machu Picchu',
    location: 'peru',
    grade: 'CULTURAL RELAX'
  }
]


const Popular = () => {

  const Navigate = useNavigate()

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="popular section container">
      <div className="secContainer">

        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration="2500" className="texDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              Form historical cities to natural spectenculars, come see the best of the world!
            </p>
          </div>
        </div>

        <div className="mainContent grid">
          {
            Data.map(({id,photo,destTitle,location,grade}) => {
              return (
                <div data-aos="fade-up" onClick={()=>{Navigate('/viewDetails')}} className="singleDestination">
                  <div className="destImage">

                    <img src={photo} alt="" />

                    <div className="overlayInfo">
                      <h3>S{destTitle}</h3>
                      <p>
                        {location}
                      </p>

                      <BsArrowRightShort className="icon" />

                    </div>

                  </div>

                  <div className="destFooter">
                    <div className="number">
                      0{id}
                    </div>

                    <div className="destText flex">
                      <h6>
                      {location}
                      </h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className='icon' />
                        </span>
                        Dot
                      </span>
                    </div>
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

export default Popular