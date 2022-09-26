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
        const product: Product = {
          ...action.payload,
          quantity: state.products[index].quantity + 1
        }

        state.products.splice(index, 1, product)

        return {
          ...state,
          quantity: state.quantity + 1,
          products: [...state.products]
        }
      }

      const product: Product = {
        ...action.payload,
        quantity: 1
      }
      return {
        ...state,
        quantity: state.quantity + product.quantity,
        products: [...state.products, product]
      }
    default:
      return state
  }
}
