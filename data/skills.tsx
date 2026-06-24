import {
  Code2,
  Server,
  Database,
  Wrench,
  BrainCircuit,
  Palette,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  description?: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: Code2,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    items: [
      "Node.js",
      "NestJS",
      ".NET Core Web API",
      "REST APIs",
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: [
      "PostgreSQL",
      "MS SQL",
      "MySQL",
      "Oracle",
    ],
  },
  {
    title: "Programming & Emerging Tech",
    icon: BrainCircuit,
    items: [
      "C++",
      "AI",
      "IoT",
    ],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Postman",
      "Code::Blocks",
    ],
  },
  {
    title: "Design & Productivity Tools",
    icon: Palette,
    items: [
      "Figma",
      "Canva",
      "Napkin",
      "MS Word",
      "PowerPoint",
    ],
  },
];