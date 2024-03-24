import {FC, ReactNode} from 'react'
import List from '@/shared/ui/List/List'
import { Button } from '@/shared/ui/Button/Button'
import { NavLink } from 'react-router-dom'

interface NavbarProps {
  list: NavbarItem[],
  className?: string
}

export const Navbar:FC<NavbarProps> = ({list, className}) => {
  return (
    <List className={className} list={list} renderItem={(item: NavbarItem):ReactNode => {
      return <li>
        <Button>
          <NavLink to={item.path}>{item.title}</NavLink>
        </Button>
      </li>
    }}/>
  )
}