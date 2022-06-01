import React, { useState } from 'react';
import { MobileNav } from '../components/MobileNav/MobileNav';
import { Navbar } from '../components/Navbar/Navbar';
import { Hero } from '../components/Hero/Hero';
import { Section } from '../components/ReusableSection/Section';
import { contactSection, projectsSection, stackSection } from '../components/ReusableSection/Data';
import { Skills } from '../components/Skills/Skills';
import { Footer } from '../components/Footer/Footer';

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
      <Hero />
      <Section {...stackSection} />
      <Section {...projectsSection} />
      <Skills />
      <Section {...contactSection} />
      <Footer />
    </>
  );
};
