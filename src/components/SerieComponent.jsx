import { useState } from 'react';

function SerieComponent({ codigo, nombre, categoria }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card h-100 border-0 rounded-4 shadow-lg overflow-hidden"
      style={{
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="position-relative">
        <img
          className="card-img-top object-fit-cover"
          style={{ 
            height: "300px",
            filter: isHovered ? 'brightness(70%)' : 'brightness(100%)',
            transition: 'all 0.3s ease-in-out'
          }}
          src={`https://dummyimage.com/800x600/1e3a8a/ffffff&text=${nombre}`}
          alt={nombre}
        />
        <div className="position-absolute top-0 end-0 m-3">
          <span className="badge bg-primary bg-gradient px-3 py-2 rounded-pill shadow-sm">
            {categoria}
          </span>
        </div>
        <div 
          className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
          style={{
            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            opacity: isHovered ? 1 : 0,
            transition: 'all 0.3s ease-in-out'
          }}
        >
          <p className="mb-0 small fw-light">
            <i className="bi bi-star-fill text-warning me-2"></i>
            Serie Destacada
          </p>
        </div>
      </div>

      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title fw-bold text-primary mb-0">{nombre}</h5>
          <span className="text-muted small">ID: {codigo}</span>
        </div>
        
        <div className="mb-4">
          <div className="d-flex align-items-center text-muted small mb-2">
            <i className="bi bi-tag-fill me-2"></i>
            <span>Categoría: {categoria}</span>
          </div>
          <div className="d-flex align-items-center text-muted small">
            <i className="bi bi-collection-play me-2"></i>
            <span>Temporadas disponibles</span>
          </div>
        </div>

        <div className="d-flex gap-2">
          <button 
            className="btn btn-primary flex-grow-1 rounded-pill fw-semibold"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <i className="bi bi-play-fill me-2"></i>
            Ver Serie
          </button>
          <button 
            className="btn btn-outline-primary rounded-pill px-3"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <i className="bi bi-info-circle"></i>
          </button>
        </div>
      </div>

      <div 
        className="position-absolute top-0 start-0 m-3"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      >
        <div className="bg-white rounded-circle shadow-sm p-2">
          <i className="bi bi-heart text-danger"></i>
        </div>
      </div>
    </div>
  );
}

export default SerieComponent;