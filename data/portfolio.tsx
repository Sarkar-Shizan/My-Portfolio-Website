import { awards } from "@/data/awards";
import { certifications } from "@/data/certifications";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";

export const portfolio = {
  brand: "Sarkar's",
  name: "Md. Shizan Sarkar",
  role: "Full-Stack Developer & Undergraduate AI Researcher",
  subtitle: "Computer Science & Engineering Student",
  email: "shizansarkarsd@gmail.com",
  resumePath: "/resume.pdf",
  CVPath: "/CV_image.pdf",
  location: "Dhaka, Bangladesh",

intro:
  "Full-Stack Developer and Undergraduate AI Researcher with experience in Next.js, NestJS, TypeScript, and technical research writing. I build scalable, secure, and user-focused web applications while exploring practical applications of artificial intelligence, deep learning, computer vision, and IoT.",

about:
  "I am a Computer Science and Engineering final year student at American International University-Bangladesh (AIUB), a full-stack developer, and an undergraduate researcher with a strong interest in artificial intelligence and emerging technologies. I focus on developing modern, scalable, and reliable digital solutions by combining effective frontend design with secure backend architecture. My research interests include machine learning, deep learning, computer vision, explainable AI, and intelligent systems. I am also interested in Software Quality Assurance and the Internet of Things. Through academic research, hands-on development, and continuous experimentation, I aim to strengthen my technical expertise, contribute to meaningful projects, and create technology-driven solutions for real-world challenges.",
  heroTags: [
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "Deep Learning",
    "Computer Vision",
    "IoT",
  ],

  stats: [
    {
      value: projects.length.toString(),
      label: "Total Projects",
      description: "Innovative web solutions crafted",
    },
    {
      value: certifications.length.toString(),
      label: "Certificates",
      description: "Professional skills validated",
    },
    {
      value: awards.length.toString(),
      label: "Awards & Honors",
      description: "Academic achievements recognized",
    },
    {
      value: publications.length.toString(),
      label: "Publications",
      description: "Research papers and conference presentations",
    },
  ],

  socials: {
    github: "https://github.com/Sarkar-Shizan",
    linkedin: "https://www.linkedin.com/in/md-shizan-sarkar",
    facebook: "https://www.facebook.com/sarkar.shizan",
  },
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Awards", href: "/awards" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];
