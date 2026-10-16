import React from 'react';

// Aplicamos destructuring en los parámetros para un código más limpio
const InfoCard = ({ imageSrc, title, subtitle, description, date, imageRounded }) => {
  return (
    <div className="card mb-4 shadow-sm border-0">
      <div className="row g-0 align-items-center">
        {imageSrc && (
          <div className="col-md-4 text-center p-3">
            <img 
              src={imageSrc} 
              alt={`Imagen de ${title}`} 
              className={`img-fluid ${imageRounded ? 'rounded-circle' : 'rounded'} object-fit-cover`} 
              style={{ maxHeight: '200px' }}
            />
          </div>
        )}
        <div className={`col-md-${imageSrc ? '8' : '12'}`}>
          <div className="card-body">
            {/* Título principal */}
            <h3 className="card-title text-primary">{title}</h3>
            
            {/* Subtítulo y fecha agrupados */}
            <div className="d-flex justify-content-between align-items-center mb-2">
              {subtitle && <h5 className="card-subtitle text-muted mb-0">{subtitle}</h5>}
              {date && <span className="badge bg-secondary">{date}</span>}
            </div>
            
            {/* Descripción */}
            {description && <p className="card-text mt-3">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;