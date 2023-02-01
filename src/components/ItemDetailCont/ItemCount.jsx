import { useState } from "react"
import { useContext } from "react"
import GlobalContext from "../../context/GlobalContext"


const ItemCount = ({ stock, show, setShow, products }) => {

    const [counter, setcounter] = useState(1)
    const { countCart, setcountCart, setCarrito,carrito } = useContext(GlobalContext)
    const addCart = () => {
        setcountCart(countCart + 1)
        alert(`${counter} producto agregado al carro`)
        setShow(!show)
        products.cantidad = counter;
        setCarrito ([...carrito,products]);
    }

    return (

        <div className='d-flex justify-content-start'>
            <div className='d-flex border rounded p-2'>
                <button disabled={counter === 1}
                    onClick={() => setcounter(counter - 1)}
                    className='btn btn-secondary'> - </button>
                <h2 className='px-4'>{counter}</h2>
                <button disabled={counter == stock}
                    onClick={() => setcounter(counter + 1)}
                    className='btn btn-secondary'> + </button>
            </div>
            <button className='btn btn-success ms-3' onClick={addCart}>Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount