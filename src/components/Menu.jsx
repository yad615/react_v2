import { useState } from 'react';
import viteLogo from '/vite.svg';

import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-primary border-opacity-25 sticky-top">
      <div className="container">
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-lg-4">
            <li className="nav-item">
              <NavLink to="/" className="nav-link px-4 py-3 text-center position-relative hover-effect">
                Inicio
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" 
                      style={{height: "2px", width: "0", transition: "all 0.3s"}}></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/series" className="nav-link px-4 py-3 text-center position-relative hover-effect">
                Series
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" 
                      style={{height: "2px", width: "0", transition: "all 0.3s"}}></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link px-4 py-3 text-center position-relative hover-effect">
                Contacto
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" 
                      style={{height: "2px", width: "0", transition: "all 0.3s"}}></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;