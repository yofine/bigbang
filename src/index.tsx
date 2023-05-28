import React from 'react'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'pages/AppList'
import Resource from 'pages/Resource'
import Datasets from 'pages/Datesets'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import CommonLayout from 'layouts/CommonLayout'
import AppDetail from 'pages/AppDetail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<CommonLayout />}>
      <Route path="apps" element={<App />} />
      <Route path="apps/:appId" element={<AppDetail />} />
      <Route path="resources" element={<Resource />} />
      <Route path="datasets" element={<Datasets />} />
    </Route>
  )
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
