import List from '@/shared/ui/List/List'
import {FC, ReactNode} from 'react'
import { NavLink } from 'react-router-dom'
import { Paths } from '@/shared/config'
import { Button } from '@/shared/ui/Button/Button'

interface DesksListProps {
  desks: IDesk[],
  className?: string
}

export const DesksList:FC<DesksListProps> = ({desks, className}) => {
  return (
    <List className={className} list={desks} listMap={(desk: IDesk):ReactNode => {
      return <li key={desk.id}>
        <Button>
          <NavLink to={`${Paths.desks}${desk.id}`}>
            {desk.title}
          </NavLink>
        </Button>
      </li>
    }}/>
  )
}