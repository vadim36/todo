import {FC} from 'react'

interface TodoItem {
  data: Todo,
  completeTask: (id: number) => Todo | undefined
}

export const TodoItem:FC<TodoItem> = ({data, completeTask}) => {
  const {id, title, body, completed} = data

  return (
    <li className='flex'>
      <h2>{id} {title}</h2>
      <p>{body}</p>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={() => completeTask(id, completed)}
      />
    </li>
  )
}
