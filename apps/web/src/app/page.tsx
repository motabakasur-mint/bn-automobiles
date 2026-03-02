"use client";

import { brand, experienceBlocks } from "@bn/config";
import { Aurora, GlassCard, MetricPill, SectionHeading } from "@bn/ui";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Star } from "lucide-react";

const heroStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090f] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-28 pt-24 sm:px-10">
        <Hero />
        <Services />
        <TestimonialBand />
      </div>
    </main>
  );
}

function Hero() {
  return (
    <Aurora className="rounded-[40px] border border-white/10 bg-gradient-to-b from-white/5 to-white/0 px-8 py-16 shadow-[0_40px_120px_rgba(5,9,15,0.65)] sm:px-14 sm:py-20">
      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-2 text-sm uppercase tracking-[0.3em] text-white/70"
        >
          <Sparkles size={16} />
          Awwwards-grade craft brief
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            {[`${brand.name} · ${brand.tagline}`, brand.description].map(
              (text, idx) => (
                <motion.p
                  key={text}
                  className={idx === 0 ? "text-5xl font-semibold leading-tight sm:text-6xl" : "text-lg text-white/70 sm:text-xl"}
                  variants={heroStagger}
                  initial="hidden"
                  animate="visible"
                  custom={idx}
                >
                  {text}
                </motion.p>
              ),
            )}
            <motion.div
              variants={heroStagger}
              initial="hidden"
              animate="visible"
              custom={2}
              className="flex flex-wrap items-center gap-6"
            >
              <button className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#050505] transition hover:bg-[#f0c159]">
                Explore concept deck
                <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
              </button>
              <span className="text-white/60">
                Built to stand beside every Awwwards feature you’ve bookmarked.
              </span>
            </motion.div>
          </div>
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={heroStagger}
            custom={3}
          >
            {experienceBlocks.heroHighlights.map((metric) => (
              <MetricPill key={metric.label} {...metric} />
            ))}
          </motion.div>
        </div>
      </div>
    </Aurora>
  );
}

function Services() {
  return (
    <section className="space-y-12">
      <SectionHeading
        eyebrow="Experience stack"
        title="Cinematic landing page architecture"
        label="Every block is designed to mirror the polish of award-winning digital studios — layered depth, luminous gradients, and micro-interactions tuned for high-intent shoppers."
      />
      <div className="grid gap-8 lg:grid-cols-[0.8fr,1fr]">
        <GlassCard>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Story Engine</p>
            <h3 className="text-3xl font-semibold leading-tight">
              Hero → Spotlight → Proof — the narrative arc that turns a landing page into a cinematic funnel.
            </h3>
            <p className="text-white/70">
              Pre-wired for SEO primitives (metadata, structured data, OpenGraph) and built on the App Router so content streaming, caching, and analytics instrumentation stay effortless.
            </p>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white"></span>
                Intent-aware CTA grid with WhatsApp + concierge booking.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white"></span>
                Shared UI kit (`@bn/ui`) for buttons, glass cards, and lighting overlays.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white"></span>
                Brand constants + metadata streamed from `@bn/config`.
              </li>
            </ul>
          </div>
        </GlassCard>
        <div className="grid gap-6 md:grid-cols-2">
          {experienceBlocks.services.map((service) => (
            <GlassCard key={service.title}>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Signature move</p>
              <h4 className="mt-3 text-2xl font-semibold text-white">{service.title}</h4>
              <p className="mt-4 text-white/70">{service.copy}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialBand() {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Signal"
        title="Proof that feels editorial"
        align="center"
        label="Testimonials, awards, and stats styled as if they shipped straight from an Awwwards case study."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {experienceBlocks.testimonials.map((item) => (
          <GlassCard key={item.author}>
            <div className="flex flex-col gap-6">
              <Star className="h-6 w-6 text-[#f0c159]" />
              <p className="text-lg text-white/80">“{item.body}”</p>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-white">
                  {item.author}
                </p>
                <p className="text-sm text-white/60">{item.role}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
