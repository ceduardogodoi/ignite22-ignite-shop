import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,98</span>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia dolore iste, adipisci tempore qui, debitis modi totam error neque, similique assumenda. Atque velit nemo facere ratione mollitia rem numquam in?</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
