import React from 'react'
import './PackageView.scss'

import image from '../../../Assets/images.jpg'

function PackageView() {
  return (
    <div className='viewmore-container'>
      <div className='viewmore-cubcontainer'>
        <div className='viewmore-title'>
          Ledhak
          <span className='viewmor-subtitle'>( jammukashmeer )</span>
        </div>
        <div>
          <img src={image} alt="" className='viewmore-image' />
        </div>
        <div className='vewmore-likecomment'>
          <div className='viewmore-like'>
            <i class="fa fa-heart viewmore-likeicon"></i>
            <span className='viewmore-likecount'>1,000</span>
          </div>
          <div className='viewmore-like'>
            <i class="fa fa-comments viewmore-likeicon"></i>
            <span className='viewmore-likecount'>1,000</span>
          </div>
        </div>
        <div className='viewmore-comment-inputandmainsection'>

          <div className='viewmore-comment-mainsection'>

          <div className='viewmore-comment-section'>
            <div className='viewmore-comment-section-imgeandname'>
              <img className='viewmore-comment-section-imge' src={image} alt="" />
              <span className='viewmore-comment-section-name'>Name</span>
              </div>
            <div className='viewmore-comment-section-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tempore delectus odio eveniet, voluptatem voluptatum dicta vel, cumque architecto dignissimos necessitatibus animi. Eius, nihil natus. Mollitia consectetur facere earum magni.</div>
            <div className='viewmore-comment-section-time'>12 Aug 2022</div>
          </div>

          <div className='viewmore-comment-section'>
            <div className='viewmore-comment-section-imgeandname'>
              <img className='viewmore-comment-section-imge' src={image} alt="" />
              <span className='viewmore-comment-section-name'>Name</span></div>
            <div className='viewmore-comment-section-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tempore delectus odio eveniet, voluptatem voluptatum dicta vel, cumque architecto dignissimos necessitatibus animi. Eius, nihil natus. Mollitia consectetur facere earum magni.</div>
            <div className='viewmore-comment-section-time'>12 Aug 2022</div>
          </div>

          </div>

          <div className='viewmore-comment'>
            <input className='viewmore-comment-commentinput' type="text" />
            <div className='viewmore-comment-commentbutton'>Comment</div>
          </div>
          
        </div>
        <div className='viewmore-smallcontainerdiv'>
          <div className='viewmore-smallcontainer'>

            <div className='viewmore-smallcontainer-amount'>₹ 5000</div>
            <div className='viewmore-smallcontainer-contant'>
              <button className='viewmore-smallcontainer-contant-btn'><i class="fa fa-moon viewmore-smallcontainer-contant-btn-icon"></i><span className='viewmore-smallcontainer-contant-btn-text'>2 Night</span></button>
              <button className='viewmore-smallcontainer-contant-btn'><i class="fa fa-moon viewmore-smallcontainer-contant-btn-icon"></i><span className='viewmore-smallcontainer-contant-btn-text'>2 Night</span></button>
              <button className='viewmore-smallcontainer-contant-btn'><i class="fa fa-moon viewmore-smallcontainer-contant-btn-icon"></i><span className='viewmore-smallcontainer-contant-btn-text'>2 Night</span></button>
              <button className='viewmore-smallcontainer-contant-btn'><i class="fa fa-moon viewmore-smallcontainer-contant-btn-icon"></i><span className='viewmore-smallcontainer-contant-btn-text'>2 Night</span></button>
            </div>
            <div className='viewmore-smallcontainer-location'>
              <i class="fa fa-map-location-dot"></i> Ladhak , India
            </div>
          </div>
          <div className='viewmore-description'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur magni eos rem eius accusamus, aspernatur distinctio fuga incidunt atque reiciendis quos harum vel accusantium eligendi nisi, repudiandae beatae assumenda ipsa.
          </div>

        </div>
        <div className='viewmore-button'>
          <button className='viewmore-buttoncontent'>Book now</button>
        </div>


      </div>
    </div>
  )
}

export default PackageView