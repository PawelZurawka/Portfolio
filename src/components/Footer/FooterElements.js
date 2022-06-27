import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 24px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  color: #fff;
  width: 160px;
  box-sizing: border-box;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 0.5rem;

  &:hover {
    color: var(--main-color);
    transition: 0.3s ease-out;
  }
`;
export const FooterLinkExternal = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 0.5rem;

  &:hover {
    color: var(--main-color);
    transition: 0.3s ease-out;
  }
`;

export const SmallerFooter = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SmallerFooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SmallerFooterLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;

  @media screen and (max-width: 820px) {
    margin-bottom: 32px;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;

  @media screen and (max-width: 820px) {
    margin-bottom: 32px;
  }
`;

export const SmallerFooterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SmallerFooterIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0 10px;
`;
