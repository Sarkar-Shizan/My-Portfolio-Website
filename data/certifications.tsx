import type { LucideIcon } from "lucide-react";
import { Award, Briefcase, Code2, Cpu, GraduationCap, Layers } from "lucide-react";

export type Certification = {
  title: string;
  provider: string;
  year: string;
  icon: LucideIcon;
};

export const certifications: Certification[] = [
  {
    title: "Meta Frontend Developer",
    provider: "Coursera",
    year: "2025",
    icon: GraduationCap,
  },
  {
    title: "AWS Cloud Practitioner",
    provider: "Amazon",
    year: "2024",
    icon: Award,
  },
  {
    title: "Google UX Design",
    provider: "Google",
    year: "2024",
    icon: Briefcase,
  },
  {
    title: "TypeScript Deep Dive",
    provider: "Frontend Masters",
    year: "2024",
    icon: Code2,
  },
  {
    title: "React Advanced Patterns",
    provider: "Epic React",
    year: "2023",
    icon: Layers,
  },
  {
    title: "Network Engineering",
    provider: "Cisco",
    year: "2023",
    icon: Cpu,
  },
];
