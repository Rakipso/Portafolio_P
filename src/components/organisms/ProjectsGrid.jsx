import React from 'react';
import ProjectCard from '../molecules/ProjectCard';
import SectionTitle from '../atoms/SectionTitle';
import { projects } from '../../data/portfolioData';
import pro1 from '../../assets/portal.png'; 
import pro2 from '../../assets/arduino.png';
import pro3 from '../../assets/devilm.png';


const imageMap = {
  'pro1': pro1,
  'pro2': pro2,
  'pro3': pro3
};

const ProjectsGrid = () => {
  return (
    <section className="mb-5">
      <SectionTitle text="Proyectos Destacados" />
      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-12 col-md-6 col-lg-4" key={project.id}>
            <ProjectCard 
              title={project.title}
              imageSrc={imageMap[project.imageSrc]} 
              githubLink={project.githubLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;