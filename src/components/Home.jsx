import { useState } from 'react';
import viteLogo from '/vite.svg';

function Home() {
    return (
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-primary mb-4">
            Bienvenido a YadhiraSeries
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
            Tu destino definitivo para descubrir y explorar el fascinante mundo de las series.
            Disfruta de nuestra selección premium y mantente al día con las últimas novedades.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card border-0 shadow-lg rounded-4 h-100 transform-hover">
              <div className="card-body p-5 text-center">
                <div className="mb-4">
                  <i className="bi bi-star-fill text-warning display-4"></i>
                </div>
                <h3 className="h4 fw-bold mb-3">Series Destacadas</h3>
                <p className="text-muted mb-0">Explora nuestra colección de series más populares y aclamadas por la crítica.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-lg rounded-4 h-100 transform-hover">
              <div className="card-body p-5 text-center">
                <div className="mb-4">
                  <i className="bi bi-collection-play text-primary display-4"></i>
                </div>
                <h3 className="h4 fw-bold mb-3">Categorías Variadas</h3>
                <p className="text-muted mb-0">Desde drama hasta comedia, encuentra el género que más te apasiona.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-lg rounded-4 h-100 transform-hover">
              <div className="card-body p-5 text-center">
                <div className="mb-4">
                  <i className="bi bi-heart-fill text-danger display-4"></i>
                </div>
                <h3 className="h4 fw-bold mb-3">Experiencia Premium</h3>
                <p className="text-muted mb-0">Disfruta de una experiencia de usuario excepcional con nuestro diseño intuitivo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;