import { Item } from "../Item/Item";

export const ItemList = ({products}) => {
    return (
        <>

        {products.map(product => <Item item={product} key={product.id}/> )}
            
        </>
    );
}

export default ItemList;
