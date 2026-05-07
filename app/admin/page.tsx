import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

const adminAreas = ["Edycja cen", "Zarządzanie wpisami", "Zarządzanie certyfikatami"];

export default function AdminPage() {
  return (
    <Section tone="surface">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Panel administracyjny
        </p>
        <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold text-[var(--color-primary)]">
          Fundament pod przyszły CMS
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
          Backend nie jest jeszcze zaimplementowany. Ta strona rezerwuje routing i kierunek architektury pod przyszłe zarządzanie treścią.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {adminAreas.map((area) => (
          <div key={area} className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-[var(--color-primary)]/5">
            <h2 className="text-lg font-semibold text-[var(--color-primary)]">{area}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
              Moduł placeholder do wdrożenia w kolejnym etapie.
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
