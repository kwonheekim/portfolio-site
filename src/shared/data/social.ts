import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "./site";

export interface SocialLink {
  icon: typeof Mail;
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${siteConfig.links.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    href: siteConfig.links.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: siteConfig.links.twitter,
  },
];
