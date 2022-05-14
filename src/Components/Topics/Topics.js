import React from 'react'
import './Topics.css'
import rect_1 from '../../Images/rect.png'

const Topics = () => {
  return (
    <div className='Topic'>
        <div className='Topic-head'>
            TOPICS YOU CAN'T MISS
        </div>
        <div className='topic-contain'>
        <div className='Topic-container'>
            <div className='Topic-sub-head'>
              The Right Quality
            </div>
            <div className='Topic-text'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa nulla facilis dolorum 
               ! Unde tempora officiis provident, praesentium odio esse facilis similique id, repellendus 
               fugit aperiam, quis vero sapiente. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
               Fugit sed est temporibus ea ut, consequatur labore ab
                numquam tempore, expedita, eos totam error hic? Alias, aliquid? Voluptates, laudantium quas. Consequatur?
            </div>
            <button className='Topic-button'>
                READ MORE <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
        <div className='img-container'>
            <img src={rect_1}></img>
        </div>
        </div>
        <div className='topic-contain'>
        <div className='Topic-container'>
            <div className='Topic-sub-head'>
              The Right Quality
            </div>
            <div className='Topic-text'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa nulla facilis dolorum 
               ! Unde tempora officiis provident, praesentium odio esse facilis similique id, repellendus 
               fugit aperiam, quis vero sapiente. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
               Fugit sed est temporibus ea ut, consequatur labore ab
                numquam tempore, expedita, eos totam error hic? Alias, aliquid? Voluptates, laudantium quas. Consequatur?
            </div>
            <button className='Topic-button'>
                READ MORE <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
        <div className='img-container'>
            <img src={rect_1}></img>
        </div>
        </div>
      
    </div>
  )
}

export default Topics