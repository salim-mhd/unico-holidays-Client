import React, { useEffect } from 'react'
import './Blog.scss'

import {BsArrowRightShort} from 'react-icons/bs'

import image from '../../../Assets/img 4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Post = [
  {
    id:1,
    postImage:image,
    title:'Best Country in East Africa',
    desc:'when Kenya claime its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.'
  },
  {
    id:2,
    postImage:image,
    title:'Best Country in East Africa',
    desc:'when Kenya claime its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.'
  },
  {
    id:3,
    postImage:image,
    title:'Best Country in East Africa',
    desc:'when Kenya claime its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.'
  },
  {
    id:4,
    postImage:image,
    title:'Best Country in East Africa',
    desc:'when Kenya claime its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.'
  },
  {
    id:5,
    postImage:image,
    title:'Best Country in East Africa',
    desc:'when Kenya claime its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.'
  }
]

const Blog = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Blog ?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experince in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {
            Post.map(({postImage,title,desc})=>{
              return(
                <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
            <div className="imgDiv">
              <img src={postImage} alt="" />
            </div>

            <div className="postDetails">
              <h3 data-aos="fade-up" data-aos-duration="3000">
                {title}
              </h3>
              <p data-aos="fade-up" data-aos-duration="4000">
                {desc}
              </p>
              <a href="#" className='flex' data-aos="fade-right" data-aos-duration="4500">
            Read More
            <BsArrowRightShort className='icon'/>
            </a>
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

export default Blog