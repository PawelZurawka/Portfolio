import React, { useState } from 'react';
import { MobileNav } from '../components/MobileNav/MobileNav';
import { Navbar } from '../components/Navbar/Navbar';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { StackSection } from '../components/StackSection/StackSection';

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
      <StackSection />
    </>
  );
};
