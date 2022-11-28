import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from './components/principal/Navbar.js'
import Footer from './components/principal/Footer.js'

import Home from './components/pages/Home.js'
import Training from './components/pages/Training.js'
import Contact from './components/pages/Contact.js'

import Pokemon from './components/pokemon/Pokemon.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/training' element={<Training />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/pokemon' element={<Pokemon />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App