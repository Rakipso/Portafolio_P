import React from 'react';

const Footer = () => {
  // Requisito estricto: Cálculo dinámico del año actual mediante código JavaScript
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        
        <div className="mb-3">
          <a 
            href="https://github.com/Rakipso" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-decoration-none mx-3 h5"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/joaqu%C3%ADn-jerez-flores-5844b3233/?isSelfProfile=true" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-decoration-none mx-3 h5"
          >
            LinkedIn
          </a>
        </div>
        
        {/* Información de derechos de autor */}
        <p className="mb-1">
          &copy; {currentYear} Joaquín Vicente Jerez Flores. Todos los derechos reservados.
        </p>
        <p className="small text-secondary mb-0">
          Diseñado y desarrollado con React & Bootstrap.
        </p>
      </div>
    </footer>
  );
};

export default Footer;