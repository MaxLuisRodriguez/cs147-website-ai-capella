import React from 'react'

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 pt-4 pb-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 drop-shadow-lg text-no-clip">
            AI-Capella: Live Voice AI for A-Cappella Singers
          </h2>
          <p className="text-xl text-pink-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Live voice AI that builds confident a-cappella singers through adaptive real-time feedback and personalized coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-pink-300 mb-4 drop-shadow-md">Project Overview</h3>
            <p className="text-pink-100 mb-6 leading-relaxed drop-shadow-sm">
              AI-Capella is your AI vocal coach that builds confident a-cappella singers through 
              live voice AI technology. Our platform provides adaptive real-time feedback and 
              personalized coaching to help singers master memorization, harmonization, pitch-matching, and rhythm.
            </p>
            <p className="text-pink-100 mb-8 leading-relaxed drop-shadow-sm">
              Through user-centered design and iterative prototyping, we've developed an intuitive 
              interface that makes advanced music production accessible to creators of all skill levels.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-pink-300 mb-3">The Problem</h4>
                <p className="text-pink-100 text-sm leading-relaxed">
                  A-cappella singers struggle to manage memorization, harmonization, pitch-matching, and rhythm. 
                  To make matters worse, in-person voice coaching can be too infrequent and too harsh to be 
                  conducive for improvement.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-pink-300 mb-3">Our Solution</h4>
                <p className="text-pink-100 text-sm leading-relaxed mb-3">
                  AI-Capella — your AI vocal coach with generative AI for live feedback and encouragement, 
                  voice AI technology for adaptive real-time feedback and learning, and 24/7 accessibility 
                  with short impromptu lessons tailored to your mistakes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-pink-200 text-sm">Live AI feedback and encouragement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-pink-200 text-sm">Adaptive real-time feedback</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-pink-200 text-sm">24/7 accessibility with personalized lessons</span>
                  </div>
                </div>
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
                  <p className="text-pink-200 font-semibold">Max R. - Co-head Designer</p>
                  <p className="text-pink-300 text-sm">Class of '26 • Symbolic Systems</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <p className="text-pink-200 font-semibold">Marcus L. - Co-head Designer</p>
                  <p className="text-pink-300 text-sm">Class of '25 • CS Cyber Security Coterm</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">V</span>
                </div>
                <div>
                  <p className="text-pink-200 font-semibold">Vaishnav G. - Co-tech Lead</p>
                  <p className="text-pink-300 text-sm">Class of '25 • CS HCI Coterm</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <div>
                  <p className="text-pink-200 font-semibold">Bryant M. - Video Editor</p>
                  <p className="text-pink-300 text-sm">Class of '28 • CS</p>
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
