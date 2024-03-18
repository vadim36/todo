import {FC, useState, ReactNode, SetStateAction} from 'react'
import { TodoItem } from './TodoItem'

export const TodoDesk:FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {id: 1, title: 'Задача 1', body: 'lorem ipsum dolor', completed: true},
    {id: 2, title: 'Задача 2', body: 'lorem ipsum dolor', completed: false},
    {id: 3, title: 'Задача 3', body: 'lorem ipsum dolor', completed: false},
  ])

  function completeTaks(id:number, completed: boolean):void {
    return setTodos(todos.map((todo) => {
      if (todo.id === id) {
        console.log(todo);
        return {...todo, completed: !completed}
      }
      return todo
    }))
  }

  return (
    <section aria-label='Todo items' className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold font-mono'>Задачи</h1>
      <ul>
        {todos.map((todo: Todo):ReactNode => {
          return <TodoItem 
            key={todo.id} 
            data={todo}
            completeTask={completeTaks}
          />
        })}
      </ul>
    </section>
  )
}