import { motion } from "motion/react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { scrollToSection, createThrottledScrollListener } from "@/shared/utils";
import { lightTheme } from "@/styles/emotion-theme";

const StyledHeader = styled(motion.header)<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.scrolled ? "rgba(255, 255, 255, 0.8)" : "transparent"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(12px)" : "none")};
  box-shadow: ${(props) =>
    props.scrolled ? "0 1px 3px 0 rgba(0, 0, 0, 0.1)" : "none"};
`;

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  max-width: 1280px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled(motion.div)`
  cursor: pointer;
  font-weight: 600;
  font-size: 1.125rem;
  color: ${lightTheme.colors.foreground};
`;

const NavItems = styled.div`
  display: flex;
  gap: 32px;
`;

const NavButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  color: ${lightTheme.colors.gray700};
  font-size: 1rem;
  font-weight: 400;
  padding: 8px;
  border-radius: 4px;
  transition: color 0.3s ease;

  &:hover {
    color: ${lightTheme.colors.gray900};
  }

  &:focus-visible {
    outline: none;
    ring: 2px;
    ring-color: ${lightTheme.colors.gray400};
    ring-offset: 2px;
    border-radius: 4px;
  }
`;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const cleanup = createThrottledScrollListener(() => {
      setScrolled(window.scrollY > 50);
    }, 100);

    return cleanup;
  }, []);

  return (
    <StyledHeader
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderNav>
        <HeaderContainer>
          <LogoWrapper
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("hero")}
          >
            Portfolio
          </LogoWrapper>

          <NavItems>
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <NavButton
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </NavButton>
            ))}
          </NavItems>
        </HeaderContainer>
      </HeaderNav>
    </StyledHeader>
  );
}
