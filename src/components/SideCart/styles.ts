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
})

export const SideCartHeader = styled('header', {
  div: {
    display: 'flex',
    justifyContent: 'end',
    marginBottom: '1.5rem',

    button: {
      backgroundColor: 'transparent',
      border: 'none',
    },
  },
})

export const SideCartFooter = styled('footer', {
  marginTop: 'auto',

  div: {
    display: 'flex',
    justifyContent: 'space-between',

    span: {
      color: '$gray100',
      fontSize: '$sm',

      '&:last-of-type': {
        color: '$gray300',
        fontSize: '$md',
      },
    },

    strong: {
      fontSize: '$md',

      '&:last-of-type': {
        fontSize: '$xl',
      },
    },

    '&:last-of-type': {
      marginTop: '0.438rem',
    },
  },

  button: {
    marginTop: '3.438rem',
    width: '100%',
    padding: '1.25rem 2rem',
    backgroundColor: '$green500',
    border: 'none',
    borderRadius: '8px',
    color: '$white',
    fontSize: '$md',
    fontWeight: 700,
    cursor: 'pointer',
  },
})
