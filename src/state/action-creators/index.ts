import { CartItem } from "../../global/types";
import { ActionType } from "../action-types";

/*GET NUMBER CART*/
export function GetCart(){
    return{
        type: ActionType.GET_CART
    }
}

export function AddCart(payload: CartItem){
    return {
        type: ActionType.ADD_TO_CART,
        payload
    }
}

export function IncreaseQuantity(payload: number){
    return{
        type: ActionType.INCREASE_QUANTITY,
        payload
    }
}
export function DecreaseQuantity(payload: number){
    return{
        type: ActionType.DECREASE_QUANTITY,
        payload
    }
}