/**
 * 주어진 ID를 가진 요소로 부드럽게 스크롤합니다.
 * @param sectionId - 스크롤할 대상 요소의 ID
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

/**
 * 스크롤 이벤트를 throttle합니다.
 * @param callback - 실행할 콜백 함수
 * @param delayMs - throttle 딜레이 (밀리초)
 * @returns cleanup 함수
 */
export const createThrottledScrollListener = (
  callback: () => void,
  delayMs: number = 100
): (() => void) => {
  let timeoutId: NodeJS.Timeout | null = null;

  const handleScroll = () => {
    if (timeoutId) return;

    callback();
    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, delayMs);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
};
