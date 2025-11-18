import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import styled from "@emotion/styled";
import { Button } from "@/shared/ui";
import { heroCopy, siteConfig } from "@/shared/data";
import { lightTheme } from "@/styles/emotion-theme";
import { getAnimationConfig, animationDurations } from "@/shared/utils/animation";

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

const HeroGreeting = styled(motion.p)`
  font-size: 1rem;
  font-weight: 500;
  color: ${lightTheme.colors.primary};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 12px;
  margin-top: 0;

  @media (max-width: ${lightTheme.breakpoints.sm}) {
    font-size: 0.875rem;
  }
`;

const HeroNameHighlight = styled.span`
  font-weight: 700;
  background: linear-gradient(135deg, ${lightTheme.colors.primary}, ${lightTheme.colors.gray700});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
      min-height: 48px;
    }
  }
`;

const PrimaryButton = styled(Button)`
  min-height: 48px;
  min-width: 48px;

  &:focus-visible {
    outline: 2px solid ${lightTheme.colors.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const SecondaryButton = styled(Button)`
  min-height: 48px;
  min-width: 48px;

  &:focus-visible {
    outline: 2px solid ${lightTheme.colors.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
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
          <HeroGreeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
          >
            Hi, I'm <HeroNameHighlight>Kim Kwon Hee</HeroNameHighlight>
          </HeroGreeting>

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
            transition={getAnimationConfig(0.8, 0.6)}
          >
            <PrimaryButton
              size="lg"
              variant="default"
              onClick={() => window.open(siteConfig.links.github, "_blank")}
              aria-label="View GitHub profile"
            >
              <Github size={20} />
              GitHub
            </PrimaryButton>
            <SecondaryButton
              size="lg"
              variant="outline"
              onClick={() => window.open(siteConfig.links.linkedin, "_blank")}
              aria-label="View LinkedIn profile"
            >
              <Linkedin size={20} />
              LinkedIn
            </SecondaryButton>
            <SecondaryButton
              size="lg"
              variant="outline"
              onClick={() => window.location.href = `mailto:${siteConfig.links.email}`}
              aria-label="Send email"
            >
              <Mail size={20} />
              Email
            </SecondaryButton>
          </HeroButtonGroup>
        </motion.div>

        <HeroArrowContainer
          animate={{ y: [0, 10, 0] }}
          transition={getAnimationConfig(2, 0, 'easeInOut')}
        >
          <ArrowDown
            style={{
              width: "24px",
              height: "24px",
              color: lightTheme.colors.gray400,
            }}
            aria-hidden="true"
          />
        </HeroArrowContainer>
      </HeroContainer>
    </HeroSection>
  );
}
