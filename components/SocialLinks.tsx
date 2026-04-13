interface SocialLinksProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/confessionalbooth", icon: "📸", handle: "@confessionalbooth" },
  { name: "TikTok", href: "https://tiktok.com/@confessionalbooth", icon: "", handle: "@confessionalbooth" },
  { name: "Twitter / X", href: "https://twitter.com/confessionalbooth", icon: "🐦", handle: "@confessionalbooth" },
  { name: "YouTube", href: "https://youtube.com/@confessionalbooth", icon: "📺", handle: "@confessionalbooth" },
  { name: "Spotify", href: "https://open.spotify.com/artist/confessionalbooth", icon: "🟢", handle: "Confessional Booth" },
  { name: "OnlyFans", href: "https://onlyfans.com/cookiemami", icon: "🔞", handle: "Cookie Mami" },
];

export default function SocialLinks({ className = "", size = "md" }: SocialLinksProps) {
  const sizeClasses = {
    sm: "text-xl gap-3",
    md: "text-2xl gap-4",
    lg: "text-3xl gap-5",
  };

  return (
    <div className={`flex flex-wrap items-center justify-center ${sizeClasses[size]} ${className}`}>
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`${social.name}: ${social.handle}`}
          className="hover:scale-125 transition-transform"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
