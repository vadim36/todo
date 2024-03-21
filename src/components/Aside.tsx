import {FC, ReactNode} from 'react'
import { NavLink } from 'react-router-dom'

interface AsideProps {
  boards: IBoard[]
}

export const Aside:FC<AsideProps> = ({boards}) => {
  return (
    <aside>
      <ul>
        {boards.map((board: IBoard): ReactNode => {
          return <NavLink to={'/boards/:id'} key={board.title}>{board.title}</NavLink>
        })}
      </ul>
    </aside>
  )
}