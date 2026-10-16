import React from 'react';

// Átomo que estandariza los títulos de todas las secciones
const SectionTitle = ({ text }) => {
  return (
    <h2 className="mb-4 border-bottom border-secondary pb-2">
      {text}
    </h2>
  );
};

export default SectionTitle;