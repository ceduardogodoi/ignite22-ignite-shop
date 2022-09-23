import { ReactNode } from 'react'
import Image from 'next/future/image'
import logoImg from '../../assets/logo.svg'
import { Header } from './styles'

interface SuccessLayoutProps {
  children: ReactNode
}

export function SuccessLayout({ children }: SuccessLayoutProps) {
  return (
    <>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      {children}
    </>
  )
}
