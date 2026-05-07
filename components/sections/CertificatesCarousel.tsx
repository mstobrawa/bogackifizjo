import { Award } from "lucide-react";
import { Section } from "@/components/layout/Section";

const certificates = ["Terapia manualna", "Kinesiotaping", "Rehabilitacja ortopedyczna", "Masaż medyczny"];
const marqueeCertificates = [...certificates, ...certificates];

function CertificateCard({ certificate }: { certificate: string }) {
  return (
    <article className="group h-full rounded-[1.75rem] border border-white/15 bg-white p-5 text-[var(--color-text)] shadow-[var(--shadow-card)] ring-1 ring-white/10 transition duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 hover:shadow-[var(--shadow-premium)]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#F4EFEA_0%,#FFFFFF_48%,#dbe6e8_100%)]">
        <div className="absolute inset-5 rounded-2xl border border-white/80 bg-white/28" />
        <div className="absolute left-6 top-6 grid size-12 place-items-center rounded-2xl bg-[var(--color-primary)] text-white shadow-sm">
          <Award size={22} />
        </div>
        <div className="absolute bottom-6 left-6 right-6 h-2 rounded-full bg-white/70">
          <div className="h-full w-2/3 rounded-full bg-[var(--color-primary)]" />
        </div>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[var(--color-primary)]">{certificate}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
        Placeholder dokumentu do podpięcia w przyszłym CMS.
      </p>
    </article>
  );
}

export function CertificatesCarousel() {
  return (
    <Section tone="dark">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
          Certyfikaty
        </p>
        <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Stały rozwój i sprawdzone metody pracy
        </h2>
      </div>
      <div className="relative mt-11 overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-primary)] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-primary)] to-transparent sm:w-28" />
        <div className="certificates-marquee flex w-max gap-5 will-change-transform">
          {marqueeCertificates.map((certificate, index) => (
            <div
              key={`${certificate}-${index}`}
              className="w-[78vw] shrink-0 sm:w-[22rem] lg:w-[24rem]"
              aria-hidden={index >= certificates.length}
            >
              <CertificateCard certificate={certificate} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
