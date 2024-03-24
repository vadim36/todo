import {ReactNode} from 'react'

interface ListProps<T> {
  list: T[],
  listMap: (item: T) => ReactNode,
  className?: string
}

export default function List<T>({
  list, listMap, className
}: ListProps<T>):ReactNode {
  return <ul className={`flex flex-col gap-1 ${className}`}>
    {list.map(listMap)}
  </ul>
}