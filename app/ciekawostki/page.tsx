import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ciekawostki",
  description: "Artykuły i porady fizjoterapeutyczne przygotowane pod przyszłą integrację CMS.",
};

export default function BlogPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Ciekawostki
        </p>
        <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
          Wiedza, która pomaga lepiej rozumieć ciało
        </h1>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/ciekawostki/${post.slug}`}
            className="group rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-[var(--color-primary)]/5 transition duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 hover:border-[var(--color-primary)]/45 hover:shadow-[var(--shadow-premium)]"
          >
            <p className="text-sm text-[var(--color-text-muted)]">
              {new Intl.DateTimeFormat("pl-PL").format(new Date(post.date))}
            </p>
            <h2 className="mt-4 text-xl font-semibold text-[var(--color-primary)]">{post.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{post.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)]">
              Czytaj dalej <ArrowRight className="transition group-hover:translate-x-1" size={17} />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
