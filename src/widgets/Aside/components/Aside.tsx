import {FC, useState} from 'react'
import { DesksList } from '@/feature/DesksList'
import { Button } from '@/shared/ui/Button/Button'
import { NavLink } from 'react-router-dom'
import { Paths } from '@/shared/config'
import { AddNewDeskForm } from '@/feature/AddNewDeskForm'

interface AsideProps {
  className?: string
}

export const Aside:FC<AsideProps> = ({className = ''}) => {
  const [desks, setDesks] = useState<IDesk[]>([
    {id: 1, title: 'Desk 1'},
    {id: 2, title: 'Desk 2'},
    {id: 3, title: 'Desk 3'}
  ])

  function addNewDesk(title: string):void {
    const id: number = desks.length + 1
    return setDesks([...desks, {
      id, 
      title: title || `Desk ${id}`
    }])
  }
  
  return (
    <aside className={`border-2 border-sky-500 p-1 flex flex-col gap-10 ${className}`}>
      <nav className='flex-1 overflow-auto p-1 border-2 border-sky-500 rounded'>
        <Button>
          <NavLink to={Paths.desks}>Start Page</NavLink>
        </Button>
        <DesksList className='mt-1' desks={desks}/>
      </nav>
      <AddNewDeskForm add={addNewDesk}/>
    </aside>
  )
}
