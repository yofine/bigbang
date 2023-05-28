import React, { useState } from 'react'
import type { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Link } from 'react-router-dom'
import { Cross2Icon } from '@radix-ui/react-icons'

interface IApp {
  id: string
  title: string
  description: string
  type: string
}

interface IAppCard {
  title: string
  description: string
  type: string
}

const AppCard: FC<IAppCard> = ({ id, title, description, type }) => {
  return (
    <Link
      to={`/apps/${id}`}
      className="light:hover:bg-gray-700 block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100"
    >
      <div className="mb-2 text-lg tracking-tight">{title}</div>
      <p className="font-normal text-gray-500">{description}</p>

      <span className="mt-8 flex h-6 w-fit items-center gap-1 rounded border border-gray-100 px-2 text-xs text-gray-500">
        {type}
      </span>
    </Link>
  )
}

const AppCreateCard = ({ onClick }) => {
  return (
    <a
      href="#"
      className="light:hover:bg-gray-700  flex max-w-sm items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100"
      onClick={onClick}
    >
      <h5 className="mb-2 text-xl tracking-tight ">创建应用</h5>
    </a>
  )
}

const AppCreateDiglog = ({ visible = false, onClose }) => {
  return (
    <Dialog.Root open={visible} onOpenChange={() => onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA9 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
            Edit profile
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-[10px] text-[15px] leading-normal text-mauve11">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="w-[90px] text-right text-[15px] text-violet11"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="w-[90px] text-right text-[15px] text-violet11"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="username"
              defaultValue="@peduarte"
            />
          </fieldset>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-green4 px-[15px] font-medium leading-none text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 focus:outline-none">
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const mock: IApp[] = [
  {
    id: 'asdazx',
    title: '选品工具',
    description: 'Here are the biggest enterprise technology acquisitions',
    type: '对话型'
  },
  {
    id: 'azxcsdazx',
    title: '对话机器人',
    description: 'Here are the biggest enterprise technology acquisitions',
    type: '对话型'
  },
  {
    id: 'azxcsdazx12',
    title: 'Midjourney 提示词生成',
    description: 'Here are the biggest enterprise technology acquisitions',
    type: '生成型'
  }
]

const AppList = () => {
  const [visible, setVisible] = useState(false)
  const renderCard = (item: IApp) => {
    return <AppCard {...item} />
  }
  return (
    <div className="grid shrink-0 grow grid-cols-1 content-start gap-4 px-12 pt-8 sm:grid-cols-2 lg:grid-cols-4">
      {mock.map(renderCard)}
      <AppCreateCard onClick={() => setVisible(true)} />
      <AppCreateDiglog visible={visible} onClose={() => setVisible(false)} />
    </div>
  )
}

export default AppList
