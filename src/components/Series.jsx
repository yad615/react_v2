import SerieComponent from './SerieComponent';

function Series({ series }) {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-primary mb-3">Series Destacadas</h2>
        <p className="lead text-muted mb-0">Explora nuestra selección premium de series</p>
      </div>
      <div className="row g-4">
        {series.map((serie) => (
          <div key={serie.cod} className="col-sm-6 col-lg-4">
            <SerieComponent
              codigo={serie.cod}
              nombre={serie.nom}
              categoria={serie.cat}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Series;