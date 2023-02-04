import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../context/GlobalContext'

export const Cart = () => {
const navigate = useNavigate()
  const { carrito, setCarrito,setcountCart } = useContext(GlobalContext)
  let suma = carrito.reduce((acc, prod) => acc + prod.subtotal,0 )
  const vaciarcarro = () => {
setcountCart (0)
setCarrito ([])
  }
  const check = () =>{
navigate("/Check")
  }
  return (
    <div>
      {carrito.map(cart => (
        <div className='container card w-25' key={cart.id}>
          <img src={cart.image } />
          <h1>Producto:{cart.first_name}</h1>
          <h3>Cantidad:{cart.cantidad}</h3>
          <h4>Precio:{cart.precio}</h4>
        </div>
      ))}
      <p>Total: {suma}</p>
      <button onClick={check}>Finalizar Compra</button>
      <button onClick={vaciarcarro} >Vaciar Carrito</button>
    </div>
  )
}
