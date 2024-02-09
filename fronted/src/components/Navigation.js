import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NotesApp
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/">Notas</Link>
              <Link className="nav-link" to="/create">Crear Nota</Link>
              <Link className="nav-link" to="/user">Crear Usuario</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
