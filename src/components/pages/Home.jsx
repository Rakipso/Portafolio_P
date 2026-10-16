import React from 'react';
import InfoCard from '../molecules/InfoCard'; 
import ExperienceList from '../organisms/ExperienceList';
import EducationSection from '../organisms/EducationSection';
import ProjectsGrid from '../organisms/ProjectsGrid';
import ContactForm from '../organisms/ContactForm';
import Footer from '../organisms/Footer';
import miFoto from '../../assets/mifoto.jpeg'; 

const Home = () => {
  return (
    <>
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-white mb-3">Mi Portafolio</h1>
      </div>
      
      <InfoCard 
        imageSrc={miFoto} 
        imageRounded={true}
        title="Joaquín Vicente Jerez Flores"
        subtitle="Desarrollador de Software"
        description="Soy un Analista Programador en formación, apasionado por el desarrollo web y la arquitectura de microservicios. Me enfoco en escribir código limpio y estructurado, y busco constantemente aprender nuevas tecnologías para resolver problemas complejos de manera eficiente."
      />
      
      <ExperienceList />
      <EducationSection />
      <ProjectsGrid />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;