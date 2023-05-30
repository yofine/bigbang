import React from 'react'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import CommonLayout from 'layouts/CommonLayout'
import AppDetail from 'pages/AppDetail'
import App from 'pages/AppList'
import Resource from 'pages/Resource'
import Datasets from 'pages/Datesets'
import Models from 'pages/Models'
import AppOverview from 'pages/AppOverview'
import AppPrompt from 'pages/AppPrompt'
import AppSettings from 'pages/AppSettings'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<CommonLayout />}>
      <Route path="apps" element={<App />} />
      <Route path="apps/:appId" element={<AppDetail />}>
        <Route index element={<AppOverview />} />
        <Route path="overview" element={<AppOverview />} />
        <Route path="prompt" element={<AppPrompt />} />
        <Route path="settings" element={<AppSettings />} />
      </Route>
      <Route path="resources" element={<Resource />} />
      <Route path="datasets" element={<Datasets />} />
      <Route path="models" element={<Models />} />
    </Route>
  )
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
