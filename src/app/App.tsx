import { FC, useState } from 'react'
import { AppRouter } from '@/process'
import { DesksContext } from './context'

export const App:FC = () => {
  const [desks, setDesks] = useState<IDesk[]>([
    {id: 1, title: 'Desk 1'},
    {id: 2, title: 'Desk 2'},
    {id: 3, title: 'Desk 3'}
  ])
  
  return (
    <DesksContext.Provider value={{
      desks, setDesks
    }}>
      <AppRouter/>
    </DesksContext.Provider>
  )
}

export default App