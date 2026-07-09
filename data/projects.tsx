export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  year: string;
  category: string;
  image?: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
};
export const projects: Project[] = [
{
  id: "unigrade",
  slug: "unigrade",
  title: "UniGrade - CGPA Calculator",
  description:
    "A modern CGPA calculator for Bangladeshi universities, built with Next.js, TypeScript, React, and Tailwind CSS.",
  longDescription:
    "UniGrade is a responsive CGPA calculation platform designed for students of Bangladeshi universities. It supports university-specific grading systems, semester-wise course entry, previous CGPA and completed-credit records, marks and letter-grade input, automatic GPA and CGPA calculation, university search and division-based filtering, and downloadable PDF reports. The application is built with a modular Next.js App Router architecture, TypeScript, React, and Tailwind CSS.",
  tags: ["Next.js", "TypeScript","React","Tailwind CSS","CGPA Calculator", "PDF Export",
  ],
  year: "2026",
  category: "Web Application",
  githubUrl: "https://github.com/Sarkar-Shizan/UniGrade",
  liveUrl: "https://uni-grade-cgpa-calculator.vercel.app",
},
  {
  id: "findback",
  slug: "findback",
  title: "FindBack",
  description:
    "A modern lost-and-found web application built with Next.js, TypeScript and Tailwind CSS.",
  longDescription:
    "FindBack is a community-driven lost-and-found platform designed to help users report, browse, and recover lost belongings. It includes lost and found item reporting, image upload support, public item browsing, category-based filtering, authentication with Supabase, and a clean responsive interface built using the Next.js App Router.",
  tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
  year: "2026",
  category: "Web Application",
   image: "/images/projects/findback-4.png",
  images: [
    "/images/projects/findback-4.png",
    "/images/projects/findback-2.png",
    "/images/projects/findback-3.png",
  ],
  githubUrl: "https://github.com/Sarkar-Shizan/FindBack",
  liveUrl: "#",
},
  {
    id: "workconnect",
    slug: "workconnect",
    title: "WorkConnect",
    description:
      "A secure NestJS backend platform connecting users with verified service providers.",
    longDescription:
      "WorkConnect is a scalable backend system built with NestJS. It connects users with verified service providers and includes TypeORM-based database management, JWT authentication, encrypted passwords using bcrypt, and structured REST API development for a professional service platform.",
    tags: ["NestJS", "TypeScript", "TypeORM", "JWT", "bcrypt", "REST APIs"],
    year: "2026",
    category: "Full Stack Web Application",
    githubUrl:
      "https://github.com/Sarkar-Shizan/WorkConnect-All-in-One-Home-and-Professional-Service-Platform",
    liveUrl: "#",
  },
  {
    id: "homesphere",
    slug: "homesphere",
    title: "HomeSphere",
    description:
      "A smart home and interior service booking platform built with a 3-tier architecture.",
    longDescription:
      "HomeSphere is a web-based platform designed to connect customers with home and interior service providers. It supports service listing, booking, cancellation, and management through a secure and scalable 3-tier architecture.",
    tags: ["C#", ".NET", "SQL Server", "3-Tier Architecture", "Web App"],
    year: "2026",
    category: "Service Platform",
    githubUrl:
      "https://github.com/Sarkar-Shizan/HomeSphere-A-Smart-Interior-Home-Service-Booking-Platform",
    liveUrl: "#",
  },
  {
    id: "hnms",
    slug: "hnms",
    title: "HNMS Health Navigation Management System",
    description:
      "An all-in-one healthcare platform connecting patients, hospitals, pharmacies, and administrators.",
    longDescription:
      "HNMS is a healthcare management platform that connects patients, hospitals, pharmacies, and administrators. It supports healthcare services such as doctor appointments, diagnostic tracking, medicine-related workflows, and administrative management.",
    tags: ["HTML","CSS","JavaScript", "PHP", "Healthcare System", "XAMPP", "Database"],
    year: "2025",
    category: "Healthcare Platform",
    githubUrl:
      "https://github.com/Sarkar-Shizan/HNMS-Health-Navigation-Management-System",
    liveUrl: "#",
  },
  {
    id: "hazbin-project",
    slug: "hazbin-project",
    title: "HazBin Smart Waste Management",
    description:
      "An ESP32-based IoT smart waste management system with bin monitoring, gas detection, GPS tracking, OLED display, and Telegram alerts.",
    longDescription:
      "HazBin is an IoT-based smart waste management system developed using ESP32 and Arduino IDE. It monitors bin levels, detects hazardous gas, tracks GPS location, displays system information on an OLED screen, and sends Telegram alert notifications for real-time waste management support.",
    tags: ["C++", "ESP32", "Arduino IDE", "IoT", "GPS", "OLED", "Telegram Bot"],
    year: "2026",
    category: "IoT",
    githubUrl:
      "https://github.com/Sarkar-Shizan/HazBin-Project_Source-Code-For-ArduinoIDE",
    liveUrl: "#",
  },
  {
    id: "golden-harvest",
    slug: "golden-harvest",
    title: "Golden Harvest",
    description:
      "An interactive rural life simulation built with C++ OpenGL and GLUT.",
    longDescription:
      "Golden Harvest is a rural life simulation project created using C++, OpenGL, and GLUT. It presents animated 2D visuals such as clouds, birds, boats, trees, rice fields, farmers, houses, goats, and paddy bundles to represent village life in a visual simulation environment.",
    tags: ["C++", "OpenGL", "GLUT", "2D Graphics", "Animation", "Simulation"],
    year: "2026",
    category: "Graphics Simulation",
    githubUrl:
      "https://github.com/Sarkar-Shizan/GOLDEN-HARVEST-A-Rural-Life-Simulation",
    liveUrl: "#",
  },
  {
    id: "parking-system-arduino",
    slug: "parking-system-arduino",
    title: "Parking System Arduino Project",
    description:
      "An Arduino-based parking system project developed using C++.",
    longDescription:
      "Parking System Arduino Project is an embedded systems project focused on parking automation. It uses Arduino-based logic and C++ programming concepts to support smart parking management functionality.",
    tags: ["C++", "Arduino", "Embedded System", "IoT"],
    year: "2025",
    category: "Embedded System",
    githubUrl: "https://github.com/Sarkar-Shizan/Parking-System-Arduino-Project",
    liveUrl: "#",
  },
  {
    id: "aiub-lost-found",
    slug: "aiub-lost-found",
    title: "AIUB Lost & Found Management System",
    description:
      "A C# and SQL Server-based Lost and Found Management System for institutional use.",
    longDescription:
      "AIUB Lost & Found Management System is a C# and SQL Server-based system designed to streamline reporting, managing, and claiming lost or found items within an organization such as a university.",
    tags: ["C#", "SQL Server", ".NET", "Database", "Management System"],
    year: "2025",
    category: "Management System",
    githubUrl:
      "https://github.com/Sarkar-Shizan/AIUB-Lost-Found-Management-System-Project",
    liveUrl: "#",
  },
  {
    id: "lost-found-java",
    slug: "lost-found-java",
    title: "Lost & Found Management System",
    description:
      "A Lost and Found Management System developed using Java.",
    longDescription:
      "Lost & Found Management System is a Java-based application designed to manage lost and found item records. It helps users report, track, and manage lost or found belongings in an organized system.",
    tags: ["Java", "OOP", "Management System"],
    year: "2025",
    category: "Desktop / Academic Project",
    githubUrl: "https://github.com/Sarkar-Shizan/Lost-Found-Using-Java",
    liveUrl: "#",
  },
  {
    id: "my-portfolio-website",
    slug: "my-portfolio-website",
    title: "My Portfolio Website",
    description:
      "A modern personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    longDescription:
      "My Portfolio Website is a responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS. It features a modular architecture, modern dark UI, reusable components, project showcases, skills, certifications, awards, publications, and contact sections.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    year: "2026",
    category: "Portfolio",
    // githubUrl: "https://github.com/Sarkar-Shizan/My-Portfolio-Website",
    liveUrl: "#",
  },
  // {
  //   id: "web-technologies",
  //   slug: "web-technologies",
  //   title: "Web Technologies",
  //   description:
  //     "A collection of web technology practice projects and academic frontend work.",
  //   longDescription:
  //     "Web Technologies contains practice and academic work related to frontend web development. It reflects foundational work with HTML and web development concepts.",
  //   tags: ["HTML", "CSS", "JavaScript", "Web Development"],
  //   year: "2025",
  //   category: "Web Practice",
  //   githubUrl: "https://github.com/Sarkar-Shizan/Web-Technologies",
  //   liveUrl: "#",
  // },
];