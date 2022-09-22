import { AppProps } from 'next/app'
import Image from 'next/future/image'
import { Handbag } from 'phosphor-react'
import { SideCart } from '../components/SideCart'
import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global'
import { Button, Container, Header } from '../styles/pages/app'

globalStyles()

const items = [1]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <Button items={items.length > 0}>
          <Handbag size={24} weight="bold" />

          {items.length > 0 && (
            <div>
              <span>{items.length}</span>
            </div>
          )}
        </Button>
      </Header>

      <Component {...pageProps} />

      {/* <SideCart /> */}
    </Container>
  )
}
