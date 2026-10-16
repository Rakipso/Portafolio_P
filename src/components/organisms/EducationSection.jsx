import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import { educationData } from '../../data/portfolioData';

const EducationSection = () => {
  return (
    <section className="mb-5">
      <SectionTitle text="Formación Académica" />
      <div className="d-flex flex-column gap-3">
        {educationData.map((edu) => (
          <div key={edu.id} className="card border-0 shadow-sm p-4">
            <h4 className="text-primary">{edu.title}</h4>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="text-muted mb-0">{edu.institution}</h6>
              <span className="badge bg-secondary">{edu.year}</span>
            </div>
            <p className="mb-0 mt-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;