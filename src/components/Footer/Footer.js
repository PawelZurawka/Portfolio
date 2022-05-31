import React from 'react';
import {
  FooterContainer,
  FooterLink,
  FooterLinkExternal,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SmallerFooter,
  SmallerFooterIconLink,
  SmallerFooterIcons,
  SmallerFooterLogo,
  SmallerFooterWrap,
  WebsiteRights,
} from './FooterElements';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Lorem ipsum</FooterLinkTitle>
              <FooterLink to="/start">Start</FooterLink>
              <FooterLink to="/stack">Umiejętności</FooterLink>
              <FooterLink to="/projects">Projekty</FooterLink>
              <FooterLink to="/skills">Skills</FooterLink>
              <FooterLink to="/send">Kontakt</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Lorem ipsum</FooterLinkTitle>
              <FooterLinkExternal
                href="https://github.com"
                target="_blank">
                Github
              </FooterLinkExternal>
              <FooterLinkExternal
                href="https://linkedin.com"
                target="_blank">
                Linkedin
              </FooterLinkExternal>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SmallerFooter>
          <SmallerFooterWrap>
            <SmallerFooterLogo to="/">Lorem</SmallerFooterLogo>
            <WebsiteRights>Lorem {new Date().getFullYear()}</WebsiteRights>
            <SmallerFooterIcons>
              <SmallerFooterIconLink
                href="//https://github.com"
                target="_blank"
                aria-label="Github">
                <FaGithub />
              </SmallerFooterIconLink>
              <SmallerFooterIconLink
                href="//https://linkedin.com"
                target="_blank"
                aria-label="Linkedin">
                <FaLinkedin />
              </SmallerFooterIconLink>
            </SmallerFooterIcons>
          </SmallerFooterWrap>
        </SmallerFooter>
      </FooterWrap>
    </FooterContainer>
  );
};
