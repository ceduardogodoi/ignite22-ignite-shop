import {
  createContext,
  ReactNode,
  useContext,
  useState
} from 'react'

interface SideCartContextType {
  isSideCartOpened: boolean;
  openSideCart(): void;
  closeSideCart(): void;
  toggleSideCart(): void;
}

const SideCartContext = createContext({} as SideCartContextType)

interface SideCartContextProviderProps {
  children: ReactNode;
}

export function SideCartContextProvider({ children }: SideCartContextProviderProps) {
  const [isSideCartOpened, setSideCartOpened] = useState(false)

  function openSideCart() {
    setSideCartOpened(true)
  }

  function closeSideCart() {
    setSideCartOpened(false)
  }

  function toggleSideCart() {
    setSideCartOpened(isOpened => !isOpened)
  }

  return (
    <SideCartContext.Provider value={{
      isSideCartOpened,
      openSideCart,
      closeSideCart,
      toggleSideCart
    }}>
      {children}
    </SideCartContext.Provider>
  )
}

export const useSideCartContext = () => useContext(SideCartContext)
