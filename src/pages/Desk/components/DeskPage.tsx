import {FC} from 'react'
import { MainLayout } from '@/widgets/layouts/Main'
import {useParams} from 'react-router-dom'

export const DeskPage:FC = () => {
  const {id} = useParams()

  return (
    <MainLayout>Desk {id}</MainLayout>
  )
}
