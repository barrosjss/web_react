import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link to='/' className="nav-link px-2 link-secondary">Home</Link></li>
            <li><Link to='/training' className="nav-link px-2 link-dark">Training</Link></li>
            <li><Link to='/contact' className="nav-link px-2 link-dark">Pricing</Link></li>
            <li><Link className="nav-link px-2 link-dark">FAQs</Link></li>
            <li><Link className="nav-link px-2 link-dark">About</Link></li>
          </ul>
        </header>
      </div>
    </>
  )
}

export default navbar