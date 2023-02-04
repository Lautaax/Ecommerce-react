import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { productsById } from '../../services/firebase';

const ItemDetail = () => {

    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        productsById(id)
            .then(res => setProducts(res)) 
            
    }, [])



    return (
        <div className='container card w-25'>

            <img src={products.image} alt="" />
            <p>Stock:{products.stock} </p>
            <p>Precio :{products.precio}</p>
            {
                show ? <Link to="/cart"> <Button variant="success">TerminarCompra</Button></Link> :
                    <ItemCount show={show} setShow={setShow} stock={products.stock} products={products}  />
            }
            <Link to="/"> <Button  variant="info">Volver</Button>{''} </Link>
        </div>
    )
}

export default ItemDetail