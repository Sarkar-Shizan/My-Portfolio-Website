import {
  Code2,
  Server,
  Database,
  Cpu,
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
    description: "Building responsive, modern, and user-friendly web interfaces.",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Developing secure APIs, authentication systems, and backend logic.",
    items: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "TypeORM",
      "JWT Authentication",
      "bcrypt",
      ".NET",
      "PHP",
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    description: "Working with relational databases for scalable application data.",
    items: [
      "PostgreSQL",
      "SQL Server",
      "MS SQL",
      "Database Design",
      "Query Management",
    ],
  },
  {
    title: "Programming Languages",
    icon: BrainCircuit,
    description: "Core programming experience across academic and practical projects.",
    items: [
      "C++",
      "C#",
      "Java",
      "PHP",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    title: "IoT & Embedded Systems",
    icon: Cpu,
    description: "Building hardware-based smart systems using sensors and microcontrollers.",
    items: [
      "ESP32",
      "Arduino IDE",
      "IoT",
      "Sensor Integration",
      "GPS Module",
      "OLED Display",
      "Telegram Alerts",
    ],
  },
  {
    title: "Graphics & Simulation",
    icon: Palette,
    description: "Creating visual and simulation-based applications using graphics tools.",
    items: [
      "OpenGL",
      "GLUT",
      "2D Graphics",
      "Animation",
      "Simulation",
      "C++ Graphics",
    ],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    description: "Tools I use for coding, debugging, testing, and project management.",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Postman",
      "Code::Blocks",
    ],
  },
];