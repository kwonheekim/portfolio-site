import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import styled from "@emotion/styled";
import { Button } from "@/shared/ui";
import { socialLinks } from "@/shared/data";
import { contactCopy } from "@/shared/data";
import { lightTheme } from "@/styles/emotion-theme";

const ContactSection = styled.section`
  padding-top: 96px;
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #ffffff;
`;

const ContactContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 56rem;
  text-align: center;
  width: 100%;
`;

const ContactTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${lightTheme.colors.foreground};

  @media (min-width: ${lightTheme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const ContactSubtitle = styled.p`
  color: ${lightTheme.colors.gray600};
  margin-bottom: 48px;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1rem;
  line-height: 1.5;
`;

const SocialLinksContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
`;

const SocialLinkWrapper = styled(motion.a)`
  text-decoration: none;
  display: inline-block;

  button {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }
`;

const CopyrightContainer = styled(motion.div)`
  color: ${lightTheme.colors.gray500};

  p {
    margin: 0;
    padding: 0;
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <ContactSection id="contact">
      <ContactContainer ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <ContactTitle>{contactCopy.title}</ContactTitle>
          <ContactSubtitle>
            {contactCopy.subtitle}
          </ContactSubtitle>

          <SocialLinksContainer
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <SocialLinkWrapper
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline">
                  <social.icon />
                  {social.label}
                </Button>
              </SocialLinkWrapper>
            ))}
          </SocialLinksContainer>

          <CopyrightContainer
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p>{contactCopy.copyright}</p>
          </CopyrightContainer>
        </motion.div>
      </ContactContainer>
    </ContactSection>
  );
}
