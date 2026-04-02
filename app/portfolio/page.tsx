import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Globe2,
  Handshake,
  Layers3,
  Search,
  ShieldCheck,
  Users2,
} from 'lucide-react';
import PrintButton from './print-button';

export const metadata: Metadata = {
  title: 'Corporate Profile',
  description:
    'A multi-page corporate profile for Credence Talent covering positioning, service coverage, search process, engagement models, and client perspectives.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Corporate Profile | Credence Talent',
    description:
      'A multi-page corporate profile for Credence Talent covering positioning, service coverage, search process, engagement models, and client perspectives.',
    url: '/portfolio',
    images: ['/credence-logo-backup.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Profile | Credence Talent',
    description:
      'A multi-page corporate profile for Credence Talent covering positioning, service coverage, search process, engagement models, and client perspectives.',
    images: ['/credence-logo-backup.png'],
  },
};

const whyCredence = [
  {
    icon: Search,
    title: 'Focused Search Discipline',
    text: 'A calibrated search process built for critical roles where fit, credibility, and stronger judgment matter more than candidate volume.',
  },
  {
    icon: Layers3,
    title: 'Specialist Technology Context',
    text: 'Coverage across Engineering, Cloud, Platform, Infrastructure, Security, Product, Delivery, Data, AI, and transformation-focused mandates.',
  },
  {
    icon: Clock3,
    title: 'Clear Execution Rhythm',
    text: 'Structured movement from briefing through close, with tighter communication, defined follow-through, and stronger control of interview momentum.',
  },
  {
    icon: Users2,
    title: 'Candidate Representation',
    text: 'Thoughtful outreach and engagement that protects the client brand in the market and creates confidence with high-value candidates.',
  },
];

