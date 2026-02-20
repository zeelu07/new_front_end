import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>

{/* Navbar Start */}
<div className="container-fluid bg-light sticky-top p-0">
  <nav className="navbar navbar-expand-lg navbar-light p-0">
    <a href="index.html" className="navbar-brand bg-primary py-4 px-5 me-0">
      <h1 className="mb-0"><i className="bi bi-scissors" />Salone</h1>
    </a>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse p-3" id="navbarCollapse">
      <div className="navbar-nav mx-auto">
        {/* <a href="index.html" className="nav-item nav-link active">Home</a> */}
        <NavLink to='/' className="nav-item nav-link active">Home</NavLink>
        <NavLink to='/about' className="nav-item nav-link">About</NavLink>
        <NavLink to='/service' className="nav-item nav-link">Service</NavLink>
        <NavLink to='/price' className="nav-item nav-link">Price</NavLink>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu bg-light mt-2">
            <NavLink to='/gallery' className="dropdown-item">Photo Gallery</NavLink>
            <NavLink to='/blog' className="dropdown-item">Beauty Blog</NavLink>
            <NavLink to='/team' className="dropdown-item">Our Team</NavLink>
            <NavLink to='/testimonia' className="dropdown-item">Testimonial</NavLink>
            <NavLink to='/404' className="dropdown-item">404 Page</NavLink>
          </div>
        </div>
        <NavLink to='/contact' className="nav-item nav-link">Contact</NavLink>
      </div>
      <div className="d-flex">
        <a className="btn btn-primary btn-sm-square me-3" href="#"><i className="fab fa-facebook-f" /></a>
        <a className="btn btn-primary btn-sm-square me-3" href="#"><i className="fab fa-instagram" /></a>
        <a className="btn btn-primary btn-sm-square" href="#"><i className="fab fa-linkedin-in" /></a>
      </div>
    </div>
  </nav>
</div>
{/* Navbar End */}

    </div>
  )
}

export default Header
