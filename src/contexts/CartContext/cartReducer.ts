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
        const product = state.products[index]
        const copy = { ...product }
        copy.quantity += 1

        const products = [...state.products]
        products.splice(index, 1, copy)

        return {
          ...state,
          products,
          quantity: state.quantity + 1,
          total: state.total + product.price,
        }
      }

      const product: CartProduct = {
        ...action.payload,
        quantity: 1
      }
      return {
        ...state,
        products: [...state.products, product],
        quantity: state.quantity + 1,
        total: state.total + product.price,
      }
    }

    case CartActions.REMOVE: {
      const index = state.products.findIndex(cartProduct => cartProduct.id === action.payload)
      const product = state.products[index]
      const products = state.products.filter((_, cartIndex) => index !== cartIndex)

      return {
        ...state,
        products,
        quantity: state.quantity - product.quantity,
        total: state.total - product.quantity * product.price
      }
    }

    default:
      return state
  }
}
