import React from 'react'

const Navigation: React.FC = () => {
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
                <span className="text-white text-sm">🎵</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                AI-Capella
              </h1>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-pink-300 hover:text-pink-400 transition-colors font-medium"
            >
              Home
            </button>
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
              Assignments
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation


