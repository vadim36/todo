import {FC, useState, Dispatch, SetStateAction} from 'react'
import { TodoForm } from './TodoForm'

interface TodoItem {
  data: Todo,
  completeTask: (id: number, completed: boolean) => void,
  deleteTask: (id: number) => void,
  setData: Dispatch<SetStateAction<Todo[]>>,
  list: Todo[]
}

export const TodoItem:FC<TodoItem> = ({
  data,
  list,
  setData,
  completeTask,
  deleteTask
}) => {
  const {id, title, body, completed} = data
  const [editMode, setEditMode] = useState<boolean>(false)

  function editTask(data: ICreateForm):void {
    return setData(list.map((listItem: Todo):Todo => {
      if (listItem.id === id) return {
        ...listItem,
        title: data.title,
        body: data.body
      }
      return listItem
    }))
  }

  return (
    <li className='border rounded p-2 flex flex-col'>
      <h2>{id} {title}</h2>
      <p>{body}</p>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={() => completeTask(id, completed)}
        className='col-span-1 row-span-2'
      />
      <button className='border border-black rounded relative     
        active:top-1'
        onClick={() => deleteTask(id)}
      >
        <img src="../../public/close.svg" alt="close icon" />
      </button>
      <button className='border border-black rounded relative     
        active:top-1'
        onClick={() => setEditMode((prev: boolean):boolean => !prev)}
      >
        <img src="../../public/edit.svg" alt="edit icon" />
      </button>
      {editMode && <TodoForm createTask={editTask}/>}
    </li>
  )
}
