import { awards } from "@/data/awards";
import { certifications } from "@/data/certifications";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";

export const portfolio = {
  brand: "Sarkar's",
  name: "Md. Shizan Sarkar",
  role: "Full Stack Web Developer",
  subtitle: "Computer Science & Engineering Student",
  email: "shizansarkarsd@gmail.com",
  resumePath: "/resume.pdf",
  location: "Dhaka, Bangladesh",

  intro:
    "Full-Stack Web Developer | HTML • CSS • JavaScript • TypeScript • Next.js • NestJS • .NET | REST APIs • SQL • Git/GitHub | Building Scalable Web Applications | AI & IoT Enthusiast",

  about:
    "A Computer Science & Engineering student at American International University-Bangladesh (AIUB), passionate about frontend and backend development. I focus on building digital products that are not only beautiful but meaningful—turning ideas into experiences people love to use. I am also interested in Software Quality Assurance (SQA), AI, and IoT. I am a quick learner, team player, and problem solver who is always eager to take on new challenges.",

  heroTags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],

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
