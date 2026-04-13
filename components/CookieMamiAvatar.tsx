import Image from 'next/image';

export default function CookieMamiAvatar({ size = 280, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <Image
        src="/assets/avatars/cookie-milk.png"
        alt="Cookie Mami — Chocolate Chip Cookie Dipped in Milk"
        width={size}
        height={size}
        className="rounded-3xl shadow-2xl border-4 border-[#D4AF37] object-cover"
        priority
      />
      <div className="absolute -bottom-2 -right-2 bg-black/80 text-[#FF1493] text-xs px-3 py-1 rounded-full font-mono tracking-widest border border-[#FF1493]/30">
        🍪 DIPPED IN SIN
      </div>
    </div>
  );
}
