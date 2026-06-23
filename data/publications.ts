export type Publication = {
  title: string;
  publisher: string;
  year: string;
  description: string;
  url: string;
};

export const publications: Publication[] = [
  {
    title: "Designing Resilient Frontends at Scale",
    publisher: "Medium",
    year: "2025",
    description: "Patterns for building React apps that gracefully degrade.",
    url: "#",
  },
  {
    title: "Edge Rendering with TanStack Start",
    publisher: "Dev.to",
    year: "2024",
    description: "A deep dive into SSR and server functions on the edge.",
    url: "#",
  },
  {
    title: "Accessible Motion in the Browser",
    publisher: "Smashing Mag",
    year: "2024",
    description: "Using prefers-reduced-motion to ship inclusive animation.",
    url: "#",
  },
];
