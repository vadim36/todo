import { Aside } from '@/widgets/Aside' 
import {FC, ReactNode} from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout:FC<MainLayoutProps> = ({children}) => {
  return (
    <div id='App' className='flex h-dvh'>
      <Aside className='flex-[.3]'/>
      <main className='flex-1'>{children}</main>
    </div>
  )
}