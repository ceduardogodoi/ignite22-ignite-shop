import { CartState, Product } from './Cart.model'

enum CartActions {
  ADD = 'ADD',
}

interface CartAction {
  type: CartActions;
  payload: Product;
}

export const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
}

export function addToCartAction(product: Product): CartAction {
  return {
    type: CartActions.ADD,
    payload: product
  }
}

export default function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case CartActions.ADD:
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    default:
      return state
  }
}
