import {FC, useContext} from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { MainPageLayout } from '@/widgets/layouts/MainPageLayout'
import {DesksContext} from '@/app/context'

export const DeskPage:FC = () => {
  const {id} = useParams()
  const {desks} = useContext(DesksContext)

  return (
    <MainPageLayout>
      {Number(id) > (desks.length + 1)
        ? <Navigate to='/'/>
        : `Desk ${id}`
      }
    </MainPageLayout>
  )
}