import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import AssignmentsPage from './pages/Assignments'

function App() {
  return (
    <Router basename="/cs147-website-ai-capella/">
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assignments" element={<AssignmentsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 CS147 AI-Capella Team. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App


