import { X } from 'phosphor-react'
import {
  SideCartFooter,
  SideCartHeader,
  SideCartContainer
} from './styles';

export function SideCart() {
  return (
    <SideCartContainer>
      <SideCartHeader>
        <div>
          <button>
            <X weight="bold" color="#8d8d99" size={24} />
          </button>
        </div>

        <strong>Sacola de compras</strong>
      </SideCartHeader>

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

      <SideCartFooter>
        <div>
          <span>Quantidade</span>
          <span>3 itens</span>
        </div>
        <div>
          <strong>Valor total</strong>
          <strong>R$ 270,00</strong>
        </div>

        <button>Finalizar compra</button>
      </SideCartFooter>
    </SideCartContainer>
  )
}
