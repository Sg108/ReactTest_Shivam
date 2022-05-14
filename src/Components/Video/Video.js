import React, { useState,useEffect } from 'react'
import video from '../../Images/sample.mp4'
import './Video.css'
const Video = () => {

  
    const [play,setPlay]=useState(true)
    const PlayFunction=()=>{
        let vid=document.querySelector('.myvideo');
        console.log(vid.paused)
    if(vid.paused){
      vid.play()
      setPlay(!play)
    }
    else
    {
      vid.pause()
      setPlay(!play)
    }
   }
  return (
    <div className='video-container'>
        <div className='video-head'>
            A GLANCE AT OUR PRODUCT
        </div>
        <div className='video-content'>
        <div className="play-button" onClick={()=>{PlayFunction()}}>
        {play?(<i className="fa-solid fa-play" ></i>):
        (<i class="fa-solid fa-pause"> </i>)}
        </div>
        <video className="myvideo"> 
       
        <source
          src={video}
          type="video/mp4"
        />
       
    </video>
        </div>
    </div>
  )
}

export default Video