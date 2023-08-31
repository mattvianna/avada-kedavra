import React from 'react'
import banner from '../../assets/hogwarts.jpg'
import './style.scss'

function Banner() {
  return (
    <div className='mainBanner' id='topo'>
      <img className='mainBanner__banner' src={banner} alt="" />
    </div>
  )
}

export default Banner