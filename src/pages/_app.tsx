import { AppProps } from 'next/app'
import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
