import React, { FC } from 'react'
interface IPageContainer {
  title: string
  children: React.ReactNode
}

const PageContainer: FC<IPageContainer> = ({ title, children }) => {
  return (
    <div className="flex h-full flex-col">
      <div className="boder-gray-100 flex h-14 shrink-0 items-center justify-between border-b px-6">
        <div className="text-xl text-gray-900">{title}</div>
        <div className="flex items-center"></div>
      </div>
      <div className="flex h-[200px] grow p-6">{children}</div>
    </div>
  )
}

export default PageContainer
