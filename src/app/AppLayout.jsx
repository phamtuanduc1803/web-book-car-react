import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import FloatContact from '@/components/layout/FloatContact/FloatContact'

export default function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatContact />
    </>
  )
}
