import { styled } from '../../styles'

export const SideCartContainer = styled('aside', {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '$gray800',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '$lg',
    color: '$gray100',
  },

  ul: {
    marginTop: '2rem',
    listStyle: 'none',
  },
})

export const CloseButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  marginBottom: '1.5rem',

  button: {
    backgroundColor: 'transparent',
    border: 'none',
  },
})

export const CartSummaryContainer = styled('div', {
  marginTop: 'auto',

  div: {
    border: '1px solid green',
    display: 'flex',
    justifyContent: 'space-between',

    'span:first-child': {
      color: 'red',
    },
  },
})
