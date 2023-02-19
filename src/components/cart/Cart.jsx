import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../context/GlobalContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { EmptyCart } from '../EmptyCart/EmptyCart';



export const Cart = () => {
  const navigate = useNavigate()
  const { carrito, setCarrito, setcountCart, countCart } = useContext(GlobalContext)
  let suma = carrito.reduce((acc, prod) => acc + prod.subtotal, 0)
  const vaciarcarro = () => {
    setcountCart("")
    setCarrito([])
  }
  const check = () => {
    navigate("/Check")
  }

  return (
    <div>
      {!countCart ? <EmptyCart/> :
        <div>
          {carrito.map(cart => (
            <div className='container card w-25' key={cart.id}>
              <img src={cart.image} />
              <h1>Producto:{cart.first_name}</h1>
              <h3>Cantidad:{cart.cantidad}</h3>
              <h4>Precio:{cart.precio}</h4>
            </div>
          ))}
          <Card className='container w-25'>
            <p>Total: {suma}</p>
            <Button variant="outline-success" onClick={check}>Finalizar Compra</Button>
            <Button variant="outline-danger" onClick={vaciarcarro} >Vaciar Carrito</Button>
          </Card>
        </div>}
    </div>
  )
}
