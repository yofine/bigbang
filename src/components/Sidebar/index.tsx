import { Link } from 'react-router-dom'
import type { FC } from 'react'

interface ISidebarItem {
  text: string
  link: string
}

interface ISidebar {
  title: string
  dataSource: ISidebarItem[]
}

const Sidebar: FC<ISidebar> = ({ title, dataSource }) => {
  const renderItem = ({ text, link }: ISidebarItem) => {
    return (
      <Link
        className="group flex items-center rounded-md p-2 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-700"
        to={link}
      >
        {text}
      </Link>
    )
  }
  return (
    <div className="flex w-56 shrink-0 flex-col overflow-y-auto border-r border-gray-200 bg-white">
      <div className="flex shrink-0 p-4">
        <div className="flex items-start">
          <div className="group">
            <div className="flex flex-row items-center text-sm font-semibold text-gray-700 group-hover:text-gray-900">
              {title}
            </div>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1 bg-white p-4">
        {dataSource.map(renderItem)}
      </nav>
    </div>
  )
}

export default Sidebar
