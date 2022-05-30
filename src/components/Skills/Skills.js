import React from 'react';
import Icon1 from '../../assets/images/icons/icon-1.svg';
import Icon2 from '../../assets/images/icons/icon-2.svg';
import Icon3 from '../../assets/images/icons/icon-3.svg';
import { SkillsCard, SkillsContainer, SkillsH1, SkillsH2, SkillsIcon, SkillsP, SkillsWrapper } from './SkillsElements';

export const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsH1>Skills</SkillsH1>
      <SkillsWrapper>
        <SkillsCard>
          <SkillsIcon src={Icon1} />
          <SkillsH2>Lorem ipsum</SkillsH2>
          <SkillsP>Lorem ipsum dolor sit amet</SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon2} />
          <SkillsH2>Lorem ipsum</SkillsH2>
          <SkillsP>Lorem ipsum dolor sit amet</SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon3} />
          <SkillsH2>Lorem ipsum</SkillsH2>
          <SkillsP>Lorem ipsum dolor sit amet</SkillsP>
        </SkillsCard>
      </SkillsWrapper>
    </SkillsContainer>
  );
};
