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

  intro: "Full-Stack Web Developer specializing in Next.js, NestJS, .NET, and TypeScript | Building Scalable, Secure, and User-Focused Web Applications, REST APIs, and SQL-Driven Solutions | AI & IoT Enthusiast",

  about:"I am a Computer Science and Engineering student at American International University-Bangladesh (AIUB), passionate about building modern, scalable, and user-focused digital solutions. With a strong interest in both frontend and backend development, I enjoy transforming ideas into meaningful products that combine clean design, reliable functionality, and an engaging user experience.                                    Beyond full-stack development, I am also interested in Software Quality Assurance (SQA), Artificial Intelligence, and the Internet of Things (IoT). I am a curious learner, collaborative team player, and dedicated problem solver who embraces new challenges and continuously strives to improve my technical and creative abilities.",


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
