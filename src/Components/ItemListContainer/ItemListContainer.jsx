import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const ItemListContainer = () => {

    const [products, setProducts] = useState ([])
    const {categoryId} = useParams()

    useEffect(() => {
        if(categoryId) {
            fetch('../json/products.json')
            .then(response => response.json())
            .then(itemsProducts => {
                const products = itemsProducts.filter(prods => prods.categoryId === parseInt (categoryId))
                const productsList = ItemList({products})
                console.log(productsList)
                setProducts(productsList)})  
        } 

        else {
            fetch('./json/products.json')
            .then(response => response.json())
            .then(products => {
                const productsList = ItemList({products})
                console.log(productsList)
                setProducts(productsList)})
        }

        fetch('./json/products.json')
        .then(response => response.json())
        .then(products => {
            const productsList = ItemList({products})
            console.log(productsList)
            setProducts(productsList)})},
            [categoryId])
                
    return (
        <div className="row cardProducts">
           {products} 
        </div>
    );
}

export default ItemListContainer;
