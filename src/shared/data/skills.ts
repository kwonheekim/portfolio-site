export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "TypeScript", "React Native"],
  },
  {
    category: "State Management",
    items: ["Recoil", "React Query"],
  },
  {
    category: "Styling",
    items: ["Styled-components", "Emotion"],
  },
  {
    category: "Tools",
    items: ["Notion", "Slack", "GitHub", "VSC", "Figma", "Zeplin", "Adobe XD"],
  },
];
