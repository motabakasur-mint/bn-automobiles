import type { Metadata } from "next";
import { brand } from "./brand";

const baseUrl = "https://bn-automobiles.com";

export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description: brand.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    title: `${brand.name} · ${brand.tagline}`,
    description: brand.description,
    siteName: brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} · ${brand.tagline}`,
    description: brand.description,
  },
  alternates: {
    canonical: baseUrl,
  },
};
