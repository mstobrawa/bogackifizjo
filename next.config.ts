import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  return {
    // Keep the dev server cache separate from production builds.
    // On Windows, running `next build` while `next dev` is alive can otherwise
    // leave stale webpack chunks in `.next` and trigger "Cannot find module ./x.js".
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  };
}
