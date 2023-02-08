import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {ItemDetail} from "../ItemDetail/ItemDetail"
export const ItemDetailContainer = () => {

    const [product, setProduct] = useState ([])
    const {id} = useParams()
    useEffect(() => {
        fetch('../json/products.json')
        .then(response => response.json())
        .then(products => {
            const item = products.find(prod => prod.id === parseInt(id))
            setProduct(item)})},
            [])
                
    return (
        <div className="itemDetail container-fluid">
           <ItemDetail item={product}/> 
        </div>
    );
}

export default ItemDetailContainer;

