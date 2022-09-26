import { ReactNode } from 'react'
import Image from 'next/future/image';
import { Handbag } from 'phosphor-react'
import { SideCart } from '../../components/SideCart';
import { useSideCartContext } from '../../contexts/SideCartContext'
import { useCartContext } from '../../contexts/CartContext'
import logoImg from '../../assets/logo.svg'
import { Button, Header } from './styles';

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const {
    openSideCart: handleOpenSideCart
  } = useSideCartContext()
  const { quantity } = useCartContext()

  return (
    <>
      <Header>
        <Image src={logoImg} alt="" />

        <Button
          items={quantity > 0}
          onClick={handleOpenSideCart}
        >
          <Handbag size={24} weight="bold" />

          {quantity > 0 && (
            <div>
              <span>{quantity}</span>
            </div>
          )}
        </Button>
      </Header>

      {children}

      <SideCart />
    </>
  )
}
