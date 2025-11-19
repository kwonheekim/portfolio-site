import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import styled from "@emotion/styled";
import { aboutCopy, skillsData } from "@/shared/data";
import { lightTheme } from "@/styles/emotion-theme";
import profileImage from "@/assets/images/profile_img.png";
import { getAnimationConfig } from "@/shared/utils/animation";

const AboutSection = styled.section`
  padding-top: 96px;
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #f5f5f7;
`;

const AboutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  width: 100%;
`;

const AboutTitle = styled.h2`
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

const AboutGrid = styled.div`
  display: grid;
  gap: 48px;
  align-items: flex-end;

  @media (min-width: ${lightTheme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (min-width: ${lightTheme.breakpoints.md}) {
    gap: 56px;
  }
`;

const ProfileImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.img`
  aspect-ratio: 1;
  width: 50%;
  object-fit: cover;
  border-radius: 1rem;

  @media (min-width: ${lightTheme.breakpoints.md}) {
    width: 65%;
  }
`;

const IntroSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NameAccent = styled.div`
  width: 40px;
  height: 3px;
  background-color: ${lightTheme.colors.accentBlue};
  margin-bottom: 16px;
  border-radius: 2px;
`;

const SectionLabel = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${lightTheme.colors.foreground};
  margin: 0;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid ${lightTheme.colors.gray200};
`;

const IntroText = styled.p`
  color: ${lightTheme.colors.gray700};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const SkillsSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CategoryName = styled.h4`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${lightTheme.colors.accentBlue};
  margin: 0;
  margin-bottom: 4px;
`;

const SkillText = styled.p`
  font-size: 0.9375rem;
  color: ${lightTheme.colors.gray700};
  margin: 0;
  line-height: 1.6;
  font-weight: 400;
`;

const EducationSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const EducationCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:nth-child(2) {
    padding-top: 24px;
    border-top: 1px solid ${lightTheme.colors.gray200};
  }
`;

const CategoryTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: ${lightTheme.colors.foreground};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid ${lightTheme.colors.gray200};
`;

const EducationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${lightTheme.colors.gray200};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: ${lightTheme.breakpoints.sm}) {
    gap: 6px;
    padding-bottom: 12px;
  }

  &:focus-visible {
    outline: 2px solid ${lightTheme.colors.accentBlue};
    outline-offset: 4px;
  }
`;

const EducationPeriod = styled.p`
  font-size: 0.875rem;
  color: ${lightTheme.colors.accentBlue};
  margin: 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 6px;
`;

const EducationTitle = styled.p`
  font-size: 1rem;
  color: ${lightTheme.colors.foreground};
  margin: 0;
  font-weight: 600;
  margin-bottom: 4px;
`;

const EducationOrganization = styled.p`
  font-size: 0.875rem;
  color: ${lightTheme.colors.gray600};
  margin: 0;
  font-weight: 400;
`;

// const EducationDescription = styled.p`
//   font-size: 0.875rem;
//   color: ${lightTheme.colors.gray700};
//   margin: 0;
//   line-height: 1.5;
// `;

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <AboutSection id="about">
      <AboutContainer ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <AboutTitle>{aboutCopy.title}</AboutTitle>

          <AboutGrid>
            <LeftColumn>
              <ProfileImageWrapper
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={getAnimationConfig(0.6, 0.2)}
              >
                <ProfileImage src={profileImage} alt="Kim Kwon Hee - Frontend Developer" />
              </ProfileImageWrapper>

              <SkillsSection
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={getAnimationConfig(0.6, 0.3)}
              >
                <SectionLabel>보유 스킬</SectionLabel>
                {skillsData.map((skillGroup) => (
                  <SkillCategory key={skillGroup.category}>
                    <CategoryName>{skillGroup.category}</CategoryName>
                    <SkillText>{skillGroup.items.join(", ")}</SkillText>
                  </SkillCategory>
                ))}
              </SkillsSection>
            </LeftColumn>

            <RightColumn>
              <IntroSection
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={getAnimationConfig(0.6, 0.2)}
              >
                <NameAccent />
                <SectionLabel>간단한 소개</SectionLabel>
                <IntroText>{aboutCopy.intro}</IntroText>
              </IntroSection>

              <EducationSection
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={getAnimationConfig(0.6, 0.4)}
              >
                <EducationCategory>
                  <CategoryTitle>학력</CategoryTitle>
                  {aboutCopy.education.formal.map((edu, index) => (
                    <EducationItem key={index}>
                      <EducationPeriod>{edu.period}</EducationPeriod>
                      <EducationTitle>{edu.title}</EducationTitle>
                    </EducationItem>
                  ))}
                </EducationCategory>

                <EducationCategory>
                  <CategoryTitle>자격증</CategoryTitle>
                  {aboutCopy.education.certification.map((cert, index) => (
                    <EducationItem key={index}>
                      <EducationPeriod>{cert.period}</EducationPeriod>
                      <EducationTitle>{cert.title}</EducationTitle>
                      <EducationOrganization>주관: {cert.organization}</EducationOrganization>
                    </EducationItem>
                  ))}
                </EducationCategory>
              </EducationSection>
            </RightColumn>
          </AboutGrid>
        </motion.div>
      </AboutContainer>
    </AboutSection>
  );
}
