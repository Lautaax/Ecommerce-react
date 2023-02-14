import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



const ItemList = ({ prod }) => {


    const navigate = useNavigate()

    const redirectItemDetail = (id) => {
        navigate(`/item/${id}`)
    }



    return (
        <Card className='container' bg='orange' style={{  width: '18rem' }}>
            <Card.Img variant="top" src={prod.image} onClick={()=>redirectItemDetail(prod.id)} />
            <Card.Body   >
                <Card.Title  >{prod.first_name}</Card.Title>
                <Card.Text>Genero:
                {prod.gender}
                </Card.Text>
                <Card.Text>Precio: 
                {prod.precio}
                </Card.Text>
                <Button onClick={()=>redirectItemDetail(prod.id)}  variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default ItemList;