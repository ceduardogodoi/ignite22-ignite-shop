import { styled } from '../../../../styles'

export const CartItemsContainer = styled('ul', {
  marginTop: '2rem',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1.5rem',

  li: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '1.25rem',

    'div:first-of-type': {
      background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      borderRadius: '8px',
    },

    'div:last-of-type': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',

      span: {
        fontSize: '$md',
        color: '$gray300',
      },

      strong: {
        fontSize: '$md',
        color: '$gray100',
      },

      button: {
        width: 'fit-content',
        marginTop: 'auto',
        backgroundColor: 'transparent',
        border: 'none',
        color: '$green500',
        fontSize: '$sm',
        fontWeight: 700,
      },
    },
  },
})
