import React from 'react';

const Button = ({ children, type = "button", variant = "primary", isFullWidth = false, href }) => {
  const btnClass = `btn btn-${variant} ${isFullWidth ? 'w-100' : ''}`;
  
  // Si le pasamos un enlace, renderiza un tag <a> con diseño de botón
  if (href) {
    return (
      <a href={href} className={btnClass} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  // Si no, renderiza un botón normal
  return (
    <button type={type} className={btnClass}>
      {children}
    </button>
  );
};

export default Button;