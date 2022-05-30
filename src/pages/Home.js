import React, { useState } from 'react';
import { MobileNav } from '../components/MobileNav/MobileNav';
import { Navbar } from '../components/Navbar/Navbar';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { Section } from '../components/ReusableSection/Section';
import { contactSection, projectsSection, stackSection } from '../components/ReusableSection/Data';
import { Skills } from '../components/Skills/Skills';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav
        isOpen={isOpen}
        toggle={toggle}
      />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Section {...stackSection} />
      <Section {...projectsSection} />
      <Skills />
      <Section {...contactSection} />
    </>
  );
};
