import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import styled from "@emotion/styled";
import { Badge } from "@/shared/ui";
import { skillsData } from "@/shared/data";
import { lightTheme } from "@/styles/emotion-theme";

const SkillsSection = styled.section`
  padding-top: 96px;
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;
`;

const SkillsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  width: 100%;
`;

const SkillsTitle = styled(motion.h2)`
  margin-bottom: 48px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${lightTheme.colors.foreground};

  @media (min-width: ${lightTheme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 32px;

  @media (min-width: ${lightTheme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${lightTheme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SkillGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkillGroupTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${lightTheme.colors.gray900};
  margin: 0;
  padding: 0;
`;

const SkillBadgeWrapper = styled(motion.div)`
  cursor: default;
`;

const SkillBadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SkillsSection id="skills">
      <SkillsContainer ref={ref}>
        <SkillsTitle
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </SkillsTitle>

        <SkillsGrid>
          {skillsData.map((skillGroup, groupIndex) => (
            <SkillGroup
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              <SkillGroupTitle>{skillGroup.category}</SkillGroupTitle>
              <SkillBadgesContainer>
                {skillGroup.items.map((skill, skillIndex) => (
                  <SkillBadgeWrapper
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge variant="secondary">
                      {skill}
                    </Badge>
                  </SkillBadgeWrapper>
                ))}
              </SkillBadgesContainer>
            </SkillGroup>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
}
