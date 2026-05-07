import { ComponentPropsWithoutRef } from "react";
import { Container } from "./Container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: "default" | "surface" | "dark";
  contained?: boolean;
};

const tones = {
  default: "bg-[var(--color-bg)] text-[var(--color-text)]",
  surface: "bg-[var(--color-surface)] text-[var(--color-text)]",
  dark: "bg-[var(--color-primary)] text-[var(--color-bg)]",
};

export function Section({
  className = "",
  children,
  tone = "default",
  contained = true,
  ...props
}: SectionProps) {
  return (
    <section className={`relative py-16 sm:py-20 lg:py-24 ${tones[tone]} ${className}`} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
