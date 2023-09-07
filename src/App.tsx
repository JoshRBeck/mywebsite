import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Navbar from './components/navbar'
import ContactMe from './pages/ContactMe'

function App() {


  return (
   <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/ContactMe" element={<ContactMe/>} />
    </Routes>
   </div>
  )
}

export default App
