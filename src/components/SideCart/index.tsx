import { useState } from 'react'
import { X } from 'phosphor-react'
import axios from 'axios';
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
  const { quantity, total, products } = useCartContext()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleFinishOrder() {
    try {
      setIsCreatingCheckoutSession(true)
      const lineItems = products.map(product => {
        return {
          price: product.defaultPriceId,
          quantity: product.quantity
        }
      })

      const response = await axios.post<{ checkoutUrl: string }>('/api/checkout', lineItems)
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)

      console.error('Falha ao redirecionar ao checkout', error)
    }
  }

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

        <button
          onClick={handleFinishOrder}
          disabled={isCreatingCheckoutSession}
        >
          Finalizar compra
        </button>
      </SideCartFooter>
    </SideCartContainer>
  )
}
