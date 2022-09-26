import Image from 'next/future/image'
import { useCartContext } from '../../../../contexts/CartContext'
import { currencyFormatter } from '../../../../utils/formatter'
import { CartItemsContainer } from './styles'

export function CartItems() {
  const { products, removeProductToCart } = useCartContext()

  function handleRemoveProductFromCart(productId: string) {
    removeProductToCart(productId)
  }

  return (
    <CartItemsContainer>
      {products.map(product => {
        return (
          <li key={product.id}>
            <div>
              <Image src={product.imageUrl} width={95} height={95} alt="" />
            </div>

            <div>
              <span>{product.name}</span>
              <strong>{currencyFormatter().format(product.price)}</strong>
              <span>Quantidade: {product.quantity}</span>

              <button onClick={() => handleRemoveProductFromCart(product.id)}>Remover</button>
            </div>
          </li>
        )
      })}
    </CartItemsContainer>
  )
}