import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo
              to="/"
              onClick={toggleHome}>
              logo
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="hero"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true">
                  Start
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="stack"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true">
                  Umiejętności
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true">
                  Projekty
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="skills"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true">
                  Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true">
                  Kontakt
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/send">Wyślij</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
