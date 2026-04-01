import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Handshake,
  Layers3,
  ShieldCheck,
} from 'lucide-react';
import PrintButton from './print-button';

export const metadata: Metadata = {
  title: 'Capabilities Portfolio',
  description:
    'A client-facing one-page portfolio for Credence Talent covering engagement models, sector coverage, search process, and differentiators.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Capabilities Portfolio | Credence Talent',
    description:
      'A client-facing one-page portfolio for Credence Talent covering engagement models, sector coverage, search process, and differentiators.',
    url: '/portfolio',
    images: ['/credence-logo-backup.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capabilities Portfolio | Credence Talent',
    description:
      'A client-facing one-page portfolio for Credence Talent covering engagement models, sector coverage, search process, and differentiators.',
    images: ['/credence-logo-backup.png'],
  },
};

const engagementModels = [
  {
    icon: BriefcaseBusiness,
    title: 'Permanent Hiring (FTE)',
    text: 'Focused search support for full-time leadership and specialist roles where long-term fit, technical alignment, and stronger judgment are central.',
  },
  {
    icon: Handshake,
    title: 'Contract / C2C',
    text: 'Flexible support for project-based delivery, specialist capability, and time-sensitive hiring where speed matters but standards still need to hold.',
  },
  {
    icon: Building2,
    title: 'RPO Support',
    text: 'Embedded recruitment support for teams scaling across multiple roles or hiring programs that need structure, consistency, and continuity.',
  },
];

const capabilities = [
  'Leadership Search',
  'Technology Hiring',
  'Cloud & Infrastructure',
  'Cybersecurity',
  'Fintech & Regulated Environments',
  'Global Hiring',
];

const roles = [
  'Engineering Leadership',
  'Software Engineering',
  'Cloud and Platform',
  'DevOps and SRE',
  'Infrastructure and Security',
  'Data, AI, Product, and Delivery',
];

const process = [
  'Discovery & Briefing',
  'Market Mapping',
  'Search & Screening',
  'Interview & Close',
];

const differentiators = [
  'Boutique, high-touch search model',
  'Technical and market context for specialist roles',
  'Clear communication throughout the search',
  'Focused shortlists rather than candidate volume',
  'Global reach across North America, Europe, India, and LATAM',
  'Candidate experience that reflects client standards',
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#eef3f0] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="print-hidden mx-auto mb-6 flex max-w-5xl items-center justify-between gap-4">
        <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-slate-950">
          Credence Talent
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Back to Home
          </Link>
          <PrintButton />
        </div>
      </div>

      <div className="print-shell mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/80">
        <section className="print-avoid-break print-preserve-surface border-b border-slate-200 bg-slate-950 px-8 py-10 text-white sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">
                Capabilities Overview
              </div>
              <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Trusted search for companies that want to hire with confidence.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                Credence Talent is a boutique recruitment partner supporting leadership and specialist
                hiring across Engineering, Cloud, Infrastructure, Security, Product, Delivery, Data,
                AI, and global team-building mandates.
              </p>
            </div>
            <div className="grid gap-4 self-start rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <Layers3 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                <div className="text-sm leading-7 text-slate-200">
                  Higher quality shortlists for leadership and specialist roles
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                <div className="text-sm leading-7 text-slate-200">
                  Support across North America, Europe, India, LATAM, and remote markets
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                <div className="text-sm leading-7 text-slate-200">
                  Candidate engagement designed to protect client brand and momentum
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="print-avoid-break border-b border-slate-200 px-8 py-8 sm:px-10 lg:border-b-0 lg:border-r">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              What We Do
            </div>
            <div className="mt-6 grid gap-5">
              {engagementModels.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="print-avoid-break rounded-[1.75rem] border border-slate-200 bg-slate-50/70 p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="print-avoid-break px-8 py-8 sm:px-10">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Sector & Role Coverage
            </div>
            <div className="mt-6 grid gap-6">
              <div className="print-avoid-break rounded-[1.75rem] border border-slate-200 bg-white p-5">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
                  Core Search Coverage
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {capabilities.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                      <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="print-avoid-break rounded-[1.75rem] border border-slate-200 bg-white p-5">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
                  Roles We Cover
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {roles.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                      <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="print-avoid-break border-y border-slate-200 bg-slate-50/70 px-8 py-8 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                Search Process
              </div>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                A disciplined workflow from brief to close
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We align on role context, map the market, run a focused search, and support interview,
                offer, onboarding, and post-join follow-up.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {process.map((item, index) => (
                <div key={item} className="print-avoid-break rounded-[1.75rem] border border-slate-200 bg-white p-5">
                  <div className="text-sm font-semibold tracking-[0.24em] text-emerald-700">
                    0{index + 1}
                  </div>
                  <div className="font-display mt-3 text-2xl font-semibold text-slate-950">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-0 lg:grid-cols-[1fr_1fr]">
          <div className="print-avoid-break border-b border-slate-200 px-8 py-8 sm:px-10 lg:border-b-0 lg:border-r">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Why Credence
            </div>
            <div className="mt-6 grid gap-3">
              {differentiators.map((item) => (
                <div key={item} className="print-avoid-break flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm leading-7 text-slate-700">
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="print-avoid-break px-8 py-8 sm:px-10">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Contact
            </div>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Ready to discuss a hiring mandate?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Credence Talent is best suited to founder-led businesses, scaling technology teams, and
              established organizations hiring into important leadership or specialist roles where
              quality, credibility, and long-term fit matter.
            </p>
            <div className="print-avoid-break print-preserve-surface mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white">
              <div className="font-display text-2xl font-semibold">Credence Talent</div>
              <div className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                <div className="pb-2 text-white">
                  <div className="font-medium">Muthupandi</div>
                  <div>Head of Operations - Strategic &amp; Business Development</div>
                </div>
                <div>hradmin@credencetalent.com</div>
                <div>https://credencetalent.com</div>
                <div>North America | Europe | India | LATAM</div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 print-hidden">
                <a
                  href="mailto:hradmin@credencetalent.com?subject=Client%20Portfolio%20Discussion"
                  className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
                >
                  Discuss a Search
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link
                  href="/engagement-models"
                  className="inline-flex items-center rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  View Engagement Models
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
