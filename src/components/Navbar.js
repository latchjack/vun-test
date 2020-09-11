import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {


  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item has-text-black title" to="/">
              <div className="logo">
                <p className="title has-text-white">NCC Group</p>
              </div>
            </Link>
          </div>
            <div className="navbar-end">
              <Link className="navbar-item has-text-white title is-4" to="/">User</Link>
              <Link className="navbar-item has-text-white title is-4" to="/scan">Scan</Link>
            </div>
          </div>
      </nav>
    )
  }
}

export default Navbar