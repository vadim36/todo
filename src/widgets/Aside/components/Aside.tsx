import {FC, useState} from 'react'
import { Navbar } from '@/features/Navbar'
import { NavLink } from 'react-router-dom'
import { Button } from '@/shared/ui/Button/Button'

interface IDesk extends NavbarItem {
  path: string,
  title: string
}

export const Aside:FC = () => {
  const [desks, setDesks] = useState<IDesk[]>([
    { title: 'Desk 1', path: '/tasks/1'},
    { title: 'Desk 2', path: '/tasks/2'}
  ])
  
  return (
    <aside className='flex-[.25] border-blue-500 border-2 p-1'>
      <Button>
        <NavLink to={'/tasks'}>Start page</NavLink>
      </Button>
      <Navbar className='mt-2' list={desks}/>
      <Button>Add new desk</Button>
    </aside>
  )
}
