import {FC} from 'react'

interface AsideProps {
  className?: string
}

export const Aside:FC<AsideProps> = ({className}) => {
  return (
    <aside className={className}>Aside</aside>
  )
}
