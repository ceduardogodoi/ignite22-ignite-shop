import { ReactElement } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/future/image'
import Stripe from 'stripe'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { useCartContext } from '../../contexts/CartContext'
import { currencyFormatter } from '../../utils/formatter'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails
} from '../../styles/pages/product'

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductProps) {
  const { addProductToCart } = useCartContext()

  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  const title = `${product.name} | Ignite Shop`

  function handleAddProduct() {
    addProductToCart(product)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{currencyFormatter().format(product.price)}</span>

          <p>{product.description}</p>

          <button
            onClick={handleAddProduct}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  // Alternativas:
  // 1. fallback: true
  // Buscar os produtos mais vendidos ou acessados e gerar por SSG
  // 2. fallback: 'blocking'
  // Bloquear até que a página esteja pronta

  return {
    paths: [
      {
        params: {
          id: 'prod_MQxTDnXWkf5tzC'
        },
      },
    ],
    // fallback
    // false => dará 404
    // true => tentará pegar o id e executar o getStaticProps e gerar a versão estática
    // 'blocking' => bloqueará a página até que a renderização seja finalizada
    fallback: true,
  }
}

Product.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps<ProductProps, { id: string }> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
