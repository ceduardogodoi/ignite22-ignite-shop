import { styled } from '../../styles'

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Button = styled('button', {
  padding: '0.75rem',
  backgroundColor: '$gray800',
  border: 'none',
  borderRadius: '6px',
  position: 'relative',
  cursor: 'pointer',

  svg: {
    color: '$gray500',
  },

  variants: {
    items: {
      true: {
        svg: {
          color: '$gray300',
        },
      },
    },
  },

  div: {
    boxSizing: 'initial',
    position: 'absolute',
    top: '-25%',
    right: '-25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    backgroundColor: '$green500',
    borderRadius: '50%',
    border: '3px solid $gray900',

    span: {
      color: '$white',
      fontWeight: 'bold',
    },
  },
})
