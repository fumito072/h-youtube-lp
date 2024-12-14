"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('/')

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  const navLinks = [
    { href: "/", label: "Top" },
    { href: "/company", label: "Company" },
    { href: "/service", label: "Service" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black text-white z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.button
              className="mr-2 p-2 md:hidden"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
            <Link href="/" className="text-xl font-bold tracking-wider">
              Media Aid
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-2 px-1 transition-colors hover:text-gray-300"
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                    layoutId="underline"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50"
          >
            <div className="p-6 mt-12">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      className="text-black hover:text-gray-600 transition-colors"
                      onClick={() => {
                        closeMenu()
                        setActiveLink(link.href)
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

