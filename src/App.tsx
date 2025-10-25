import Hero from './components/Hero'
import Team from './components/Team'
import Assignments from './components/Assignments'
import Navigation from './components/Navigation'
import Introduction from './components/Introduction'
import ProjectAssignments from './components/ProjectAssignments'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <Team />
        <ProjectAssignments />
        <Assignments />
      </main>
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 CS147 AI-Capella Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App


