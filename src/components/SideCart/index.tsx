import { X } from 'phosphor-react'
import { CartItems } from './components/CartItems';
import { useSideCartContext } from '../../contexts/SideCartContext'
import { useCartContext } from '../../contexts/CartContext'
import { currencyFormatter } from '../../utils/formatter'
import {
  SideCartFooter,
  SideCartHeader,
  SideCartContainer
} from './styles';

export function SideCart() {
  const {
    isSideCartOpened,
    closeSideCart: handleCloseSideCart
  } = useSideCartContext()
  const { quantity, total } = useCartContext()

  return (
    <SideCartContainer className={isSideCartOpened ? 'slideIn' : ''}>
      <SideCartHeader>
        <div>
          <button onClick={handleCloseSideCart}>
            <X weight="bold" color="#8d8d99" size={24} />
          </button>
        </div>

        <strong>Sacola de compras</strong>
      </SideCartHeader>

      <CartItems />

      <SideCartFooter>
        <div>
          <span>Quantidade</span>
          <span>{quantity} itens</span>
        </div>
        <div>
          <strong>Valor total</strong>
          <strong>{currencyFormatter().format(total)}</strong>
        </div>

        <button>Finalizar compra</button>
      </SideCartFooter>
    </SideCartContainer>
  )
}
