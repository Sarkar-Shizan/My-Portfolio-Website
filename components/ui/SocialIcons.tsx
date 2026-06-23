import { portfolio } from "@/data/portfolio";
import { User } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { label: "GitHub", href: portfolio.socials.github, icon: FaGithub },
  { label: "LinkedIn", href: portfolio.socials.linkedin, icon: FaLinkedinIn },
  { label: "Twitter", href: portfolio.socials.twitter, icon: FaXTwitter },
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
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-purple-400 hover:text-purple-300"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
