/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/display-name */
import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] bg-white p-1">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            active={pathname.startsWith('/apps')}
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
          >
            <Link to="/apps">应用</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            active={pathname.startsWith('/resources')}
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
          >
            <Link to="/resources">资源</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            active={pathname.startsWith('/datasets')}
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
          >
            <Link to="/datasets">数据集</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="absolute left-0 top-full flex w-full justify-center perspective-[2000px]">
        <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  )
}

export default Navigation
