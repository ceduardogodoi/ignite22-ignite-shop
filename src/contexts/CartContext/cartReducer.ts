import { CartProduct, CartState, Product } from './Cart.model'

enum CartActions {
  ADD = 'cart/add',
  REMOVE = 'cart/remove'
}

type CartAction =
  { type: CartActions.ADD, payload: Product } |
  { type: CartActions.REMOVE, payload: string }

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

export function removeFromCartAction(productId: string): CartAction {
  return {
    type: CartActions.REMOVE,
    payload: productId
  }
}

export default function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case CartActions.ADD: {
      const index = state.products.findIndex(cartProduct => cartProduct.id === action.payload.id)

      if (index > -1) {
        const product: CartProduct = {
          ...action.payload,
          quantity: state.products[index].quantity + 1
        }

        state.products.splice(index, 1, product)

        return {
          ...state,
          quantity: state.quantity + 1,
          products: [...state.products],
          total: state.total += product.price,
        }
      }

      const product: CartProduct = {
        ...action.payload,
        quantity: 1
      }
      return {
        ...state,
        quantity: state.quantity + product.quantity,
        products: [...state.products, product],
        total: state.total += product.price,
      }
    }

    case CartActions.REMOVE: {
      const index = state.products.findIndex(cartProduct => cartProduct.id === action.payload)
      const product = state.products[index]

      state.products.splice(index, 1)

      return {
        ...state,
        products: [...state.products],
        quantity: state.quantity -= product.quantity,
        total: state.total -= product.quantity * product.price
      }
    }

    default:
      return state
  }
}
