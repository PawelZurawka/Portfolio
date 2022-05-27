import React, { useState } from 'react';
import { MobileNav } from '../components/MobileNav/MobileNav';
import { Navbar } from '../components/Navbar/Navbar';

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
    </>
  );
};
