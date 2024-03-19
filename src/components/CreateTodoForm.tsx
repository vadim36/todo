import {ChangeEvent, FC, FormEvent, useState} from 'react'

interface CreateTodoFormProps {
  createTask: (data: ICreateForm) => void
}

export const CreateTodoForm:FC<CreateTodoFormProps> = ({createTask}) => {
  const [formData, setFormData] = useState<ICreateForm>({
    title: '',
    body: ''
  })
  
  function changeHandler(event: FormEvent<HTMLFormElement>):void {
    event.preventDefault()
    createTask(formData)
    return setFormData({
      title: '',
      body: ''
    })
  }

  return (
    <form 
      className='flex flex-col items-center gap-2'
      onSubmit={changeHandler}
    >
      <input type="text" placeholder='Введите задачу...'
        className='border border-black' required
        onChange={(event: ChangeEvent<HTMLInputElement>):void => {
          return setFormData({...formData, title: event.target.value})
        }}
        value={formData.title}
      />
      <textarea className='border border-black resize-none'
        placeholder='Введите описание'
        onChange={(event: ChangeEvent<HTMLTextAreaElement>):void => {
          return setFormData({...formData, body: event.target.value})
        }}
        value={formData.body}
      />
      <button className='border border-black rounded relative     
        active:top-1 p-1'>Отправить форму</button>
    </form>
  )
}