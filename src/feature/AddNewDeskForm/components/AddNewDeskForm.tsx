import {ChangeEvent, FC, FormEvent, useState} from 'react'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'

interface AddNewDeskFormProps {
  add: (title: string) => void
}

export const AddNewDeskForm:FC<AddNewDeskFormProps> = ({add}) => {
  const [title, setTitle] = useState<string>('')
  
  return (
    <form 
      className='flex flex-col gap-1'
      onSubmit={(event: FormEvent):void => {
        event.preventDefault()
        add(title)
        return setTitle('')
      }}
    >
      <Input 
        placeholder='Title of desk...' 
        value={title}
        onChange={(event: ChangeEvent<HTMLInputElement>):void => {
          return setTitle(event.target.value)
        }}
      />
      <Button>Add new desk</Button>
    </form>
  )
}