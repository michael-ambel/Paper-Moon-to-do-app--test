import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter, RootRoute, Route as TanStackRoute } from '@tanstack/react-router'
import { Root } from './routes/__root'
import { Index as IndexComponent } from './routes/index'

const rootRoute = new RootRoute({
  component: Root,
})

const indexRoute = new TanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexComponent,
})

const routeTree = rootRoute.addChildren([indexRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
