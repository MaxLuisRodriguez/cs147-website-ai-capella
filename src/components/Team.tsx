import React from 'react'

interface TeamMember {
  name: string
  role: string
  bio: string
  github?: string
  initial: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Max R.',
    role: 'Class of \'26 • Symbolic Systems',
    bio: 'Co-head designer, Figma engineer, video director, brainstorm lead. Passionate about creating AI systems that build confident a-cappella singers through live voice AI technology.',
    github: '#',
    initial: 'M'
  },
  {
    name: 'Marcus L.',
    role: 'Class of \'25 • CS Cyber Security Coterm',
    bio: 'Co-head designer, transcriber, co-tech lead. Focused on understanding a-cappella singer needs and creating intuitive interfaces for 24/7 accessible vocal coaching.',
    github: '#',
    initial: 'M'
  },
  {
    name: 'Vaishnav G.',
    role: 'Class of \'25 • CS HCI Coterm',
    bio: 'Co-tech lead, task planner. Specializing in React development and creating beautiful, responsive interfaces for real-time AI vocal feedback.',
    github: '#',
    initial: 'V'
  },
  {
    name: 'Bryant M.',
    role: 'Class of \'28 • CS',
    bio: 'Video editor. Expert in voice AI processing, machine learning, and building scalable systems for personalized vocal coaching.',
    github: '#',
    initial: 'B'
  }
]

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-4 pb-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 drop-shadow-lg text-no-clip">
            Meet the Artists
          </h2>
          <p className="text-xl text-pink-200 mb-8 max-w-2xl mx-auto">
            The passionate team behind AI-Capella's live voice AI technology for confident a-cappella singers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-6 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{member.initial}</span>
              </div>
              <h3 className="text-xl font-bold text-pink-200 text-center mb-2">
                {member.name}
              </h3>
              <p className="text-purple-300 text-center font-semibold mb-3 text-sm">
                {member.role}
              </p>
              <p className="text-pink-100 text-center text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>
              {member.github && (
                <div className="text-center">
                  <a
                    href={member.github}
                    className="text-pink-300 hover:text-pink-400 transition-colors text-sm font-medium"
                  >
                    GitHub Profile →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team


