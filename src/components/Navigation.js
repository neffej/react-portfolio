import React from 'react';

export default function Navigation({ currentPage, handlePageChange }){
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
    <h1 className="navbar-brand" href="#" ><img src="https://images.unsplash.com/photo-1536048810607-3dc7f86981cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="placeholder avatar" className='rounded-3 m-2' height="auto" width="50" />
    Eric Neff</h1>
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">About Me
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Portfolio</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Index</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Project 1</a>
            <a className="dropdown-item" href="#">Project 2</a>
            <a className="dropdown-item" href="#">Project 3</a>
            <a className="dropdown-item" href="#">Project 4</a>
            <a className="dropdown-item" href="#">Project 5</a>
            <a className="dropdown-item" href="#">Project 6</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
