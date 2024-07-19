import { useSelector } from 'react-redux';
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { ActionType } from "../state/action-types";

import '../styles/Checkout.css'

const CheckOut = () => {
    const { cart } = useSelector((state: any) => state)
    const dispatch = useDispatch();

    const handleIncrease = (index: number) => {
        dispatch({type: ActionType.INCREASE_QUANTITY, payload: index})
    }

    const handleDecrease = (index: number) => {
        dispatch({ type: ActionType.DECREASE_QUANTITY, payload: index})
    }
    console.log(cart)
    return (
        <div className="checkout-container">
            <div className='checkout-items-container'>
                {
                    cart.cartItems.map((item: any, index: number)=>{
                        return(
                            <div className='checkout-container'>
                                {item.image ? <img className="card-image" src={item.image} alt={item.name}></img>: 
                                    <div>Loading image...</div>
                                }
                                <div>{item.name}</div>
                                <div>${item.price}</div>
                                <div>Quantity: {item.quantity}</div>
                                <div>
                                    <button onClick={() => handleIncrease(index)}>Add</button>
                                    <button onClick={() => handleDecrease(index)}>Remove</button>
                                </div>
                            </div>
                        )
                    })
                }                    
            </div>
            <div className='checkout-total-container'>
                <div>Total: {cart.cartTotal}</div>
                <button>Buy</button>
            </div>
        </div>
    )
}

export default CheckOut;