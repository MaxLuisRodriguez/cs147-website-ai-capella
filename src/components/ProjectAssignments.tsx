import React from 'react'

interface ProjectAssignment {
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'upcoming'
  deliverables: string[]
  link?: string
}

const projectAssignments: ProjectAssignment[] = [
  {
    title: 'Needfinding (Assignment #1)',
    description: 'Understanding user needs and pain points in music creation and collaboration.',
    status: 'completed',
    deliverables: ['User interviews', 'Survey analysis', 'Needfinding report'],
    link: '#'
  },
  {
    title: 'Point of View & Experience Prototypes (Assignment #2)',
    description: 'Developing user personas and creating low-fidelity prototypes to test core concepts.',
    status: 'completed',
    deliverables: ['User personas', 'Experience prototypes', 'POV report'],
    link: '#'
  },
  {
    title: 'Concept Video (Assignment #4)',
    description: 'Creating a compelling video that demonstrates our vision for AI-Capella.',
    status: 'completed',
    deliverables: ['Concept video', 'YouTube/Vimeo link', 'Downloadable version'],
    link: '#'
  },
  {
    title: 'Low-Fidelity Prototype & Test (Assignment #5)',
    description: 'Building and testing paper prototypes to validate core user interactions.',
    status: 'completed',
    deliverables: ['Paper prototypes', 'User testing results', 'Prototype report'],
    link: '#'
  },
  {
    title: 'Medium-fi Prototype (Assignment #6)',
    description: 'Developing interactive digital prototypes with key functionality.',
    status: 'completed',
    deliverables: ['Digital prototype', 'User testing', 'Medium-fi report'],
    link: '#'
  },
  {
    title: 'Group Heuristic Evaluation (Assignment #9)',
    description: 'Conducting comprehensive usability evaluation with expert reviewers.',
    status: 'in-progress',
    deliverables: ['Heuristic evaluation report', 'Usability findings', 'Recommendations'],
    link: '#'
  },
  {
    title: 'Hi-fidelity Prototype (Assignment #8)',
    description: 'Creating polished, fully functional prototype with complete user experience.',
    status: 'in-progress',
    deliverables: ['High-fi prototype', 'Video demo', 'Prototype documentation'],
    link: '#'
  },
  {
    title: 'Poster & Pitch Slide (Assignment #10)',
    description: 'Final presentation materials showcasing our complete project journey.',
    status: 'upcoming',
    deliverables: ['Final poster', 'Pitch slides', 'Presentation video'],
    link: '#'
  }
]

const ProjectAssignments: React.FC = () => {
  const getStatusColor = (status: ProjectAssignment['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      case 'upcoming':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    }
  }

  const getStatusText = (status: ProjectAssignment['status']) => {
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
    <section id="project-assignments" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-4 pb-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 drop-shadow-lg text-no-clip">
            Project Development Journey
          </h2>
          <p className="text-xl text-pink-200 mb-8 max-w-3xl mx-auto">
            Our systematic approach to building AI-Capella through user-centered design and iterative development.
          </p>
        </div>

        <div className="space-y-8">
          {projectAssignments.map((assignment, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-pink-200">
                      {assignment.title}
                    </h3>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(
                        assignment.status
                      )}`}
                    >
                      {getStatusText(assignment.status)}
                    </span>
                  </div>
                  <p className="text-pink-100 mb-6 leading-relaxed">
                    {assignment.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-pink-300 font-semibold mb-2">Key Deliverables:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {assignment.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                          <span className="text-pink-200 text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {assignment.link && (
                  <div className="lg:ml-8">
                    <a
                      href={assignment.link}
                      className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 transform hover:scale-105"
                    >
                      View Details
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectAssignments
