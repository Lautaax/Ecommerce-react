import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productsById } from '../../services/mockService'

const ItemDetail = () => {


    const [products, setProducts] =useState([])
    const { id } = useParams()

    useEffect(() => {
        productsById(id)
            .then( res => setProducts(res))
    },[])


    return (
        <div>

            <img src={products.image} alt=""  />

        </div>
    )
}

export default ItemDetail