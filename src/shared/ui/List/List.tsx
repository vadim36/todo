import {ReactNode} from 'react'

interface ListProps<ItemType> {
  list: ItemType[],
  renderItem: (item: ItemType) => ReactNode,
  className?: string
}

export default function List<ItemType>({
  list, renderItem, className
}: ListProps<ItemType>):ReactNode {
  return (
    <ul className={`flex flex-col gap-2 ${className ?? ''}`}>{list.map(renderItem)}</ul>
  )
}