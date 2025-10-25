import React from 'react'

interface Assignment {
  title: string
  description: string
  dueDate: string
  status: 'completed' | 'in-progress' | 'upcoming'
  link?: string
}

const assignments: Assignment[] = [
  {
    title: 'CS147 Course Assignments',
    description: 'Weekly assignments covering human-computer interaction principles, user research, and design methodologies.',
    dueDate: 'Ongoing',
    status: 'in-progress',
    link: '#'
  },
  {
    title: 'User Research & Needfinding',
    description: 'Conducting interviews and surveys to understand music creators\' needs and pain points.',
    dueDate: 'Week 3',
    status: 'completed',
    link: '#'
  },
  {
    title: 'Prototype Development',
    description: 'Building and testing multiple iterations of our AI-Capella interface and functionality.',
    dueDate: 'Week 7',
    status: 'in-progress',
    link: '#'
  },
  {
    title: 'Usability Testing',
    description: 'Conducting comprehensive user testing sessions with musicians and music producers.',
    dueDate: 'Week 9',
    status: 'upcoming'
  },
  {
    title: 'Final Presentation',
    description: 'Presenting our complete AI-Capella system with live demonstration and user feedback.',
    dueDate: 'Week 10',
    status: 'upcoming'
  }
]

const Assignments: React.FC = () => {
  const getStatusColor = (status: Assignment['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      case 'upcoming':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    }
  }

  const getStatusText = (status: Assignment['status']) => {
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
            Course Progress
          </h2>
          <p className="text-xl text-pink-200 mb-8 max-w-2xl mx-auto">
            Our journey through CS147 Human-Computer Interaction
          </p>
        </div>
        <div className="space-y-6">
          {assignments.map((assignment, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-pink-200">
                      {assignment.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                        assignment.status
                      )}`}
                    >
                      {getStatusText(assignment.status)}
                    </span>
                  </div>
                  <p className="text-pink-100 mb-2">{assignment.description}</p>
                  <p className="text-sm text-pink-300">Due: {assignment.dueDate}</p>
                </div>
                {assignment.link && (
                  <div>
                    <a
                      href={assignment.link}
                      className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 transform hover:scale-105"
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

export default Assignments


