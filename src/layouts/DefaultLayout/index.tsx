import { ReactNode } from 'react'
import Image from 'next/future/image';
import { Handbag } from 'phosphor-react'
import { SideCart } from '../../components/SideCart';
import { useSideCartContext } from '../../contexts/SideCartContext'
import { cartWithOneItem } from '../../fixtures'
import logoImg from '../../assets/logo.svg'
import { Button, Header } from './styles';

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const {
    openSideCart: handleOpenSideCart
  } = useSideCartContext()

  return (
    <>
      <Header>
        <Image src={logoImg} alt="" />

        <Button
          items={cartWithOneItem.length > 0}
          onClick={handleOpenSideCart}
        >
          <Handbag size={24} weight="bold" />

          {cartWithOneItem.length > 0 && (
            <div>
              <span>{cartWithOneItem.length}</span>
            </div>
          )}
        </Button>
      </Header>

      {children}

      <SideCart />
    </>
  )
}
