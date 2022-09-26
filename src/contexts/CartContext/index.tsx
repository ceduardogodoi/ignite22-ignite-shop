import {
  createContext,
  ReactNode,
  useContext,
  useReducer
} from 'react'
import cartReducer, {
  initialState,
  addToCartAction,
  removeFromCartAction
} from './cartReducer'
import { CartState, Product } from './Cart.model'

interface CartContextType extends CartState {
  addProductToCart(product: Product): void;
  removeProductToCart(productId: string): void;
}

const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  function addProductToCart(product: Product) {
    dispatch(addToCartAction(product))
  }

  function removeProductToCart(productId: string) {
    dispatch(removeFromCartAction(productId))
  }

  return (
    <CartContext.Provider value={{
      products: state.products,
      quantity: state.quantity,
      total: state.total,
      addProductToCart,
      removeProductToCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
