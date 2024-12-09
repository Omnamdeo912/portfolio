import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Om Prakash Namdeo</h2>
            <p className="mt-2">Product Manager | Innovator | Tech Enthusiast</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaGithub size={24} />
            </a>
            <a href="mailto:cs.omnamdeo@gmail.com" className="hover:text-blue-400">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Om Prakash Namdeo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

