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
      const index = state.products.findIndex(cartProduct => cartProduct.id === action.payload.id)

      if (index > -1) {
        const newProduct: Product = {
          ...action.payload,
          quantity: action.payload.quantity + 1
        }

        state.products.splice(index, 1, newProduct)

        return {
          ...state,
          quantity: state.quantity + 1,
          products: [...state.products]
        }
      }

      action.payload.quantity = 1
      return {
        ...state,
        quantity: state.quantity + action.payload.quantity,
        products: [...state.products, action.payload]
      }
    default:
      return state
  }
}
