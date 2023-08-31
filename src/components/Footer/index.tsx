import React from 'react'
import fullLogo from '../../assets/full-logo.svg'
import './style.scss'

function Footer() {
  return (
    <footer>
      <div className='container'>
        <img src={fullLogo} alt="" />
      </div>
    </footer>
  )
}

export default Footer
