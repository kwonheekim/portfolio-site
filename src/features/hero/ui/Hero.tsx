import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import styled from "@emotion/styled";
import { Button } from "@/shared/ui";
import { scrollToSection } from "@/shared/utils";
import { heroCopy } from "@/shared/data";
import { lightTheme } from "@/styles/emotion-theme";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 24px;
  padding-right: 24px;
`;

const HeroContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 100%;
  max-width: 1280px;
`;

const HeroTitle = styled(motion.h1)`
  margin-bottom: 16px;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${lightTheme.colors.foreground};

  @media (min-width: ${lightTheme.breakpoints.md}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${lightTheme.breakpoints.lg}) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  color: ${lightTheme.colors.gray600};
  margin-bottom: 32px;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1rem;
  line-height: 1.5;
`;

const HeroButtonGroup = styled(motion.div)`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${lightTheme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
    }
  }
`;

const AnimatedArrow = styled(motion.span)`
  display: inline-block;
  margin-left: 8px;
`;

const HeroArrowContainer = styled(motion.div)`
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
`;

export function Hero() {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroCopy.title}
          </HeroTitle>

          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {heroCopy.subtitle}
          </HeroSubtitle>

          <HeroButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              {heroCopy.cta1}
              <AnimatedArrow
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </AnimatedArrow>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              {heroCopy.cta2}
            </Button>
          </HeroButtonGroup>
        </motion.div>

        <HeroArrowContainer
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown
            style={{
              width: "24px",
              height: "24px",
              color: lightTheme.colors.gray400,
            }}
          />
        </HeroArrowContainer>
      </HeroContainer>
    </HeroSection>
  );
}
