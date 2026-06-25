import type { LucideIcon } from "lucide-react";
import { Award, Code2, Cpu, Video } from "lucide-react";

export type Certification = {
  title: string;
  provider: string;
  year: string;
  image: string;
  certificateUrl?: string;
  icon: LucideIcon;
};

export const certifications: Certification[] = [
  {
    title: "Certificate of Presentation – PECCII 2026",
    provider: "Pabna University of Science and Technology",
    year: "2026",
    image: "/images/certificates/peccii-2026.jpg",
    certificateUrl: "/images/certificates/peccii-2026.jpg",
    icon: Award,
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    provider: "Udemy · Dr. Angela Yu",
    year: "2026",
    image: "/images/certificates/udemy-fullstack.png",
    certificateUrl: "/images/certificates/udemy-fullstack.png",
    icon: Code2,
  },
  {
    title:
      "Certificate of Participation – Short Video & Project Showcasing Contest",
    provider: "AIUB Course Solution (ACS)",
    year: "2025",
    image: "/images/certificates/acs-contest-2025.png",
    certificateUrl: "/images/certificates/acs-contest-2025.png",
    icon: Video,
  },
  {
    title: "IT Essentials: PC Hardware and Software",
    provider: "Cisco Networking Academy",
    year: "2023",
    image: "/images/certificates/cisco-it-essentials.png",
    certificateUrl: "/images/certificates/cisco-it-essentials.png",
    icon: Cpu,
  },
];

