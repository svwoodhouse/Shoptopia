import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { ActionType } from "../state/action-types";
import { ShoppingCartOutlined } from '@mui/icons-material';

import '../styles/Checkout.css'

const CheckOut = () => {
    const cartState = useSelector((state: any) => state.cart)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleIncrease = (index: number) => {
        dispatch({type: ActionType.INCREASE_QUANTITY, payload: index})
    }

    const handleDecrease = (index: number) => {
        dispatch({ type: ActionType.DECREASE_QUANTITY, payload: index})
    }
    return (
        <>
        {cartState.cartItems.length === 0 ?
            <div className='empty-cart'>
                <p>Your cart is empty</p>
                <ShoppingCartOutlined fontSize='large'/>
                <button className='add-to-cart-button' onClick={()=> navigate('/')}>SHOP NOW</button>
            </div> :
            <div className="checkout-container"> 
            <div className='checkout-items-container'>
                {
                    cartState.cartItems.map((item: any, index: number)=>{
                        return(
                            <div className='checkout-item-container'>
                                {item.image ? <img className="card-image" src={item.image} alt={item.name}></img>: 
                                    <div>Loading image...</div>
                                }
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <div>
                                    <button className="add-to-cart-button" onClick={() => handleIncrease(index)}>Add</button>
                                    <button className="add-to-cart-button" onClick={() => handleDecrease(index)}>Remove</button>
                                </div>
                            </div>
                        )
                    })
                }                    
            </div>
            <div className='checkout-total-container'>
                <h2>Order Summary</h2>
                <p>Total: {cartState.cartTotal}</p>
                <button className='add-to-cart-button'>Checkout</button>
            </div>
        </div>
        }
        </>
    )
}

export default CheckOut;