interface IDesk {
  id: number,
  title: string
}

interface IDesksContext {
  desks: IDesk[],
  setDesks: Dispatch<SetStateAction<IDesk[]>>
}