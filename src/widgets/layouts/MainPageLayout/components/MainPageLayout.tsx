import { Aside } from '@/widgets/Aside' 
import {FC, ReactNode} from 'react'

interface MainPageLayoutProps {
  children: ReactNode
}

export const MainPageLayout:FC<MainPageLayoutProps> = ({children}) => {
  return (
    <div id='App' className='flex h-dvh'>
      <Aside className='flex-[.3]'/>
      <main className='flex-1'>{children}</main>
    </div>
  )
}