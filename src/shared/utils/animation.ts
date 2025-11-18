/**
 * 애니메이션 유틸리티
 * prefers-reduced-motion 지원으로 접근성 개선
 */

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getAnimationConfig = (
  duration: number = 0.6,
  delay: number = 0,
  easing: 'easeIn' | 'easeOut' | 'easeInOut' = 'easeOut'
) => {
  const isReduced = prefersReducedMotion();
  return {
    duration: isReduced ? 0 : duration,
    delay: isReduced ? 0 : delay,
    ease: easing,
  };
};

export const animationDurations = {
  quick: 0.3,
  base: 0.6,
  slow: 1.0,
  slower: 1.5,
};

export const animationEasing = {
  in: 'easeIn',
  out: 'easeOut',
  inOut: 'easeInOut',
  cubic: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

export const defaultAnimations = {
  sectionFadeIn: {
    duration: animationDurations.base,
    delay: 0,
    ease: animationEasing.out,
  },
  elementStagger: 0.1,
  cardHover: {
    duration: 0.3,
  },
};
