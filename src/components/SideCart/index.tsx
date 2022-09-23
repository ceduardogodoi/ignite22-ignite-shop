import { X } from 'phosphor-react'
import {
  CartSummaryContainer,
  CloseButtonContainer,
  SideCartContainer
} from './styles';

export function SideCart() {
  return (
    <SideCartContainer>
      <CloseButtonContainer>
        <button>
          <X weight="bold" color="#8d8d99" size={24} />
        </button>
      </CloseButtonContainer>

      <strong>Sacola de compras</strong>

      <ul>
        {Array(3).fill('').map((_, index) => {
          return (
            <li key={index}>
              <div>
                camiseta
              </div>
              <div>
                <span>Camiseta Beyond the Limits</span>
                <span>R$ 79,90</span>

                <button>Remover</button>
              </div>
            </li>
          )
        })}
      </ul>

      <CartSummaryContainer>
        <div>
          <span>Quantidade</span>
          <span>3 itens</span>
        </div>
        <div>
          <strong>Valor total</strong>
          <strong>R$ 270,00</strong>
        </div>

        <button>Finalizar compra</button>
      </CartSummaryContainer>
    </SideCartContainer>
  )
}
