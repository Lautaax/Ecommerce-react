import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GlobalContext from '../../context/GlobalContext';
import { crearOrden } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';

const Check = () => {
    const navigate = useNavigate() 
    const { carrito } = useContext(GlobalContext)
    const enviarForm = (e) => {
        e.preventDefault()
        const nombre = e.target.nombre.value
        const email = e.target.mail.value
        const telefono = e.target.telefono.value
        const orden = {
            Comprador: {
                Nombre: nombre,
                Email: email,
                Telefono: telefono,
            },

            Items: carrito, fecha: new Date()
        }
crearOrden(orden)
navigate("/")
    }


    return (
        <div>
            <Form onSubmit={enviarForm} className='container w-25'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name='nombre' type="text" placeholder="Jaimito" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='mail' type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control name='telefono' type="number" placeholder="+5421352456" />
                </Form.Group>
                <Button variant="success" type='submit' >Confirmar Compra</Button>{' '}
            </Form>
        </div>
    )
}



export default Check