interface ITask {
  id: number,
  title: string,
  body: string,
  state: TaskStates
}

interface IBoard {
  title: string,
  list: ITask[]
}