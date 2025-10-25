import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8 pt-4 pb-4">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-3xl">🎵</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 drop-shadow-2xl text-no-clip">
            AI-Capella
          </h1>
          <p className="text-lg text-purple-300 mb-4 drop-shadow-md">CS147 Human-Computer Interaction</p>
        </div>
        <p className="text-xl md:text-2xl text-pink-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Harmonizing artificial intelligence with human creativity through innovative 
          music technology and user-centered design.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#introduction"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 transform hover:scale-105"
          >
            Discover Our Vision
          </a>
          <a
            href="#team"
            className="bg-transparent text-pink-300 px-8 py-4 rounded-full font-semibold hover:bg-pink-500/20 transition-all duration-300 border-2 border-pink-400 hover:border-pink-300"
          >
            Meet the Artists
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero


