import {FC} from 'react'
import { useParams } from 'react-router-dom'

export const DeskPage:FC = () => {
  const {id} = useParams()
  
  return (
    <>
      Desk {id}
    </>
  )
}