import {FC, useState} from 'react'
import { DesksList } from '@/feature/DesksList'
import { Button } from '@/shared/ui/Button/Button'
import { NavLink } from 'react-router-dom'
import { Paths } from '@/shared/config'

interface AsideProps {
  className?: string
}

export const Aside:FC<AsideProps> = ({className}) => {
  const [desks, setDesks] = useState<IDesk[]>([
    {id: 1, title: 'Desk 1'},
    {id: 2, title: 'Desk 2'},
    {id: 3, title: 'Desk 3'}
  ])
  
  return (
    <aside className={`border-2 border-sky-500 p-1 ${className ?? ''}`}>
      <nav>
        <Button>
          <NavLink to={Paths.desks}>Start Page</NavLink>
        </Button>
        <DesksList className='mt-1' desks={desks}/>
      </nav>
    </aside>
  )
}
