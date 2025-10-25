import React from 'react'
import { Link } from 'react-router-dom'

interface TimelineItem {
  title: string
  description: string
  week: string
  status: 'completed' | 'in-progress' | 'upcoming'
  icon: string
  color: string
}

const timelineItems: TimelineItem[] = [
  {
    title: 'Needfinding (Assignment #1)',
    description: 'Understanding user needs and pain points in a-cappella singing through user research and needfinding',
    week: '',
    status: 'completed',
    icon: '●',
    color: 'from-purple-800 to-purple-900'
  },
  {
    title: 'Point of View & Experience Prototypes (Assignment #2)',
    description: 'Developing user personas, POV statements, and creating experience prototypes to explore solutions',
    week: '',
    status: 'completed',
    icon: '●',
    color: 'from-purple-800 to-purple-900'
  },
  {
    title: 'Concept Video (Assignment #4)',
    description: 'Creating compelling concept video demonstrating our AI-Capella vision with YouTube link and downloadable version',
    week: '',
    status: 'completed',
    icon: '●',
    color: 'from-purple-800 to-purple-900'
  },
  {
    title: 'Low-Fidelity Prototype & Test (Assignment #5)',
    description: 'Building and testing paper prototypes to validate core user interactions and design concepts',
    week: '',
    status: 'completed',
    icon: '●',
    color: 'from-purple-800 to-purple-900'
  },
  {
    title: 'Medium-fi Prototype (Assignment #6)',
    description: 'Developing interactive digital prototypes with enhanced functionality and improved user experience',
    week: '',
    status: 'in-progress',
    icon: '●',
    color: 'from-white to-gray-200'
  },
  {
    title: 'Group Heuristic Evaluation (Assignment #9)',
    description: 'Comprehensive heuristic evaluation of our prototype using established usability principles and expert review',
    week: '',
    status: 'upcoming',
    icon: '●',
    color: 'from-pink-500 to-purple-600'
  },
  {
    title: 'Hi-fidelity Prototype (Assignment #8)',
    description: 'Creating polished, fully functional prototype with video demo and comprehensive user testing',
    week: '',
    status: 'upcoming',
    icon: '●',
    color: 'from-pink-500 to-purple-600'
  },
  {
    title: 'Poster & Pitch Slide (Assignment #10)',
    description: 'Final poster and pitch slide presentation for our AI-Capella project at the CS147 showcase',
    week: '',
    status: 'upcoming',
    icon: '●',
    color: 'from-pink-500 to-purple-600'
  }
]

const Assignments: React.FC = () => {
  const getStatusIcon = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return '✓'
      case 'in-progress':
        return '●'
      case 'upcoming':
        return '○'
    }
  }

  const getStatusText = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return 'Completed'
      case 'in-progress':
        return 'In Progress'
      case 'upcoming':
        return 'Upcoming'
    }
  }

  return (
    <section id="assignments" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-4 pb-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 drop-shadow-lg text-no-clip">
            Our Journey
          </h2>
          <p className="text-xl text-pink-200 mb-8 max-w-2xl mx-auto">
            The evolution of AI-Capella through CS147 Human-Computer Interaction
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-500 to-pink-400 rounded-full shadow-lg"></div>
          
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline Dot */}
                <div className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl border-4 border-black/30 group-hover:scale-110 transition-all duration-300`}>
                  <span className="text-3xl drop-shadow-lg">{item.icon}</span>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>
                
                {/* Content Card */}
                <div className="ml-12 flex-1">
                  <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-8 border border-pink-400/30 hover:border-pink-300/50 transition-all duration-500 backdrop-blur-md shadow-2xl hover:shadow-pink-500/20 group-hover:scale-[1.02]">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                            {item.title}
                          </h3>
                          <span className="text-3xl drop-shadow-lg">{getStatusIcon(item.status)}</span>
                          <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                            item.status === 'completed' ? 'bg-gradient-to-r from-pink-500/30 to-purple-500/30 text-pink-200 border border-pink-400/50' :
                            item.status === 'in-progress' ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 border border-purple-400/50' :
                            'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 border border-purple-400/50'
                          }`}>
                            {getStatusText(item.status)}
                          </span>
                        </div>
                        <p className="text-pink-100 mb-4 text-xl leading-relaxed font-medium">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-purple-300 font-semibold">CS147 Human-Computer Interaction</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <Link
                          to="/assignments"
                          className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-pink-400 hover:to-purple-500 transition-all duration-300 shadow-xl hover:shadow-pink-500/30 transform hover:scale-105 text-center text-lg"
                        >
                          View Details →
                        </Link>
                        {item.status === 'completed' && (
                          <div className="text-center">
                            <span className="text-pink-300 text-sm font-bold bg-pink-500/20 px-3 py-1 rounded-full">✓ Delivered</span>
                          </div>
                        )}
                        {item.status === 'in-progress' && (
                          <div className="text-center">
                            <span className="text-purple-300 text-sm font-bold bg-purple-500/20 px-3 py-1 rounded-full">● Active</span>
                          </div>
                        )}
                        {item.status === 'upcoming' && (
                          <div className="text-center">
                            <span className="text-purple-300 text-sm font-bold bg-purple-500/20 px-3 py-1 rounded-full">○ Planning</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Assignments


