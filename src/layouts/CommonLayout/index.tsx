import React from 'react'
import type { FC } from 'react'
import Navigation from 'components/Navigation'
import Avatar from 'components/Avatar'
import { Outlet } from 'react-router-dom'
import logo from 'public/logo-1.png'

interface ICommonLayout {
  children?: React.ReactNode
}

const CommonLayout: FC<ICommonLayout> = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="sticky inset-x-0 top-0 z-20 flex h-14 shrink-0 grow-0 basis-auto border-b border-gray-200 bg-white">
        <div className="flex items-center px-4">
          <a className="mr-3 flex items-center" href="/apps">
            <div
              style={{
                width: 96,
                height: 40,
                background: `url(${logo}) 50% no-repeat`,
                backgroundSize: 'contain'
              }}
            ></div>
          </a>
        </div>
        <div className="flex  flex-1 items-center justify-center">
          <Navigation />
        </div>
        <div className="flex shrink-0 items-center px-4">
          <Avatar />
        </div>
      </header>
      <main className="flex shrink-0 grow flex-col overflow-auto bg-gray-100">
        <Outlet />
      </main>
      <footer className="bg-white py-4 text-gray-600">
        <div className="container mx-auto px-4">
          <p className="text-center">Copyright &copy; 2023</p>
        </div>
      </footer>
    </div>
  )
}

export default CommonLayout
