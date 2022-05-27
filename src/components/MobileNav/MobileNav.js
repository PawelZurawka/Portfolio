import React from 'react';
import {
  CloseIcon,
  Icon,
  MobileNavBtnWrap,
  MobileNavContainer,
  MobileNavLink,
  MobileNavMenu,
  MobileNavRoute,
  MobileNavWrapper,
} from './MobileNavElements';

export const MobileNav = ({ isOpen, toggle }) => {
  return (
    <MobileNavContainer
      isOpen={isOpen}
      onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobileNavWrapper>
        <MobileNavMenu>
          <MobileNavLink
            to="about"
            onClick={toggle}>
            O mnie
          </MobileNavLink>
          <MobileNavLink
            to="stack"
            onClick={toggle}>
            Technologie
          </MobileNavLink>
          <MobileNavLink
            to="projects"
            onClick={toggle}>
            Projekty
          </MobileNavLink>
          <MobileNavLink
            to="contact"
            onClick={toggle}>
            Kontakt
          </MobileNavLink>
        </MobileNavMenu>
        <MobileNavBtnWrap>
          <MobileNavRoute to="/send">Wyślij </MobileNavRoute>
        </MobileNavBtnWrap>
      </MobileNavWrapper>
    </MobileNavContainer>
  );
};
