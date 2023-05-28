import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

const AppDetail = () => {
  return (
    <div
      className="flex overflow-hidden"
      style={{ height: 'calc(100vh - 56px)' }}
    >
      <div className="flex w-56 shrink-0 flex-col overflow-y-auto border-r border-gray-200 bg-white">
        <div className="flex shrink-0 p-4">
          <div className="flex items-start">
            <span className="flex flex-row items-center text-sm font-semibold text-gray-700 group-hover:text-gray-900">
              选品工具
            </span>
          </div>
        </div>
        <nav className="flex-1 space-y-1 bg-white p-4">
          <NavigationMenu.Root orientation="vertical">
            <NavigationMenu.List>
              <NavigationMenu.Item>概览</NavigationMenu.Item>
              <NavigationMenu.Item>提示词编辑</NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </nav>
      </div>
      <div className="grow bg-white"></div>
    </div>
  )
}

export default AppDetail
