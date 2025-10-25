import React from 'react'

const ProjectJourney: React.FC = () => {
  return (
    <section id="project-journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-4 pb-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 drop-shadow-lg text-no-clip">
            Project Development Journey
          </h2>
          <p className="text-xl text-pink-200 mb-8 max-w-3xl mx-auto">
            Our systematic approach to building AI-Capella through user-centered design and iterative development.
          </p>
        </div>

        {/* Assignment 1 Special Content */}
        <div className="mb-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-pink-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-pink-200 mb-4">Assignment 1: Needfinding</h3>
              <p className="text-pink-100 mb-6 leading-relaxed">
                Our research into understanding the needs of music creators and the challenges they face 
                in collaborative music production. This foundational work informed our entire design process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/Assignment1/Assignment 1 slides.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 transform hover:scale-105"
                >
                  View Assignment Slides →
                </a>
                <a
                  href="/Assignment1/Assignment 1 slides.pdf"
                  download
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  Download Slides
                </a>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/Assignment1/empathy%20map%201.png"
                alt="Empathy Map for Music Creators"
                className="w-full max-w-md mx-auto rounded-xl shadow-lg border border-pink-400/30"
                onError={(e) => {
                  console.error('Failed to load empathy map image:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <p className="text-pink-300 text-sm mt-2">Empathy Map: Understanding Music Creator Needs</p>
            </div>
          </div>
        </div>

        {/* Assignment 2 Special Content */}
        <div className="mb-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-pink-500/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-pink-200 mb-4">Assignment 2: Point of View & Experience Prototypes</h3>
            <p className="text-pink-100 mb-6 leading-relaxed">
              Our deep dive into understanding Ryan K., a passionate music enthusiast, and developing solutions 
              to help people like him share their musical passion with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/Assignment2/CS147 Assignment 02 - POVs & Experience Prototypes slides-compressed.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 transform hover:scale-105"
                >
                  View Assignment Slides →
                </a>
                <a
                  href="/Assignment2/CS147 Assignment 02 - POVs & Experience Prototypes slides-compressed.pdf"
                  download
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Download Slides
              </a>
            </div>
          </div>

          {/* POV Content */}
          <div className="bg-black/40 rounded-xl p-6 border border-pink-400/20 mb-8">
            <h4 className="text-xl font-bold text-pink-300 mb-4">Point of View Statement</h4>
            <div className="space-y-4">
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20">
                <h5 className="text-pink-200 font-semibold mb-2">POV</h5>
                <p className="text-pink-100 text-sm">
                  Ryan K., a passionate music enthusiast who loves sharing his musical discoveries, needs a way to 
                  easily create and share music with friends because he wants to spread his love for music and 
                  connect with others through shared musical experiences.
                </p>
              </div>
              
              <div className="bg-pink-900/30 rounded-lg p-4 border border-pink-500/20">
                <h5 className="text-pink-200 font-semibold mb-2">How Might We Questions</h5>
                <ul className="text-pink-100 text-sm space-y-1">
                  <li>• How might we help Ryan easily create music without technical barriers?</li>
                  <li>• How might we enable Ryan to share his musical passion with friends?</li>
                  <li>• How might we make music creation more accessible to non-musicians?</li>
                </ul>
              </div>

              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20">
                <h5 className="text-pink-200 font-semibold mb-2">Top 3 HMWs</h5>
                <ul className="text-pink-100 text-sm space-y-1">
                  <li>• How might we help Ryan create music without needing musical training?</li>
                  <li>• How might we make music sharing as easy as sending a text message?</li>
                  <li>• How might we help Ryan discover and remix existing music?</li>
                </ul>
              </div>

              <div className="bg-pink-900/30 rounded-lg p-4 border border-pink-500/20">
                <h5 className="text-pink-200 font-semibold mb-2">Solutions</h5>
                <ul className="text-pink-100 text-sm space-y-1">
                  <li>• AI-powered music creation tool</li>
                  <li>• Social music sharing platform</li>
                  <li>• Voice-to-music conversion</li>
                  <li>• Collaborative music making</li>
                </ul>
              </div>

              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20">
                <h5 className="text-pink-200 font-semibold mb-2">Top 3 Solutions</h5>
                <ul className="text-pink-100 text-sm space-y-1">
                  <li>• AI-Capella: Voice-to-harmony conversion tool</li>
                  <li>• Music sharing social network</li>
                  <li>• Collaborative music creation platform</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prototype Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <img
                src="/Assignment2/experience_prototype_1.png"
                alt="Experience Prototype Testing"
                className="w-full max-w-md mx-auto rounded-xl shadow-lg border border-pink-400/30"
                onError={(e) => {
                  console.error('Failed to load experience prototype image:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <p className="text-pink-300 text-sm mt-2">Experience Prototype Testing</p>
            </div>
            <div className="text-center">
              <img
                src="/Assignment2/brainstorm_session.png"
                alt="Brainstorm Session"
                className="w-full max-w-md mx-auto rounded-xl shadow-lg border border-pink-400/30"
                onError={(e) => {
                  console.error('Failed to load brainstorm session image:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <p className="text-pink-300 text-sm mt-2">Brainstorm Session</p>
            </div>
          </div>
        </div>

        {/* Assignment 4 Special Content */}
        <div className="mb-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-pink-500/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-pink-200 mb-4">Assignment 4: Concept Video</h3>
            <p className="text-pink-100 mb-6 leading-relaxed">
              Our compelling concept video that demonstrates the vision and potential of AI-Capella, 
              showcasing how our AI-powered music creation tool will revolutionize the way people create and share music.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/Assignment4/AI-Capella A4 CS147 (with new link).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 transform hover:scale-105"
              >
                View Assignment Slides →
              </a>
              <a
                href="/Assignment4/AI-Capella A4 CS147 (with new link).pdf"
                download
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Download Slides
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-pink-300 mb-6 text-center">AI-Capella Concept Video</h4>
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-pink-400/30">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/t859vICb7ls"
                  title="AI-Capella Concept Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                ></iframe>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-pink-300 text-sm">
                Watch our concept video to see AI-Capella in action and understand our vision for the future of music creation.
              </p>
            </div>
          </div>

          {/* Video Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/40 rounded-xl p-6 border border-pink-400/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <h5 className="text-pink-200 font-semibold mb-2">AI-Powered Harmony</h5>
              <p className="text-pink-100 text-sm">Watch how our AI creates beautiful vocal harmonies in real-time</p>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-pink-400/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                </svg>
              </div>
              <h5 className="text-pink-200 font-semibold mb-2">Intuitive Interface</h5>
              <p className="text-pink-100 text-sm">See how easy it is for anyone to create professional-sounding music</p>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-pink-400/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h5 className="text-pink-200 font-semibold mb-2">Creative Freedom</h5>
              <p className="text-pink-100 text-sm">Express your musical ideas without technical limitations</p>
            </div>
          </div>

          {/* Download Options */}
          <div className="bg-black/40 rounded-xl p-6 border border-pink-400/20">
            <h5 className="text-pink-200 font-semibold mb-4 text-center">Download Options</h5>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com/watch?v=t859vICb7ls&feature=youtu.be"
                download
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Download Video
              </a>
              <a
                href="/Assignment4/AI-Capella A4 CS147 (with new link).pdf"
                download
                className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 transform hover:scale-105"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Download Slides
              </a>
            </div>
          </div>
        </div>

        {/* Assignment 5 Special Content */}
        <div className="mb-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-pink-500/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-pink-200 mb-4">Assignment 5: Low-Fidelity Prototype & Test</h3>
            <p className="text-pink-100 mb-6 leading-relaxed">
              Our comprehensive low-fidelity prototyping and user testing phase, where we built paper prototypes 
              and conducted extensive usability testing to validate our core design concepts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/Assignment5/AI-Capella A5 CS147_slides.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 transform hover:scale-105"
              >
                View Assignment Slides →
              </a>
              <a
                href="/Assignment5/AI-Capella A5 CS147_slides.pdf"
                download
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Download Slides
              </a>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-black/40 rounded-xl p-6 border border-pink-400/20 mb-8">
            <h4 className="text-xl font-bold text-pink-300 mb-4">Key Insights from Low-Fidelity Testing</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-pink-200 font-semibold mb-3">User Feedback</h5>
                <ul className="text-pink-100 text-sm space-y-2">
                  <li>• Users loved the simplicity of voice-to-harmony conversion</li>
                  <li>• Clear visual feedback was crucial for user confidence</li>
                  <li>• Social sharing features were highly requested</li>
                  <li>• Real-time collaboration was a key differentiator</li>
                </ul>
              </div>
              <div>
                <h5 className="text-pink-200 font-semibold mb-3">Design Improvements</h5>
                <ul className="text-pink-100 text-sm space-y-2">
                  <li>• Simplified navigation flow based on user feedback</li>
                  <li>• Enhanced visual feedback for AI processing</li>
                  <li>• Improved accessibility for diverse user needs</li>
                  <li>• Streamlined onboarding process</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-bold text-pink-300 mb-6 text-center">Assignment 5 Deliverables</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/40 rounded-xl p-6 border border-pink-400/20">
                <h5 className="text-pink-200 font-semibold mb-3">Testing Script</h5>
                <p className="text-pink-100 text-sm mb-4">Comprehensive user testing protocol</p>
                <a
                  href="/Assignment5/A5 Script for Testing (1).pdf"
                  download
                  className="inline-flex items-center text-pink-300 hover:text-pink-400 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  Download PDF
                </a>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-pink-400/20">
                <h5 className="text-pink-200 font-semibold mb-3">Usability Goals</h5>
                <p className="text-pink-100 text-sm mb-4">Measurable usability objectives</p>
                <a
                  href="/Assignment5/A5 usability goals and measurements (1) (1).pdf"
                  download
                  className="inline-flex items-center text-pink-300 hover:text-pink-400 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  Download PDF
                </a>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-pink-400/20">
                <h5 className="text-pink-200 font-semibold mb-3">Sketching Report</h5>
                <p className="text-pink-100 text-sm mb-4">Design ideation and sketching process</p>
                <a
                  href="/Assignment5/Sketching Report.pdf"
                  download
                  className="inline-flex items-center text-pink-300 hover:text-pink-400 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  Download PDF
                </a>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-pink-400/20">
                <h5 className="text-pink-200 font-semibold mb-3">Prototype Screens</h5>
                <p className="text-pink-100 text-sm mb-4">Low-fidelity prototype designs</p>
                <a
                  href="/Assignment5/low_fi_prototype_screens.pdf"
                  download
                  className="inline-flex items-center text-pink-300 hover:text-pink-400 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  Download PDF
                </a>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-pink-400/20">
                <h5 className="text-pink-200 font-semibold mb-3">Assignment Slides</h5>
                <p className="text-pink-100 text-sm mb-4">Complete presentation deck</p>
                <a
                  href="/Assignment5/AI-Capella A5 CS147_slides.pdf"
                  download
                  className="inline-flex items-center text-pink-300 hover:text-pink-400 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  Download PDF
                </a>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-pink-400/20">
                <h5 className="text-pink-200 font-semibold mb-3">All Materials</h5>
                <p className="text-pink-100 text-sm mb-4">Complete collection of Assignment 5 materials</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-pink-300 text-xs bg-pink-500/20 px-2 py-1 rounded">Testing</span>
                  <span className="text-pink-300 text-xs bg-pink-500/20 px-2 py-1 rounded">Prototyping</span>
                  <span className="text-pink-300 text-xs bg-pink-500/20 px-2 py-1 rounded">Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectJourney
