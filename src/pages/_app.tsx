import { ReactElement, ReactNode } from 'react'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { SideCartContextProvider } from '../contexts/SideCartContext'

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
      <SideCartContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </SideCartContextProvider>
    </Container>
  )
}
