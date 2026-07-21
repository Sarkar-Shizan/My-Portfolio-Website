export type AwardItem = {
  id: string;
  title: string;
  meta: string;
  description: string;
  image: string;
  awardUrl?: string;
};

export const awards: AwardItem[] = [

  // New awards can be added here in the future
  {
    id: "deans-list-fall-2025-2026",
    title: "Dean’s List Honors",
    meta: "Fall 2025–2026 · GPA 3.95",
    description:
      "Awarded by the Faculty of Science and Technology at American International University-Bangladesh for outstanding academic performance.",
    image: "#",
    awardUrl: "#"
  },
  {
    id: "deans-list-spring-2024-2025",
    title: "Dean’s List Honors",
    meta: "Spring 2024–2025 · GPA 4.00",
    description:
      "Awarded by the Faculty of Science and Technology at American International University-Bangladesh for outstanding academic performance.",
    image: "#",
    awardUrl: "#",
  },

  {
    id: "deans-list-fall-2024-2025",
    title: "Dean’s List Honors",
    meta: "Fall 2024–2025 · GPA 3.91",
    description:
      "Awarded by the Faculty of Science and Technology at American International University-Bangladesh for outstanding academic performance.",
    image: "/images/awards/deans-list-fall-2024-2025.jpg",
    awardUrl: "/images/awards/deans-list-fall-2024-2025.jpg",
  },
  {
    id: "deans-list-spring-2023-2024",
    title: "Dean’s List Honors",
    meta: "Spring 2023–2024 · GPA 3.90",
    description:
      "Awarded by the Faculty of Science and Technology at American International University-Bangladesh for outstanding academic performance.",
    image: "/images/awards/deans-list-spring-2023-2024.jpg",
    awardUrl: "/images/awards/deans-list-spring-2023-2024.jpg",
  }
  
];

