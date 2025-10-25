import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation: React.FC = () => {
  const location = useLocation()
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-pink-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                      </svg>
                    </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                AI-Capella
              </h1>
            </div>
          </div>
                <div className="hidden md:flex space-x-8">
                  <Link
                    to="/"
                    className={`transition-colors font-medium ${
                      location.pathname === '/' 
                        ? 'text-pink-400' 
                        : 'text-pink-300 hover:text-pink-400'
                    }`}
                  >
                    Home
                  </Link>
                  {location.pathname === '/' && (
                    <>
                      <button
                        onClick={() => scrollToSection('introduction')}
                        className="text-pink-300 hover:text-pink-400 transition-colors font-medium"
                      >
                        Project
                      </button>
                      <button
                        onClick={() => scrollToSection('team')}
                        className="text-pink-300 hover:text-pink-400 transition-colors font-medium"
                      >
                        Team
                      </button>
                      <button
                        onClick={() => scrollToSection('assignments')}
                        className="text-pink-300 hover:text-pink-400 transition-colors font-medium"
                      >
                        Timeline
                      </button>
                    </>
                  )}
                  <Link
                    to="/assignments"
                    className={`transition-colors font-medium ${
                      location.pathname === '/assignments' 
                        ? 'text-pink-400' 
                        : 'text-pink-300 hover:text-pink-400'
                    }`}
                  >
                    Assignments
                  </Link>
                </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation


