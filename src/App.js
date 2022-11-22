import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from './components/principal/Navbar'
import Footer from './components/principal/Footer'

import Home from './pages/Home'
import Training from './pages/Training'
import Contact from './pages/Contact'

import Pokemon from './pages/test/pokemon/Pokemon'

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