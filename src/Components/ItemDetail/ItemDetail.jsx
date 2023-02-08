import React from 'react';
import {ItemCount} from '../ItemCount/ItemCount';


export const ItemDetail = ({item}) => {
    return (
        <div className="container-fluid">
            <div className="card mb-3">
                <img src={`../img/${item.img}`} className="card-img-top" alt={`Image of ${item.model}`} />
                <div className="card-body">

                    <p className="card-text">{item.brand}</p>
                    <h5 className="card-title">{item.model}</h5>
                    <p className="card-text">{item.features}</p>
                    <h3 className="card-title">${new Intl.NumberFormat ('en-IN').format(item.price)}</h3>
                    <p className="card-text"><small className="text-muted">Stock: {item.stock}</small></p>
                    <ItemCount initValue={1} stock={item.stock}/>
                    <button className="btn btn-secondary">add to cart</button>
                    <button className="btn btn-dark">add to wishlist</button>
                    
                    
                
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
