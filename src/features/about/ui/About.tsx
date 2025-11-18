import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import styled from "@emotion/styled";
import { aboutCopy } from "@/shared/data";
import { lightTheme } from "@/styles/emotion-theme";

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
  max-width: 56rem;
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
  align-items: center;

  @media (min-width: ${lightTheme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImagePlaceholder = styled.div`
  aspect-ratio: 1;
  background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
  border-radius: 1rem;
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ParagraphText = styled.p`
  color: ${lightTheme.colors.gray700};
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ImagePlaceholder />
            </motion.div>

            <TextContent
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {aboutCopy.paragraphs.map((paragraph, index) => (
                <ParagraphText key={index}>
                  {paragraph}
                </ParagraphText>
              ))}
            </TextContent>
          </AboutGrid>
        </motion.div>
      </AboutContainer>
    </AboutSection>
  );
}
