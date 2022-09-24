import { ReactElement } from 'react';
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
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImagesContainer>
          {Array(3).fill('').map((_, index) => {
            return (
              <ImageBackground key={index}>
                <Image src={product.imageUrl} width={120} height={110} alt="" />
              </ImageBackground>
            )
          })}
        </ImagesContainer>

        <h1>Compra efetuada</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua camiseta{' '}
          <strong>{product.name}</strong> já está a caminho da sua casa.
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
  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
