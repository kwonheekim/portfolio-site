import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import styled from "@emotion/styled";
import { Card, CardContent, CardHeader, CardTitle, Badge } from "@/shared/ui";
import { projectsData } from "@/shared/data";
import { lightTheme } from "@/styles/emotion-theme";
import { getAnimationConfig, animationDurations } from "@/shared/utils/animation";

const ProjectsSection = styled.section`
  padding-top: 96px;
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #f0f0f2;
`;

const ProjectsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  width: 100%;
`;

const ProjectsTitle = styled(motion.h2)`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: ${lightTheme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${lightTheme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border: 1px solid ${lightTheme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    transform: translateY(-4px);
  }
`;

const CardHeaderStyled = styled(CardHeader)`
  padding: 24px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border-radius: 12px 12px 0 0;
  transition: all 0.3s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const CardTitleStyled = styled(CardTitle)`
  color: white;
  font-size: 1.125rem;
  margin-bottom: 8px;
  line-height: 1.4;
`;

const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.875rem;
`;

const CardRole = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
`;

const CardPeriod = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8125rem;
`;

const CardContentStyled = styled(CardContent)`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  overflow-y: auto;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${lightTheme.colors.border};
    border-radius: 3px;

    &:hover {
      background: ${lightTheme.colors.mutedForeground};
    }
  }
`;

const ProjectSection = styled.div<{ type: "background" | "solution" | "results" }>`
  padding: 12px 0 12px 12px;
  border-left: 3px solid
    ${(props) => {
      switch (props.type) {
        case "background":
          return "#ef4444"; // red-500
        case "solution":
          return "#10b981"; // green-500
        case "results":
          return "#3b82f6"; // blue-500
        default:
          return lightTheme.colors.border;
      }
    }};
  background-color: ${(props) => {
    switch (props.type) {
      case "background":
        return "rgba(239, 68, 68, 0.05)";
      case "solution":
        return "rgba(16, 185, 129, 0.05)";
      case "results":
        return "rgba(59, 130, 246, 0.05)";
      default:
        return "transparent";
    }
  }};

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;

const SectionLabel = styled.h4`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${lightTheme.colors.foreground};
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 6px;

  &:before {
    content: "${(props: any) => props.icon}";
    font-size: 0.875rem;
  }
`;

const SectionContent = styled.div`
  font-size: 0.9rem;
  color: ${lightTheme.colors.foreground};
  line-height: 1.5;

  p {
    margin: 0 0 8px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const KeyPoints = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const KeyPoint = styled.li`
  font-size: 0.875rem;
  color: ${lightTheme.colors.foreground};
  padding-left: 16px;
  position: relative;
  line-height: 1.5;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #10b981;
    font-weight: bold;
  }
`;

const MetricsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MetricItem = styled.li`
  font-size: 0.875rem;
  color: ${lightTheme.colors.foreground};
  padding-left: 16px;
  position: relative;
  line-height: 1.5;

  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #10b981;
    font-weight: bold;
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%);
  border-radius: 8px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  margin-top: auto;
`;

const TechBadge = styled(Badge)`
  background: white;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-weight: 500;
  font-size: 0.8rem;
`;

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer ref={ref}>
        <ProjectsTitle
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </ProjectsTitle>

        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
              transition={getAnimationConfig(0.5, index * animationDurations.quick)}
            >
              <StyledCard>
                <CardHeaderStyled>
                  <CardTitleStyled>{project.title}</CardTitleStyled>
                  <CardMeta>
                    <CardRole>{project.role}</CardRole>
                    <CardPeriod>{project.period}</CardPeriod>
                  </CardMeta>
                </CardHeaderStyled>

                <CardContentStyled>
                  {/* Background Section */}
                  <ProjectSection type="background">
                    <SectionLabel icon="⚠️">Background / Issue</SectionLabel>
                    <SectionContent>
                      <p>{project.background.issue}</p>
                      {project.background.challenge && <p>{project.background.challenge}</p>}
                    </SectionContent>
                  </ProjectSection>

                  {/* Solution Section */}
                  <ProjectSection type="solution">
                    <SectionLabel icon="✓">Solution / Approach</SectionLabel>
                    <SectionContent>
                      <p>{project.solution.approach}</p>
                      {project.solution.keyPoints && project.solution.keyPoints.length > 0 && (
                        <KeyPoints>
                          {project.solution.keyPoints.map((point, idx) => (
                            <KeyPoint key={idx}>{point}</KeyPoint>
                          ))}
                        </KeyPoints>
                      )}
                    </SectionContent>
                  </ProjectSection>

                  {/* Results Section */}
                  <ProjectSection type="results">
                    <SectionLabel icon="⭐">Results / Impact</SectionLabel>
                    <SectionContent>
                      {project.results.metrics && project.results.metrics.length > 0 && (
                        <MetricsList>
                          {project.results.metrics.map((metric, idx) => (
                            <MetricItem key={idx}>{metric}</MetricItem>
                          ))}
                        </MetricsList>
                      )}
                      <p style={{ marginTop: "8px" }}>{project.results.impact}</p>
                    </SectionContent>
                  </ProjectSection>

                  {/* Tech Stack */}
                  <TechStackContainer>
                    {project.tech.map((tech) => (
                      <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                  </TechStackContainer>
                </CardContentStyled>
              </StyledCard>
            </motion.div>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
}
