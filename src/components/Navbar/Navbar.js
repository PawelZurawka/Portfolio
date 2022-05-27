import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">logo</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">O mnie</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="stack">Technologie</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projekty</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Kontakt</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/send">Wyślij</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
