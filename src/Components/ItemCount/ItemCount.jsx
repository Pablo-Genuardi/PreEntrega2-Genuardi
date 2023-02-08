import { useState } from "react"


export const ItemCount = ({initValue, stock}) => {
        
        const [counter, setCounter] = useState(initValue)
        const increaseCounter = () => (counter < stock) && setCounter(counter + 1) 
        const decreaseCounter = () => (counter > initValue) && setCounter(counter - 1) 
    return (
        <>
           <button className="btn btn-dark" onClick={() => increaseCounter()}>+</button> 
                {counter}
           <button className="btn btn-dark" onClick={() => decreaseCounter()}>-</button>
        </>
    );
}

export default ItemCount;
