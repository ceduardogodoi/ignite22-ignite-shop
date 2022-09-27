import { ReactElement, Fragment } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/future/image';
import Stripe from 'stripe';
import { SuccessLayout } from '../layouts/SuccessLayout';
import { stripe } from '../lib/stripe';
import {
  ImageBackground,
  ImagesContainer,
  SuccessContainer
} from '../styles/pages/success';

interface SuccessProps {
  customerName: string;
  quantity: number;
  products: {
    id: string;
    quantity: number;
    image: string;
  }[];
}

export default function Success({ customerName, quantity, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImagesContainer>
          {products.map(product => (
            <Fragment key={product.id}>
              <ImageBackground>
                <Image src={product.image} width={120} height={110} alt="" />
                <span>{product.quantity}</span>
              </ImageBackground>
            </Fragment>
          ))}
        </ImagesContainer>

        <h1>Compra efetuada</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {quantity} camisetas
          já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

Success.getLayout = (page: ReactElement) => {
  return (
    <SuccessLayout>
      {page}
    </SuccessLayout>
  )
}

export const getServerSideProps: GetServerSideProps<SuccessProps> = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const quantity = session.line_items?.data.reduce((accumulator, lineItem) => {
    accumulator += lineItem.quantity

    return accumulator
  }, 0)

  const products = session.line_items?.data.map(item => {
    const product = item.price.product as Stripe.Product
    return {
      id: product.id,
      quantity: item.quantity,
      image: product.images[0]
    }
  })

  return {
    props: {
      customerName,
      quantity,
      products,
    },
  }
}
