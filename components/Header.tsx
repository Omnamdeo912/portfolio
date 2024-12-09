import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Om Prakash Namdeo
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="#projects" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Projects
            </Link>
            <Link href="#experience" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Experience
            </Link>
            <Link href="#skills" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Skills
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="mailto:cs.omnamdeo@gmail.com"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

