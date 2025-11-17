export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "State Management",
    items: ["Redux", "Zustand", "React Query"],
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "Webpack", "Vite"],
  },
  {
    category: "Others",
    items: ["REST API", "GraphQL", "Testing", "Responsive Design"],
  },
];
