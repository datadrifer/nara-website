import { notFound, redirect } from "next/navigation";
import { getSlide, firstVariantOf, slides } from "../slides";

export function generateStaticParams() {
  return slides.map((s) => ({ n: s.id }));
}

interface SlidePageProps {
  params: Promise<{ n: string }>;
}

export default async function SlidePage({ params }: SlidePageProps) {
  const { n } = await params;
  const raw = n.toLowerCase();

  // /slide/1 → redirect to first variant (/slide/1a)
  if (/^\d+$/.test(raw)) {
    const first = firstVariantOf(Number(raw));
    if (!first) notFound();
    redirect(`/slide/${first.id}`);
  }

  const entry = getSlide(raw);
  if (!entry) notFound();
  const { Component } = entry;
  return <Component />;
}
