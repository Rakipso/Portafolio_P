import React from 'react';
import Button from '../atoms/Button';

const ProjectCard = ({ imageSrc, title, githubLink }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img 
        src={imageSrc} 
        className="card-img-top object-fit-cover" 
        alt={`Previsualización de ${title}`} 
        style={{ height: '200px' }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-primary text-center mb-3">{title}</h5>
        
        {/* El mt-auto empuja el botón hacia abajo para que todas las tarjetas se vean alineadas */}
        <div className="mt-auto">
          
          <Button 
            href={githubLink} 
            variant="outline-light" 
            isFullWidth={true}
          >
            <i className="bi bi-github me-2"></i> Ver Repositorio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;