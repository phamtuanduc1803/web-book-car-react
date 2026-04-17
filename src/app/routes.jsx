import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './AppLayout'

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        {
          index: true,
          lazy: async () => {
            const { default: Component } = await import('@/features/home/pages/HomePage')
            return { Component }
          },
        },
        {
          path: 'about',
          lazy: async () => {
            const { default: Component } = await import('@/features/about/pages/AboutPage')
            return { Component }
          },
        },
        {
          path: 'schedule',
          lazy: async () => {
            const { default: Component } = await import('@/features/schedule/pages/SchedulePage')
            return { Component }
          },
        },
        {
          path: 'address',
          lazy: async () => {
            const { default: Component } = await import('@/features/address/pages/AddressPage')
            return { Component }
          },
        },
        {
          path: 'news',
          lazy: async () => {
            const { default: Component } = await import('@/features/news/pages/NewsPage')
            return { Component }
          },
        },
        {
          path: 'contact',
          lazy: async () => {
            const { default: Component } = await import('@/features/contact/pages/ContactPage')
            return { Component }
          },
        },
        {
          path: 'booking',
          lazy: async () => {
            const { default: Component } = await import('@/features/booking/pages/BookingPage')
            return { Component }
          },
        },
        {
          path: 'charter',
          lazy: async () => {
            const { default: Component } = await import('@/features/charter/pages/CharterPage')
            return { Component }
          },
        },
      ],
    },
  ],
  { basename: '/web-book-car-react' }
)

export default router
