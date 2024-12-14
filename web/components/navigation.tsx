import Link from "next/link"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold tracking-wider">
            Media Aid
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Top
            </Link>
            <Link href="/company" className="hover:text-gray-300 transition-colors">
              Company
            </Link>
            <Link href="/service" className="hover:text-gray-300 transition-colors">
              Service
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
