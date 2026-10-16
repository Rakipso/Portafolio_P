import React from 'react';

// Aplicamos destructuring a las props para mantener Clean Code
const ExperienceItem = ({ empresa, cargo, fechaInicio, fechaTermino }) => {
  return (
    <div className="card mb-3 border-0 border-start border-primary border-4 shadow-sm">
      <div className="card-body">
        {/* Cargo desempeñado */}
        <h4 className="card-title text-primary mb-1">{cargo}</h4>
        
        {/* Nombre de la empresa */}
        <h6 className="card-subtitle text-muted mb-2">{empresa}</h6>
        
        {/* Fechas de inicio y término */}
        <p className="card-text mb-0">
          <small className="text-secondary fw-bold">
            {fechaInicio} — {fechaTermino}
          </small>
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;