import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export interface SocialLink {
  icon: typeof Mail;
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:your.email@example.com", // 실제 이메일로 변경하세요
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/your-username", // 실제 GitHub URL로 변경하세요
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-profile", // 실제 LinkedIn URL로 변경하세요
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/your-handle", // 실제 Twitter URL로 변경하세요
  },
];
