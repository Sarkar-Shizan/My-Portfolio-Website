export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  year: string;
  category: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "nebula-analytics",
    title: "Nebula Analytics",
    description: "Realtime dashboard for product analytics with custom charting and alerts.",
    longDescription:
      "Nebula Analytics is a modern dashboard built for teams that need fast insights. It includes KPI cards, responsive charts, alerts, and a clean interface for monitoring product performance.",
    tags: ["React", "D3", "Supabase"],
    year: "2025",
    category: "Dashboard",
    image: "/images/projects/project-1.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "cobalt-commerce",
    title: "Cobalt Commerce",
    description: "Headless storefront with edge-rendered product pages and instant checkout.",
    longDescription:
      "Cobalt Commerce is a fast e-commerce frontend focused on product discovery, smooth browsing, and frictionless checkout. It uses modern rendering patterns for performance.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    year: "2025",
    category: "E-commerce",
    image: "/images/projects/project-2.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "lumen-docs",
    title: "Lumen Docs",
    description: "Documentation engine with MDX, search and live code playgrounds.",
    longDescription:
      "Lumen Docs helps developers publish clean documentation with MDX content, fast search, code previews, and responsive layouts for technical products.",
    tags: ["MDX", "TypeScript", "Vite"],
    year: "2024",
    category: "Documentation",
    image: "/images/projects/project-1.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "pulse-chat",
    title: "Pulse Chat",
    description: "Realtime team chat with threads, presence and file sharing.",
    longDescription:
      "Pulse Chat is a communication app concept with realtime messaging, threaded conversations, online presence, and file sharing for small teams.",
    tags: ["React", "Socket", "Node"],
    year: "2024",
    category: "Realtime App",
    image: "/images/projects/project-2.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "orbit-tasks",
    title: "Orbit Tasks",
    description: "Minimal project tracking app with clean mobile-first workflow.",
    longDescription:
      "Orbit Tasks is a simple productivity app designed around clarity. It supports project boards, task status, priorities, and a focused mobile-first workflow.",
    tags: ["Next.js", "Prisma", "Auth"],
    year: "2024",
    category: "Productivity",
    image: "/images/projects/project-1.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "aurora-portfolio",
    title: "Aurora Portfolio",
    description: "Animated personal site template with smooth motion and CSS variables.",
    longDescription:
      "Aurora Portfolio is a polished personal website template with dark theme, card layouts, animated sections, and reusable components for easy customization.",
    tags: ["React", "Motion", "CSS"],
    year: "2023",
    category: "Portfolio",
    image: "/images/projects/project-2.png",
    liveUrl: "#",
    githubUrl: "#",
  },
];
