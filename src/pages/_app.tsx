import { AppProps } from 'next/app'
import Image from 'next/future/image'
import { Handbag } from 'phosphor-react'
import { SideCart } from '../components/SideCart'
import { cartWithOneItem } from '../fixtures'
import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global'
import { Button, Container, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <Button items={cartWithOneItem.length > 0}>
          <Handbag size={24} weight="bold" />

          {cartWithOneItem.length > 0 && (
            <div>
              <span>{cartWithOneItem.length}</span>
            </div>
          )}
        </Button>
      </Header>

      <Component {...pageProps} />

      <SideCart />
    </Container>
  )
}
