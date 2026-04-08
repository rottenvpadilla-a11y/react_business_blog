import { Menu, PenLine, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <header className="shadow">
      <nav className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-4">
          <NavLink
            to="/"
            className="flex items-center gap-3 text-lg font-semibold tracking-tight"
            onClick={() => setIsOpen(false)}
          >
            <span
              className="inline-flex h-10 w-10 items-center justify-center text-primary"
              aria-hidden="true"
            >
              <PenLine />
            </span>
            <span className="text-primary">BusinessBlog</span>
          </NavLink>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 sm:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col gap-3 pt-4 text-sm font-medium sm:flex sm:flex-row sm:items-center sm:justify-end sm:pt-0 sm:text-base`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex w-full justify-center rounded-md px-4 py-2 text-center transition-colors sm:w-20 ${
                  isActive ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
