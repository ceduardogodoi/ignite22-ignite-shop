import { AppProps } from 'next/app'
import { SideCart } from '../components/SideCart'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'
import { DefaultLayout } from '../layouts/DefaultLayout'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>

      <SideCart />
    </Container>
  )
}
