import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import styled from "@emotion/styled";
import { aboutCopy, skillsData } from "@/shared/data";
import { lightTheme } from "@/styles/emotion-theme";
import profileImage from "@/assets/images/profile_img.png";

const AboutSection = styled.section`
  padding-top: 96px;
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${lightTheme.colors.gray50};
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
  gap: 32px;
`;

const ProfileImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.img`
  aspect-ratio: 1;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

const IntroSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionLabel = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${lightTheme.colors.primary};
  margin: 0;
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
  gap: 8px;
`;

const CategoryName = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${lightTheme.colors.foreground};
  margin: 0;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background-color: ${lightTheme.colors.primary}20;
  color: ${lightTheme.colors.primary};
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const EducationSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const EducationCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CategoryTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${lightTheme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
`;

const EducationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${lightTheme.colors.gray200};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const EducationPeriod = styled.p`
  font-size: 0.75rem;
  color: ${lightTheme.colors.gray600};
  margin: 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const EducationTitle = styled.p`
  font-size: 0.95rem;
  color: ${lightTheme.colors.foreground};
  margin: 0;
  font-weight: 500;
`;

const EducationOrganization = styled.p`
  font-size: 0.85rem;
  color: ${lightTheme.colors.gray600};
  margin: 0;
`;

const EducationDescription = styled.p`
  font-size: 0.85rem;
  color: ${lightTheme.colors.gray700};
  margin: 0;
  line-height: 1.4;
`;

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
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ProfileImage src={profileImage} alt="프로필 이미지" />
              </ProfileImageWrapper>

              <SkillsSection
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <SectionLabel>보유 스킬</SectionLabel>
                {skillsData.map((skillGroup) => (
                  <SkillCategory key={skillGroup.category}>
                    <CategoryName>{skillGroup.category}</CategoryName>
                    <SkillTags>
                      {skillGroup.items.map((skill) => (
                        <SkillTag key={skill}>{skill}</SkillTag>
                      ))}
                    </SkillTags>
                  </SkillCategory>
                ))}
              </SkillsSection>
            </LeftColumn>

            <RightColumn>
              <IntroSection
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <SectionLabel>소개</SectionLabel>
                <IntroText>{aboutCopy.intro}</IntroText>
              </IntroSection>

              <EducationSection
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.4 }}
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
                  <CategoryTitle>자격증 및 교육</CategoryTitle>
                  {aboutCopy.education.certification.map((cert, index) => (
                    <EducationItem key={index}>
                      <EducationPeriod>{cert.period}</EducationPeriod>
                      <EducationTitle>{cert.title}</EducationTitle>
                      <EducationOrganization>주관: {cert.organization}</EducationOrganization>
                      <EducationDescription>{cert.description}</EducationDescription>
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
