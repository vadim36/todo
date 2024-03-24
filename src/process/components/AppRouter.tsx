import {FC, ReactNode, createElement} from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '@/shared/config'

export const AppRouter:FC = () => {
  return (
    <Routes>
      {routes.map(({path, element}: TRoute):ReactNode => {
          return <Route key={path} path={path} element={createElement(element)}/>
      })}
    </Routes>
  )
}