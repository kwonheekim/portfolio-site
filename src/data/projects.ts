export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "React와 TypeScript로 구축한 반응형 이커머스 플랫폼",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    gradient: "from-blue-500 to-cyan-500",
    // githubUrl: "https://github.com/...",
    // demoUrl: "https://...",
  },
  {
    title: "Task Management App",
    description: "실시간 협업을 위한 태스크 관리 애플리케이션",
    tech: ["Next.js", "React Query", "Zustand"],
    gradient: "from-purple-500 to-pink-500",
    // githubUrl: "https://github.com/...",
    // demoUrl: "https://...",
  },
  {
    title: "Portfolio Website",
    description: "인터랙티브한 애니메이션을 적용한 포트폴리오 사이트",
    tech: ["React", "Motion", "Tailwind CSS"],
    gradient: "from-orange-500 to-red-500",
    // githubUrl: "https://github.com/...",
    // demoUrl: "https://...",
  },
];
