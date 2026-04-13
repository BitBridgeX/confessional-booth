import Image from 'next/image';

export default function CookieMamiAvatar({ size = 280, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <Image
        src="/assets/avatars/cookie-milk.png"
        alt="Cookie Mami"
        width={size}
        height={size}
        className="rounded-2xl shadow-2xl border-2 border-gold/40 object-cover"
        priority
      />
      <div className="absolute -bottom-3 -right-3 bg-black/90 text-gold text-xs px-3 py-1 rounded-full font-mono tracking-widest border border-gold/40">
        Sacred Vessel
      </div>
    </div>
  );
}
