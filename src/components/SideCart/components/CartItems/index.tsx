import Image from 'next/future/image'
import { cartWithOneItem } from '../../../../fixtures'
import { CartItemsContainer } from './styles'

export function CartItems() {
  return (
    <CartItemsContainer>
      {cartWithOneItem.map(product => {
        return (
          <li key={product.id}>
            <div>
              <Image src={product.imageUrl} width={95} height={95} alt="" />
            </div>

            <div>
              <span>{product.name}</span>
              <strong>{product.price}</strong>

              <button>Remover</button>
            </div>
          </li>
        )
      })}
    </CartItemsContainer>
  )
}