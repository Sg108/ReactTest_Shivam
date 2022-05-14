import React from 'react'


const Box = ({Name,image}) => {
  return (
    <div className='class'>
    <img src={image} alt="cats"></img>
    <div>{Name}</div>
    </div>
  )
}

export default Box