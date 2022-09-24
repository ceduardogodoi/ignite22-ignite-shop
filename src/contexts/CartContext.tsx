import { createContext, ReactNode, useContext } from 'react'

interface CartContextType {}

const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  return (
    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
