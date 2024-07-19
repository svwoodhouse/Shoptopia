import { ActionType } from "../action-types"
import { CartItem } from "../../global/types"

interface GetCartAction {
    type: ActionType.GET_CART
}

interface AddToCartAction {
    type: ActionType.ADD_TO_CART
    payload: CartItem
}

interface IncreaseQuantityAction {
    type: ActionType.INCREASE_QUANTITY
    payload: number
}

interface DecreaseQuantityAction {
    type: ActionType.DECREASE_QUANTITY
    payload: number
}

export type Action = GetCartAction | AddToCartAction | IncreaseQuantityAction | DecreaseQuantityAction