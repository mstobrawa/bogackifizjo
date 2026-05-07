type PlaceholderImageProps = {
  label?: string;
  className?: string;
  variant?: "portrait" | "wide" | "certificate";
};

export function PlaceholderImage({
  label = "Miejsce na zdjęcie",
  className = "",
  variant = "wide",
}: PlaceholderImageProps) {
  const ratio =
    variant === "portrait"
      ? "aspect-[4/5]"
      : variant === "certificate"
        ? "aspect-[3/4]"
        : "aspect-[5/4]";

  return (
    <div
      className={`group relative ${ratio} overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,#0D1B2A_0%,#1B2F41_34%,#F4EFEA_100%)] shadow-[var(--shadow-premium)] ring-1 ring-[var(--color-primary)]/15 ${className}`}
      aria-label={label}
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(184,115,77,0.18),transparent_24rem)]" />
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-white/35 bg-white/12 blur-sm" />
      <div className="absolute inset-6 rounded-[1.5rem] border border-white/35 bg-white/10 shadow-inner transition duration-500 ease-[var(--ease-premium)] group-hover:scale-[1.015]" />
      <div className="absolute right-8 top-10 h-36 w-24 rounded-full bg-white/16 blur-2xl" />
      <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/80 bg-white p-5 shadow-sm">
        <div className="mb-3 h-1 w-12 rounded-full bg-[var(--color-accent)]/70" />
        <p className="text-sm font-semibold text-[var(--color-primary)]">{label}</p>
        <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">
          Elegancki placeholder pod docelowe zdjęcie gabinetu
        </p>
      </div>
    </div>
  );
}
