import { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/future/image'
import Stripe from 'stripe'
import { Handbag } from 'phosphor-react'
import { useKeenSlider } from 'keen-slider/react'
import { useCartContext } from '../contexts/CartContext'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { stripe } from '../lib/stripe'
import { currencyFormatter } from '../utils/formatter'
import { Product } from '../contexts/CartContext/Cart.model'
import { Button, HomeContainer, ProductContainer } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const { addProductToCart } = useCartContext()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  function handleAddProductToCart(product: Product) {
    addProductToCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <ProductContainer
              key={product.id}
              className="keen-slider__slide"
            >
              <Link
                href={`/product/${product.id}`}
                prefetch={false}
              >
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{currencyFormatter().format(product.price)}</span>
                </div>
                <Button onClick={() => handleAddProductToCart(product)}>
                  <Handbag size={32} color="#fff" weight="bold" />
                </Button>
              </footer>
            </ProductContainer>
          )
        })}
      </HomeContainer>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
