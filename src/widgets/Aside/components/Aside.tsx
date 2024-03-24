import {FC, useContext} from 'react'
import { DesksList } from '@/feature/DesksList'
import { Button } from '@/shared/ui/Button/Button'
import { NavLink } from 'react-router-dom'
import { Paths } from '@/shared/config'
import { AddNewDeskForm } from '@/feature/AddNewDeskForm'
import { DesksContext } from '@/app/context'

interface AsideProps {
  className?: string
}

export const Aside:FC<AsideProps> = ({className = ''}) => {
  const {desks, setDesks} = useContext(DesksContext)

  function addNewDesk(title: string):void {
    if (desks.length === 30) return alert('Max count of desks')
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
