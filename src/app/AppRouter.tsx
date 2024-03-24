import {FC, ReactNode, createElement} from 'react'
import {Routes, Route} from 'react-router-dom'
import { routes } from './router'

export const AppRouter:FC = () => {
  return (
    <div className='flex h-dvh'>
      <Routes>
        {routes.map(({path, element}: TRoute):ReactNode => {
          return <Route key={path} path={path} element={createElement(element)}/>
        })}
      </Routes>
    </div>
  )
}