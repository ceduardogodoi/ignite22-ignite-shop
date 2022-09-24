import { ReactElement, ReactNode } from 'react'
import { CartContextProvider } from '../contexts/CartContext'
import { SideCartContextProvider } from '../contexts/SideCartContext'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

globalStyles()

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Container>
      <CartContextProvider>
        <SideCartContextProvider>
          {getLayout(<Component {...pageProps} />)}
        </SideCartContextProvider>
      </CartContextProvider>
    </Container>
  )
}
