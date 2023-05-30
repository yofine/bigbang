import React from 'react'
import Sidebar from 'components/Sidebar'
import { Outlet } from 'react-router-dom'

const sidebarDataSource = [
  {
    text: '概览',
    link: 'overview'
  },
  {
    text: '提示词编辑',
    link: 'prompt'
  },
  {
    text: '设置',
    link: 'settings'
  }
]

const AppDetail = () => {
  return (
    <div
      className="flex overflow-hidden"
      style={{ height: 'calc(100vh - 56px)' }}
    >
      <Sidebar title="选品工具" dataSource={sidebarDataSource} />
      <div className="grow bg-white">
        <Outlet />
      </div>
    </div>
  )
}

export default AppDetail
