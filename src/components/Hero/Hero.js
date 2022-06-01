import React, { useState } from 'react';
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements';
import Video from '../../assets/videos/hero.mp4';
import { Button } from '../common/ButtonElements';

export const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg
          autoPlay
          muted
          loop
          src={Video}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Junior JavaScript Developer</HeroH1>
        <HeroP>Lorem ipsum dolor sit amet, consectetur adipiscing</HeroP>
        <HeroBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primarybtn="true"
            darkbtnfont="true"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            exact="true">
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
