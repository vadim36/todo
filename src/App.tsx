import { FC, useState } from 'react'
import { TasksBoard } from './components/TasksBoard'
import { Aside } from './components/Aside'
import { TaskStates } from './utils/enums'

export const App:FC = () => {
  const [firstTasks, setFirstTasks] = useState([
    { id: 1, title: `Задача 1`, body: 'lorem ipsum dolor', state: TaskStates.todo },
    { id: 2, title: `Задача 1`, body: 'lorem ipsum dolor', state: TaskStates.todo },
    { id: 3, title: `Задача 1`, body: 'lorem ipsum dolor', state: TaskStates.todo },
  ])
  const [secondTasks, setsecondTasks] = useState([
    { id: 1, title: `Задача 1`, body: 'lorem ipsum dolor', state: TaskStates.todo },
    { id: 2, title: `Задача 2`, body: 'lorem ipsum dolor', state: TaskStates.todo },
  ])
  const [thirdTasks, setThirdTasks] = useState([
    { id: 1, title: `Задача 1`, body: 'lorem ipsum dolor', state: TaskStates.todo },
  ])

  const [boards, setBoars] = useState<IBoard[]>([
    {title: 'Первая доска', list: firstTasks},
    {title: 'Вторая доска', list: secondTasks},
    {title: 'Третья доска', list: thirdTasks},
  ])
  
  return (
    <div id="App" className='flex'>
      <Aside boards={boards}/>
      <TasksBoard currentList={firstTasks}/>
    </div>
  )
}

export default App
