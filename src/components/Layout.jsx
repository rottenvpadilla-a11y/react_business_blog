import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import LoadingScreen from './LoadingScreen'
import Navbar from './Navbar'

export default function Layout() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 900)

    return () => window.clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {isLoading ? <LoadingScreen /> : <Outlet />}
      </main>
    </div>
  )
}