const servicePages = [
  {
    title: 'Leadership & Executive Search',
    text: 'Search support for leadership mandates across Engineering, Product, Technology, Operations, and business-critical functions where alignment, judgment, and market credibility are central.',
  },
  {
    title: 'Technology & Engineering Hiring',
    text: 'Specialist hiring across software engineering, architecture, QA, platform, DevOps, SRE, infrastructure, security, and adjacent technical functions.',
  },
  {
    title: 'Global & Distributed Hiring',
    text: 'Support for organizations hiring across North America, Europe, India, LATAM, and remote-first team structures where communication quality and regional fit matter.',
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

const idealFit = [
  'Founder-led and growth-stage businesses making important hires',
  'Technology-led teams building specialist capability',
  'Enterprises hiring into cloud, infrastructure, security, and transformation roles',
];

const clientSpeak = [
  {
    quote:
      'Credence brought much stronger role calibration than a typical agency process. The shortlist quality was noticeably better, and communication stayed sharp through every interview stage.',
    attribution: 'Head of Engineering, high-growth technology company',
  },
  {
    quote:
      'What stood out was the way the search was represented in the market. Candidates came into the process well-informed, and that improved both engagement quality and close confidence.',
    attribution: 'VP Talent, international software business',
  },
  {
    quote:
      'We needed a partner who understood infrastructure and cloud hiring without turning the search into a volume exercise. Credence handled the mandate with much better discipline.',
    attribution: 'Director of Technology, enterprise transformation program',
  },
  {
    quote:
      'The process felt structured from briefing through offer. We had better visibility, stronger candidate alignment, and far less noise than we see in generalist recruitment models.',
    attribution: 'Founder, product-led growth-stage company',
  },
];

function PageSection({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={`print-page-break print-avoid-break px-8 py-10 sm:px-10 ${className}`}>{children}</section>;
}

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
        <section className="print-avoid-break print-preserve-surface border-b border-slate-200 bg-slate-950 px-8 py-12 text-white sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <img src="/credence-logo.svg" alt="Credence Talent" className="h-14 w-auto" />
              <h1 className="font-display mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
                Trusted search for companies that want to hire with confidence.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
                Credence Talent is a boutique recruitment partner supporting leadership and specialist hiring across Engineering, Cloud, Infrastructure, Security, Product, Delivery, Data, AI, and global team-building mandates.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                    What Clients Need
                  </div>
                  <div className="mt-3 text-sm leading-7 text-slate-200">
                    Higher quality shortlists, stronger role calibration, and a search process that protects brand credibility.
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                    Search Context
                  </div>
                  <div className="mt-3 text-sm leading-7 text-slate-200">
                    Leadership, Engineering, Cloud, Platform, Infrastructure, Security, Data, AI, Product, and Delivery hiring.
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 self-start">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-3">
                  <Layers3 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                      Search Value
                    </div>
                    <div className="mt-2 text-sm leading-7 text-slate-200">
                      Higher quality shortlists for leadership and specialist roles, with clearer communication and stronger market representation.
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-3">
                  <Globe2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                      Geographic Reach
                    </div>
                    <div className="mt-2 text-sm leading-7 text-slate-200">
                      North America, Europe, India, LATAM, and remote markets for distributed or multi-region hiring.
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                      Best Fit
                    </div>
                    <div className="mt-2 grid gap-2">
                      {idealFit.map((item) => (
                        <div key={item} className="text-sm leading-7 text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageSection>
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Why Credence</div>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              A search partner built for higher-trust hiring environments
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Credence Talent is designed for clients who need more than sourcing support. We help shape the brief, calibrate the market, run a more disciplined process, and represent the opportunity well with leadership and specialist candidates.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {whyCredence.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="print-avoid-break rounded-[1.75rem] border border-slate-200 bg-slate-50/70 p-6">
                  <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </PageSection>

        <PageSection className="border-y border-slate-200 bg-slate-50/70">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Service Coverage</div>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              Search support across leadership, specialist technology, and global hiring mandates
            </h2>
          </div>
          <div className="mt-8 grid gap-5">
            {servicePages.map((item) => (
              <div key={item.title} className="print-avoid-break rounded-[1.75rem] border border-slate-200 bg-white p-6">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Core Search Coverage</div>
              <div className="mt-4 grid gap-3">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                    <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Roles We Cover</div>
              <div className="mt-4 grid gap-3">
                {roles.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                    <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageSection>

        <PageSection>
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Search Process</div>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              A disciplined workflow from briefing through close
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We align on role context, map the market, run a focused search, and stay involved through interview, offer, onboarding, and post-join follow-up.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <div key={item} className="print-avoid-break rounded-[1.75rem] border border-slate-200 bg-slate-50/70 p-6">
                <div className="text-sm font-semibold tracking-[0.24em] text-emerald-700">0{index + 1}</div>
                <div className="font-display mt-3 text-2xl font-semibold text-slate-950">{item}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Delivery Principles</div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {differentiators.map((item) => (
                <div key={item} className="print-avoid-break flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm leading-7 text-slate-700">
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        <PageSection className="border-y border-slate-200 bg-slate-50/70">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Client Speak</div>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              Representative client feedback on our search approach
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Company names are intentionally withheld, but these quotes reflect the kind of feedback clients give on shortlist quality, communication, and overall search discipline.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {clientSpeak.map((item) => (
              <div key={item.quote} className="print-avoid-break rounded-[1.75rem] border border-slate-200 bg-white p-6">
                <p className="text-base leading-8 text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-5 text-sm font-medium text-slate-950">{item.attribution}</div>
              </div>
            ))}
          </div>
        </PageSection>

        <PageSection>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Engagement Models</div>
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
                          <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Contact</div>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Ready to discuss a hiring mandate?
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Credence Talent is best suited to founder-led businesses, scaling technology teams, and established organizations hiring into important leadership or specialist roles where quality, credibility, and long-term fit matter.
              </p>
              <div className="print-avoid-break print-preserve-surface mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white">
                <div className="space-y-4 text-sm leading-7 text-slate-300">
                  <div className="text-white">
                    <div className="font-medium text-base">Muthupandi</div>
                    <div>Head of Operations - Strategic &amp; Business Development</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">Direct</div>
                    <div>muthupandi@credencetalent.com</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">Support</div>
                    <div>hradmin@credencetalent.com</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">Web</div>
                    <div>https://credencetalent.com</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">Markets</div>
                    <div>North America | Europe | India | LATAM</div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 print-hidden">
                  <a
                    href="mailto:muthupandi@credencetalent.com?subject=Client%20Portfolio%20Discussion"
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
          </div>
        </PageSection>
      </div>
    </main>
  );
}
