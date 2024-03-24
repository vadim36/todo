import {FC} from 'react'
import { Aside } from '@/widgets/Aside'
import { useParams } from 'react-router-dom'

export const TaskPage:FC = () => {
  const {id} = useParams()
  
  return (
    <>
      <Aside/>
      Task {id}
    </>
  )
}
