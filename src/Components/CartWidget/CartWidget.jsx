import { FaCartPlus } from 'react-icons/fa';

const CartWidget = ({cartQuantity}) => {
      return (
          <>
            <p>{cartQuantity}</p>
            <FaCartPlus size={'40px'} color={'white'}/>
          </>
    );
}

export default CartWidget;
 