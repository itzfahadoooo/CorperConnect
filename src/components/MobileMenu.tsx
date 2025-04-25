"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface MobileMenuProps {
  links: {
    href: string
    label: string
  }[]
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-emerald-600 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 border-b">
          <div className="flex flex-col py-4 px-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-gray-800 hover:text-emerald-600 border-b border-gray-100 last:border-0"
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
              <a href="/login" className="text-center py-2 text-emerald-600 hover:text-emerald-700 font-medium">
                Log in
              </a>
              <a
                href="/signup"
                className="text-center py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-medium"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
