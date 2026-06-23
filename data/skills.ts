import type { LucideIcon } from "lucide-react";
import { Code2, Cpu, Database, Layers } from "lucide-react";

export type Skill = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const skills: Skill[] = [
  {
    title: "Frontend",
    description: "Modern interfaces with clean component architecture.",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "UI / UX",
    description: "Beautiful, usable, and accessible product experiences.",
    icon: Layers,
    items: ["Figma", "Framer", "Motion", "Design Systems"],
  },
  {
    title: "Backend",
    description: "APIs, databases, authentication, and app logic.",
    icon: Database,
    items: ["Node.js", "PostgreSQL", "Supabase", "REST"],
  },
  {
    title: "Tools",
    description: "Development workflow and deployment tools.",
    icon: Cpu,
    items: ["Git", "Vite", "Docker", "CI / CD"],
  },
];
