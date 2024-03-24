import {FC} from 'react'
import { useParams } from 'react-router-dom'
import { MainPageLayout } from '@/widgets/layouts/MainPageLayout'

export const DeskPage:FC = () => {
  const {id} = useParams()
  
  return (
    <MainPageLayout>
      Desk {id}
    </MainPageLayout>
  )
}