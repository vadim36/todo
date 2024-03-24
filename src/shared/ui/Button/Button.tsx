import {FC, ReactNode} from 'react'
import * as stylex from '@stylexjs/stylex'

interface ButtonProps {
  children: ReactNode
}

const BUTTON_STYLES = stylex.create({
  base: {
    outline: '1px solid #000',
    borderRadius: '.25rem',
    padding: '.125rem',
    transition: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    ':hover': {
      transform: 'scale(1.05)'
    },
    ':active': {
      transform: 'scale(0.95)'
    }
  }
})

export const Button:FC<ButtonProps> = ({children}) => {
  return <button {...stylex.props(BUTTON_STYLES.base)}>
    {children}
  </button>
}