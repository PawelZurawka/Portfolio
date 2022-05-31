import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';

export const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/hero">Start</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/stack">Umiejętności</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/projects">Projekty</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/skills">Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Kontakt</NavLinks>
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
