import { useState } from 'react';
import viteLogo from '/vite.svg'; 

function Footer() {
    return (
      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">&copy; 2024 Yadhira Series</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;