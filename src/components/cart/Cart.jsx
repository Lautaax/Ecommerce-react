import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../context/GlobalContext'

export const Cart = () => {
const navigate = useNavigate()
  const { carrito } = useContext(GlobalContext)
  const check = () =>{
navigate("/Check")
  }
  return (
    <div>
      {carrito.map(cart => (
        <div className='container card w-25' key={cart.id}>
          <img src={cart.image } />
          <h1>{cart.first_name}</h1>
          <h3>{cart.cantidad}</h3>
        </div>
      ))}
      <button onClick={check}>Finalizar Compra</button>
      <button>Vaciar Carrito</button>
    </div>
  )
}
