import { createContext } from "react"

export const DesksContext = createContext<IDesksContext>({
  desks: [],
  setDesks: () => undefined
})