import {FC} from 'react'

interface TodoItem {
  data: Todo,
  completeTask: (id: number, completed: boolean) => void,
  deleteTask: (id: number) => void
}

export const TodoItem:FC<TodoItem> = ({
  data, 
  completeTask,
  deleteTask
}) => {
  const {id, title, body, completed} = data

  return (
    <li className='flex gap-2 border rounded p-2'>
      <h2>{id} {title}</h2>
      <p>{body}</p>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={() => completeTask(id, completed)}
      />
      <button className='border border-black rounded relative     
        active:top-1'
        onClick={() => deleteTask(id)}
      >
        <img src="../../public/close.svg" alt="close icon" />
      </button>
    </li>
  )
}
