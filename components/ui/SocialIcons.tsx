import { portfolio } from "@/data/portfolio";
import { User } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  { label: "GitHub", href: portfolio.socials.github, icon: FaGithub },
  { label: "LinkedIn", href: portfolio.socials.linkedin, icon: FaLinkedinIn },
  { label: "Facebook", href: portfolio.socials.facebook, icon: FaFacebook },
];

type SocialIconsProps = {
  withUserIcon?: boolean;
};

export default function SocialIcons({ withUserIcon = false }: SocialIconsProps) {
  const items = withUserIcon
    ? [...socialLinks, { label: "Profile", href: "/about", icon: User }]
    : socialLinks;

  return (
    <div className="flex gap-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-400/70 hover:bg-purple-500/15 hover:text-purple-100 hover:shadow-[0_0_30px_rgba(168,85,247,0.65)]">
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
