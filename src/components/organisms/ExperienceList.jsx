import React from 'react';
import ExperienceItem from '../molecules/ExperienceItem'; 
import SectionTitle from '../atoms/SectionTitle';
import { experiences } from '../../data/portfolioData';

const ExperienceList = () => {
  return (
    <section className="mb-5">
      <SectionTitle text="Experiencia Laboral" />
      <div className="d-flex flex-column gap-3">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;