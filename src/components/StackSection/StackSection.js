import React from 'react';
import { Button } from '../common/ButtonElement';
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  StackContainer,
  StackRow,
  StackWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from './StackElements';

export const StackSection = () => {
  return (
    <>
      <StackContainer>
        <StackWrapper>
          <StackRow>
            <Column1>
              <TextWrapper>
                <TopLine>Topline</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home">Button</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </StackRow>
        </StackWrapper>
      </StackContainer>
    </>
  );
};
