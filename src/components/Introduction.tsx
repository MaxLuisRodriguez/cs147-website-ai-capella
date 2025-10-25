import React from 'react'

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 pt-4 pb-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 drop-shadow-lg text-no-clip">
            AI-Capella: Intelligent Music Creation
          </h2>
          <p className="text-xl text-pink-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Revolutionizing music production through AI-powered vocal harmony generation and real-time collaboration tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-pink-300 mb-4 drop-shadow-md">Project Overview</h3>
            <p className="text-pink-100 mb-6 leading-relaxed drop-shadow-sm">
              AI-Capella is an innovative music technology platform that leverages artificial intelligence 
              to create beautiful vocal harmonies in real-time. Our system allows musicians to input 
              a melody and instantly generate complementary vocal parts, enabling solo artists to create 
              rich, layered musical arrangements.
            </p>
            <p className="text-pink-100 mb-8 leading-relaxed drop-shadow-sm">
              Through user-centered design and iterative prototyping, we've developed an intuitive 
              interface that makes advanced music production accessible to creators of all skill levels.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-pink-200">Real-time AI harmony generation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-pink-200">Intuitive user interface</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-pink-200">Collaborative music creation</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-2xl p-8 border border-pink-400/30">
            <h3 className="text-xl font-bold text-pink-300 mb-6">Team Members</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <p className="text-pink-200 font-semibold">Max Rodriguez - Project Lead</p>
                  <p className="text-pink-300 text-sm">AI/ML Architecture</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <p className="text-pink-200 font-semibold">Marcus Lintott - UX Designer</p>
                  <p className="text-pink-300 text-sm">User Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">V</span>
                </div>
                <div>
                  <p className="text-pink-200 font-semibold">Vaishnav Garodia - Frontend Developer</p>
                  <p className="text-pink-300 text-sm">Interface Development</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <div>
                  <p className="text-pink-200 font-semibold">Bryant Mendez - Backend Developer</p>
                  <p className="text-pink-300 text-sm">Audio Processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
