import { useState } from 'react';
import viteLogo from '/vite.svg';

function Header() {
    return (
      <header className="bg-primary bg-gradient position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
             style={{
               background: "linear-gradient(45deg, #007bff 25%, transparent 25%, transparent 50%, #007bff 50%, #007bff 75%, transparent 75%, transparent)",
               backgroundSize: "20px 20px"
             }}>
        </div>
        <div className="container py-5 position-relative">
          <div className="text-center">
            <p className="lead text-white mb-0 fw-light letter-spacing-2 text-shadow-sm">
              Explora el universo del entretenimiento en su máxima expresión
            </p>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  