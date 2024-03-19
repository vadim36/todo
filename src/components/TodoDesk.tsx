import {Dispatch, FC, ReactNode, SetStateAction} from 'react'
import { TodoItem } from './TodoItem'

interface TodoDeskProps {
  list: Todo[],
  setList: Dispatch<SetStateAction<Todo[]>>,
  completeTask: (id: number, completed: boolean) => void,
  deleteTask: (id: number) => void
}

export const TodoDesk:FC<TodoDeskProps> = ({
  list,
  setList,
  completeTask,
  deleteTask
}) => {
  return (
    <section aria-label='Todo items' className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold font-mono'>
        {list.length ? 'Задачи' : 'Список пуст'}
      </h1>
      <ul className='flex flex-col gap-2'>
        {list.map((todo: Todo):ReactNode => {
          return <TodoItem 
            key={todo.id} 
            data={todo}
            list={list}
            setData={setList}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        })}
      </ul>
    </section>
  )
}