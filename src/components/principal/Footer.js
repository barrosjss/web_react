import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="container">
      <footer className="pt-3 mt-4 text-muted border-top">
        <div className="row py-5">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-muted">Jesus Barros</small>
            <small className="d-block mb-3 text-muted">&copy; 2022–2023</small>
          </div>
          <div className="col-6 col-md">
            <h5>Projects</h5>
            <ul className="list-unstyled text-small">
              <li><Link className="link-secondary" to='/pokemon'>Pokemon</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="#">Resource name</a></li>
              <li><a className="link-secondary" href="#">Resource</a></li>
              <li><a className="link-secondary" href="#">Another resource</a></li>
              <li><a className="link-secondary" href="#">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="#">Business</a></li>
              <li><a className="link-secondary" href="#">Education</a></li>
              <li><a className="link-secondary" href="#">Government</a></li>
              <li><a className="link-secondary" href="#">Gaming</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="#">Team</a></li>
              <li><a className="link-secondary" href="#">Locations</a></li>
              <li><a className="link-secondary" href="#">Privacy</a></li>
              <li><a className="link-secondary" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
