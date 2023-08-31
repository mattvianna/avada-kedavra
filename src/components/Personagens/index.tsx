import React from 'react'
import ListaDePersonagens from './components/ListaDePersonagens'
import './styles/style.scss'

function Personagens() {
  return (
    <div className='personagens'>
      <div className='personagens__wrap'>
        <h1>Personagens Marcantes</h1>

        <ListaDePersonagens />
      </div>
    </div>
  )
}
export default Personagens