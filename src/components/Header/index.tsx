import React from 'react'
import logo from '../../assets/logo.svg'
import './style.scss'

function Header() {
  return (
    <header>
      <div className='container'>
        
        <a href='#topo' className='container__logo'>
          <img src={logo} alt="" />
        </a>

        <div className='container__nav'>
          <ul className='navList'>
            <li className='navList__item'>
              <a href="#descricao" className='navList__link'>Sobre</a>
            </li>
            <li>
              <a href="#personagens" className='navList__link'>Personagens</a>
            </li>
          </ul>
        </div>

      </div>
    </header>
  )
}

export default Header