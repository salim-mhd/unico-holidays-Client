import React from 'react'
import { useNavigate } from 'react-router-dom'
import './packages.css'

import sampleimg from '../../../Assets/images.jpg'
import { useState } from 'react'

import image from '../../../Assets/Hill-Stations-Holidays.jpg'

function Packages() {

  const [popupImage, setPopupImage] = useState('');
  const [popupVedio, setPopupVedio] = useState('');
  const [formPopup, setFormPopup] = useState('closs-popup');
  const navigate = useNavigate()


  return (
    <div className='responsive-rable-container'>
      <div className='responsive-table-headersection'>
        <div className='responsive-table-title'>All Packages</div>
        <button onClick={(e) => { setFormPopup('responsive-rable-popup-background') }} className='responsive-table-btn'><i class="fa fa-plus responsive-table-btn-icon"></i> Add Package</button>
      </div>
      <table class="responsive-table">
        <thead>
          <tr>
            <th scope="col">Location</th>
            <th scope="col">Image</th>
            <th scope="col">Contry</th>
            <th scope="col">Amount</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">Location</th>
            <td data-title="Image"><img className='table-image' src={sampleimg} alt="" /></td>
            <td data-title="Contry" >India</td>
            <td data-title="Amount" data-type="currency">Rs. 5000/-</td>
            <td data-title="Description" >Hi good placed</td>
            <td data-title="Edit"><i class="fa fa-pen-to-square"></i></td>
            <td data-title="Delete"><i class="fa fa-trash"></i></td>
          </tr>

          {/* <tr>
        <th scope="row">Frozen</th>
        <td data-title="Released">2013</td>
        <td data-title="Studio">Disney</td>
        <td data-title="Worldwide Gross" data-type="currency">$1,010,014,508</td>
        <td data-title="Domestic Gross" data-type="currency">$393,614,508</td>
        <td data-title="Foreign Gross" data-type="currency">$616,400,000</td>
        <td data-title="Budget" data-type="currency">$150,000,000</td>
      </tr> */}

        </tbody>
      </table>

      <div className={formPopup}>
        <div className='responsive-rable-popup'>
          <div className='responsive-rable-popup-headingsection'>
            <div className='responsive-rable-popup-headingsection-title'>Add Package</div>
            <div onClick={(e) => { setFormPopup('closs-popup') }} className='responsive-rable-popup-headingsection-icon'><i class="fa fa-xmark responsive-rable-popup-headingsection-icon"></i></div>
          </div>

          <div className='responsive-rable-popup-inputsection'>
            <div className='responsive-rable-popup-inputsection-inputDiv'>
              <label className='responsive-rable-popup-inputsection-inputlabel label-text' htmlFor="">Location</label>
              <input className='responsive-rable-popup-inputsection-input' type="text" />
            </div>

            <div className='responsive-rable-popup-inputsection-inputDiv'>
              <label className='responsive-rable-popup-inputsection-inputlabel label-text' htmlFor="">Contry</label>
              <input className='responsive-rable-popup-inputsection-input' type="text" />
            </div>
          </div>

          <div className='responsive-rable-popup-inputsection'>
            <div className='responsive-rable-popup-inputsection-inputDiv'>
              <label className='responsive-rable-popup-inputsection-inputlabel label-text' htmlFor="">Day</label>
              <input className='responsive-rable-popup-inputsection-input' type="number" min='0' />
            </div>

            <div className='responsive-rable-popup-inputsection-inputDiv'>
              <label className='responsive-rable-popup-inputsection-inputlabel label-text' htmlFor="">Night</label>
              <input className='responsive-rable-popup-inputsection-input' type="number" min='0' />
            </div>
          </div>

          <div className='responsive-rable-popup-inputsection'>
            <div className='responsive-rable-popup-inputsection-inputDiv'>
              <label className='responsive-rable-popup-inputsection-inputlabel label-text' htmlFor="">Number of Place</label>
              <select className='responsive-rable-dropdown'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className='responsive-rable-popup-inputsection-inputDiv'>
              <label className='responsive-rable-popup-inputsection-inputlabel label-text' htmlFor="">Room Rating</label>
              <select className='responsive-rable-dropdown'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className='fileupload-section'>

            <div className='fileupload-section-imagediv'>
              <div>
                <label className='label-text' htmlFor="">Image</label>
              </div>
              <div class="upload-btn-wrapper">
                <div class="upload-btn-wrapper-btn">
                  {popupImage && (
                    <img className='fileupload-section-imagediv-img' src={URL.createObjectURL(popupImage)} alt="" />
                  )}
                </div>

                <input onChange={(e) => { setPopupImage(e.target.files[0]) }} accept='image/*' type="file" name="myfile" />
              </div>
            </div>

            <div className='fileupload-section-imagediv'>
              <div>
                <label className='label-text' htmlFor="">video</label>
              </div>
              <div class="upload-btn-wrapper">
                <div class="upload-btn-wrapper-btn">
                  {popupVedio && (
                    <video className='fileupload-section-imagediv-img' autoPlay src={URL.createObjectURL(popupVedio)} ></video>
                  )}
                </div>
                <input onChange={(e) => { setPopupVedio(e.target.files[0]) }} accept='video/*' type="file" name="myfile" />
              </div>
            </div>

          </div>
          <div>
            <div className='esponsive-rable-popup-textarea-label'>
              <label className='label-text' htmlFor="">video</label>
            </div>
            <div className='responsive-rable-popup-textarea'>
              <textarea name="" id="" cols="70" rows="5"></textarea>
            </div>
          </div>
          <div className='responsive-rable-popup-buttonsection'>
            <button className='responsive-rable-popup-button'>Add Package</button>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Packages