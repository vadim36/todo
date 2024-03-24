import {ReactNode} from 'react'

interface ListProps<T> {
  list: T[],
  listMap: (item: T) => ReactNode
}

export default function List<T>({
  list, listMap
}: ListProps<T>):ReactNode {
  return <ul className='flex flex-col gap-1'>
    {list.map(listMap)}
  </ul>
}