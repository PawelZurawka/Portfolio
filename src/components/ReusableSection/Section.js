import React from 'react';
import { Button } from '../common/ButtonElements';
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  SectionContainer,
  SectionRow,
  SectionWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from './SectionElements';

export const Section = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkTextDesc,
  description,
  buttonLabel,
  img,
  alt,
  primarybtn,
  darkbtnfont,
  dark2,
}) => {
  return (
    <>
      <SectionContainer
        lightBg={lightBg}
        id={id}>
        <SectionWrapper>
          <SectionRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkTextDesc={darkTextDesc}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primarybtn={primarybtn ? 1 : 0}
                    darkbtnfont={darkbtnfont ? 1 : 0}
                    dark2={dark2 ? 1 : 0}>
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={img}
                  alt={alt}
                />
              </ImgWrap>
            </Column2>
          </SectionRow>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};
