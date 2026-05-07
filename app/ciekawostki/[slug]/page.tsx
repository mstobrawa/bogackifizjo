import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { posts } from "@/lib/content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <p className="text-sm text-[var(--color-text-muted)]">
          {new Intl.DateTimeFormat("pl-PL").format(new Date(post.date))}
        </p>
        <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-tight text-[var(--color-primary)] sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-xl leading-9 text-[var(--color-text-muted)]">{post.excerpt}</p>
        <div className="mt-10 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-card)] ring-1 ring-[var(--color-primary)]/5">
          <p className="leading-8 text-[var(--color-text-muted)]">
            To jest placeholder artykułu przygotowany pod przyszłą integrację z CMS. Docelowo treść, autor, kategorie i metadane SEO mogą być pobierane z panelu administracyjnego.
          </p>
        </div>
      </article>
    </Section>
  );
}
