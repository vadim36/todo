import { FC, useState } from 'react'
import { TodoDesk } from './components/TodoDesk'
import { CreateTodoForm } from './components/CreateTodoForm'

export const App:FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {id: 1, title: 'Задача 1', body: 'lorem ipsum dolor', completed: true},
    {id: 2, title: 'Задача 2', body: 'lorem ipsum dolor', completed: false},
    {id: 3, title: 'Задача 3', body: 'lorem ipsum dolor', completed: false},
  ])

  function completeTask(id:number, completed: boolean):void {
    return setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, completed: !completed}
      }
      return todo
    }))
  }

  function deleteTask(id: number):void {
    return setTodos(todos.filter((todo:Todo):boolean => {
      return todo.id !== id 
    }))
  }

  function createTask(data: ICreateForm):void {
    return setTodos([...todos, {
      id: Date.now(),
      completed: false,
      ...data
    }])
  }
  
  return (
    <>
      <CreateTodoForm createTask={createTask}/>
      <TodoDesk
        list={todos}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </>
  )
}

export default App
