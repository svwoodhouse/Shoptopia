import { CartItem } from "../../global/types";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface CartState {
    cartNumber: number;
    cartTotal: number;
    cartItems: CartItem[];
}

const initialState = {
    cartNumber: 0,
    cartTotal: 0,
    cartItems: [],
}

const reducer = (state: CartState = initialState, action: Action ) => {
    switch(action.type){
        case ActionType.GET_CART:
                return {
                    ...state
                }
        case ActionType.ADD_TO_CART:
            if(state.cartNumber == 0){
                const cart = {
                    id:action.payload.id,
                    quantity:1,
                    name:action.payload.name,
                    image:action.payload.image,
                    price:action.payload.price
                } 

                state.cartItems.push(cart); 
            }
            else {
                let check = false;
                state.cartItems.map((item,key)=>{
                    if(item.id === action.payload.id){
                        state.cartItems[key].quantity++;
                        check=true;
                    }
                })
                if(!check){
                    const _cart = {
                        id:action.payload.id,
                        quantity:1,
                        name:action.payload.name,
                        image:action.payload.image,
                        price:action.payload.price
                    }
                    state.cartItems.push(_cart);
                }
            }
            return{
                ...state,
                cartNumber: state.cartNumber + 1,
                cartTotal: state.cartTotal + action.payload.price
            }
            case ActionType.INCREASE_QUANTITY:
                state.cartNumber++
                state.cartItems[action.payload].quantity++;

               return{
                   ...state,
                   cartTotal: state.cartTotal + state.cartItems[action.payload].price
               }
            case ActionType.DECREASE_QUANTITY: {
                const quantity = state.cartItems[action.payload].quantity;
                const total = state.cartItems[action.payload].price
                if(quantity > 1){
                    state.cartNumber--;
                    state.cartItems[action.payload].quantity--;
                }else {
                    state.cartNumber--;
                    state.cartItems.splice(action.payload, 1)
                }
                return{
                    ...state,
                    cartTotal: state.cartTotal - total
                }
            }
        default:
            return state;
    }
}

export default reducer