import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  Button,
} from "@/shared/ui";
import { ExternalLink, Github } from "lucide-react";
import { projectsData } from "@/shared/data";
import { lightTheme } from "@/styles/emotion-theme";

const ProjectsSection = styled.section`
  padding-top: 96px;
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${lightTheme.colors.gray50};
`;

const ProjectsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
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
  gap: 32px;

  @media (min-width: ${lightTheme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${lightTheme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  height: 100%;
`;

const ProjectImagePlaceholder = styled.div<{ gradient: string }>`
  height: 192px;
  background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TechBadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ActionLinksContainer = styled.div`
  display: flex;
  gap: 8px;

  a {
    flex: 1;
    text-decoration: none;

    button {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
    }
  }
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
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card style={{ height: "100%", cursor: "pointer", overflow: "hidden" }}>
                <ProjectImagePlaceholder gradient={project.gradient} />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <TechBadgesContainer>
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </TechBadgesContainer>
                  <ActionLinksContainer>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="outline">
                          <Github />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm">
                          <ExternalLink />
                          Demo
                        </Button>
                      </a>
                    )}
                  </ActionLinksContainer>
                </CardContent>
              </Card>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
}
