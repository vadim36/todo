import {FC, ReactNode} from 'react'

interface TaskBoardProps {
  currentList: ITask[]
}

export const TasksBoard:FC<TaskBoardProps> = ({currentList}) => {
  return (
    <main className='flex-1'>
      {currentList.map((task: ITask): ReactNode => {
        return <li key={task.id}>{task.title}</li>
      })}
    </main>
  )
}