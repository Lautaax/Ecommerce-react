import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import rata from '../../imagenes/rata.jpeg'
import { Link } from 'react-router-dom';
export const EmptyCart = () => {
  return (
    <div>

<Card className='container' style={{ width: '25rem' }}>
      <Card.Img variant="top" src={rata} />
      <Card.Body>
        <Card.Title>El carrito esta en 0</Card.Title>
        <Card.Text>
          Compra algo rata
        </Card.Text>
        <Button variant="primary"><Link className="nav-link" to="/">Ir Al inicio</Link></Button>
      </Card.Body>
    </Card>

    </div>
  )
}
