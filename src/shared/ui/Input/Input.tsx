import {FC, InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?:string
}

export const Input:FC<InputProps> = ({type = 'text', ...props}) => {
  return (
    <input type={type} {...props} 
      className='outline-1 outline px-1 rounded-sm'/>
  )
}
