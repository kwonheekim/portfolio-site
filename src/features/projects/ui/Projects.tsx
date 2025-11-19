import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import styled from "@emotion/styled";
import { AlertCircle, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, Badge } from "@/shared/ui";
import { projectsData } from "@/shared/data";
import { lightTheme } from "@/styles/emotion-theme";
import { getAnimationConfig, animationDurations } from "@/shared/utils/animation";

const ProjectsSection = styled.section`
  padding-top: 96px;
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #f5f5f7;
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

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const ProjectItemWrapper = styled(motion.div)`
  display: flex;
  gap: 0;
  position: relative;
`;

const TimelineMarker = styled.div`
  width: 200px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 8px;
  flex-shrink: 0;

  @media (max-width: ${lightTheme.breakpoints.md}) {
    width: 100px;
    padding-right: 20px;
  }

  @media (max-width: ${lightTheme.breakpoints.sm}) {
    width: auto;
    padding-right: 12px;
    padding-bottom: 8px;
  }
`;

const PeriodLabel = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${lightTheme.colors.accentBlue};
  white-space: nowrap;

  @media (max-width: ${lightTheme.breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;

const TimelineConnector = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #e5e7eb;
  padding-left: 0;
`;

const ProjectItem = styled.div`
  padding: 32px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  transition: all 0.3s ease;
  margin-bottom: 0;
  border-left: 4px solid ${lightTheme.colors.accentBlue};

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: ${lightTheme.breakpoints.md}) {
    padding: 24px;
  }

  @media (max-width: ${lightTheme.breakpoints.sm}) {
    padding: 20px;
    border-left: 3px solid ${lightTheme.colors.accentBlue};
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3125rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: ${lightTheme.colors.foreground};
  line-height: 1.4;

  @media (max-width: ${lightTheme.breakpoints.md}) {
    font-size: 1.125rem;
  }
`;

const ProjectRole = styled.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0;
  font-weight: 500;
  line-height: 1.5;
`;

const ProjectContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProjectSection = styled.div<{ type: "background" | "solution" | "results" }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SectionLabel = styled.h4`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${lightTheme.colors.foreground};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: ${lightTheme.colors.accentBlue};
  }
`;

const SectionContent = styled.div`
  font-size: 0.9375rem;
  color: ${lightTheme.colors.foreground};
  line-height: 1.6;

  p {
    margin: 0 0 6px 0;

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
  gap: 6px;
`;

const KeyPoint = styled.li`
  font-size: 0.9375rem;
  color: ${lightTheme.colors.foreground};
  padding-left: 20px;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${lightTheme.colors.accentBlue};
    font-weight: bold;
  }
`;

const MetricsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const MetricItem = styled.li`
  font-size: 0.9375rem;
  color: ${lightTheme.colors.foreground};
  padding-left: 20px;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: ${lightTheme.colors.accentBlue};
    font-weight: bold;
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 12px;
  margin-top: 4px;
  border-top: 1px solid #e5e7eb;
`;

const TechBadge = styled(Badge)`
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  color: #374151;
  font-weight: 500;
  font-size: 0.8125rem;
  padding: 4px 10px;
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

        <ProjectsList>
          {projectsData.map((project, index) => (
            <ProjectItemWrapper
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={getAnimationConfig(0.5, index * animationDurations.quick)}
            >
              <TimelineMarker>
                <PeriodLabel>{project.period}</PeriodLabel>
              </TimelineMarker>
              <TimelineConnector>
                <ProjectItem>
                  <ProjectHeader>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectRole>{project.role}</ProjectRole>
                  </ProjectHeader>

                  <ProjectContentWrapper>
                    {/* Background Section */}
                    <ProjectSection type="background">
                      <SectionLabel>
                        <AlertCircle size={18} />
                        Background
                      </SectionLabel>
                      <SectionContent>
                        <p>{project.background.issue}</p>
                        {project.background.challenge && <p>{project.background.challenge}</p>}
                      </SectionContent>
                    </ProjectSection>

                    {/* Solution Section */}
                    <ProjectSection type="solution">
                      <SectionLabel>
                        <CheckCircle size={18} />
                        Solution
                      </SectionLabel>
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
                      <SectionLabel>
                        <Star size={18} />
                        Results
                      </SectionLabel>
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
                  </ProjectContentWrapper>
                </ProjectItem>
              </TimelineConnector>
            </ProjectItemWrapper>
          ))}
        </ProjectsList>
      </ProjectsContainer>
    </ProjectsSection>
  );
}
