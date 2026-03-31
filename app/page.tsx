'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Globe2,
  Handshake,
  Layers3,
  Mail,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Users2,
} from 'lucide-react';

const stats = [
  { value: 'Global', label: 'Market positioning' },
  { value: 'SDLC + Leadership', label: 'Core hiring focus' },
  { value: 'Trusted', label: 'Brand promise' },
  { value: 'Boutique', label: 'High-touch service model' },
];

const services = [
  {
    icon: Search,
    title: 'Executive & Leadership Search',
    description:
      'We partner with founders and senior leaders to identify high-impact executives across engineering, product, and business functions. Our focus is on alignment, not volume, ensuring every candidate represents your brand with credibility.',
  },
  {
    icon: Layers3,
    title: 'Technology & Engineering Hiring',
    description:
      'Specialist hiring across the full SDLC: software engineering, platform and infrastructure, cloud, DevOps, SRE, security, data, and QA. We align candidates to your architecture, tooling, and delivery model.',
  },
  {
    icon: Globe2,
    title: 'Global Talent Search',
    description:
      'We help companies hire across regions, including the US, India, Europe, and remote markets, balancing cost, capability, and cultural alignment for distributed teams.',
  },
  {
    icon: Handshake,
    title: 'Strategic Hiring Partner',
    description:
      'Beyond filling roles, we act as a long-term hiring partner, supporting workforce planning, role definition, and scaling strategies for growing organizations.',
  },
];

const sectors = [
  'Technology',
  'Cloud & Infrastructure',
  'Digital Transformation',
  'Fintech',
  'Cybersecurity',
  'Data & AI',
  'Product & Engineering',
  'Global Shared Services',
];

const differentiators = [
  {
    title: 'End-to-end SDLC understanding',
    text: 'We cover roles across the entire lifecycle, from product and engineering to QA, DevOps, security, cloud, and infrastructure, so we can match talent to real delivery needs.',
  },
  {
    title: 'Trust-first engagement',
    text: 'We focus on transparent communication, realistic expectations, and long-term relationships with both clients and candidates.',
  },
  {
    title: 'Quality over volume',
    text: 'We present fewer, better-aligned candidates, saving your team time and improving hiring outcomes.',
  },
  {
    title: 'Global but focused',
    text: 'We operate with a global mindset while maintaining a boutique, high-touch approach tailored to each client.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery & Briefing',
    text: 'We align on business goals, hiring context, role scope, success profile, timeline, and messaging before the search begins.',
  },
  {
    step: '02',
    title: 'Market Mapping',
    text: 'We identify relevant companies, talent pools, and candidate segments across target regions and functions.',
  },
  {
    step: '03',
    title: 'Search & Screening',
    text: 'We approach candidates discreetly, qualify fit carefully, and present a refined shortlist rather than a volume-led pipeline.',
  },
  {
    step: '04',
    title: 'Interview & Close',
    text: 'We support interview flow, candidate engagement, offer strategy, and close management to improve conversion and confidence.',
  },
];

const testimonials = [
  {
    quote:
      'Credence Talent quickly understood our platform engineering needs and delivered candidates who were both technically strong and culturally aligned.',
    name: 'Engineering Leader',
    role: 'Director, Platform Engineering',
  },
  {
    quote:
      "What stood out was the clarity and honesty in communication. We weren't flooded with resumes, just the right candidates.",
    name: 'Hiring Manager',
    role: 'Head of Technology',
  },
  {
    quote:
      'A reliable partner for scaling teams globally. They understand both the market and the role deeply.',
    name: 'Founder',
    role: 'Tech Startup',
  },
];

const faqs = [
  {
    q: 'What roles do you specialize in?',
    a: 'We specialize in leadership and high-impact technical roles across the SDLC, including software engineering, cloud, DevOps, SRE, platform, security, data, QA, and infrastructure.',
  },
  {
    q: 'Do you support global hiring?',
    a: 'Yes. We help companies hire across the US, India, Europe, and remote-first environments, ensuring both technical fit and cultural alignment.',
  },
  {
    q: 'How are you different from other recruitment agencies?',
    a: 'Our background in technology and infrastructure allows us to understand roles deeply. We focus on quality, trust, and long-term partnerships rather than transactional hiring.',
  },
  {
    q: 'Do you work with startups or enterprises?',
    a: 'Both. We support early-stage startups building core teams as well as established enterprises scaling specialized functions.',
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">{eyebrow}</div>
      <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}

function CredenceLogo({
  compact = false,
  height,
}: {
  compact?: boolean;
  height?: number;
}) {
  const logoHeight = height ?? (compact ? 96 : 64);

  return (
    <img
      src="/credence-logo.svg"
      alt="Credence Talent"
      style={{ height: `${logoHeight}px`, width: 'auto' }}
      className="block shrink-0"
    />
  );
}

function ButtonLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const cls =
    variant === 'primary'
      ? 'inline-flex items-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800'
      : 'inline-flex items-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50';

  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f8faf9] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <CredenceLogo compact />
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-600 lg:flex">
            <a href="#services" className="transition hover:text-slate-950">Services</a>
            <a href="#sectors" className="transition hover:text-slate-950">Sectors</a>
            <a href="#about" className="transition hover:text-slate-950">Expertise</a>
            <a href="#process" className="transition hover:text-slate-950">Process</a>
            <a href="#insights" className="transition hover:text-slate-950">Insights</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </nav>

          <div className="hidden md:block">
            <ButtonLink href="#contact">Book a Consultation</ButtonLink>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(15,23,42,0.07),transparent_24%),linear-gradient(to_bottom,white,#f8faf9)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800 shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Elegant boutique recruitment for a global market
              </div>

              <h1 className="font-display mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl lg:leading-[1.02]">
                Trusted search for companies that want to hire with confidence.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Credence Talent is a global recruitment partner specializing in leadership and technology hiring. Founded with deep experience in DevOps, cloud platforms, and enterprise systems, we help companies find talent that truly fits, not just on paper, but in practice.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="#contact">
                  Start a Search
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="#services" variant="secondary">Explore Services</ButtonLink>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <Card key={item.label} className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur">
                    <div className="text-lg font-semibold text-slate-950">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.label}</div>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="grid gap-5">
              <Card className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-slate-500">Why Credence Talent</div>
                    <div className="font-display mt-2 text-3xl font-semibold tracking-tight text-slate-950">A premium, trust-first search partner</div>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Our brand is designed to feel credible, international, and high-touch. The result is a website that positions Credence Talent as a refined boutique agency with modern execution and strong client appeal.
                </p>
                <div className="mt-6 grid gap-3">
                  {[
                    'Executive and specialist technology search',
                    'Global-market brand positioning',
                    'Elegant, modern candidate-facing experience',
                    'Relationship-led, premium service delivery',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-sm text-slate-700">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="grid gap-5 md:grid-cols-2">
                <Card className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg">
                  <Globe2 className="h-6 w-6 text-emerald-700" />
                  <div className="font-display mt-4 text-2xl font-semibold text-slate-950">Global outlook</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Suitable for companies hiring across regions, time zones, and business stages.
                  </p>
                </Card>
                <Card className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg">
                  <BriefcaseBusiness className="h-6 w-6 text-slate-950" />
                  <div className="font-display mt-4 text-2xl font-semibold text-slate-950">Leadership + tech</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    A sharp positioning for high-value roles where quality, trust, and fit matter most.
                  </p>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white/80">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-sm text-slate-500 md:grid-cols-4 lg:px-8">
            <div className="flex items-center gap-3"><Building2 className="h-4 w-4" /> Boutique recruitment model</div>
            <div className="flex items-center gap-3"><Users2 className="h-4 w-4" /> Client and candidate-first experience</div>
            <div className="flex items-center gap-3"><Clock3 className="h-4 w-4" /> Structured, timely search execution</div>
            <div className="flex items-center gap-3"><ShieldCheck className="h-4 w-4" /> Credibility at every touchpoint</div>
          </div>
        </section>

        <section className="bg-slate-50/80 py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              <Card className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="font-display text-4xl font-semibold tracking-tight text-slate-950">20+ years</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Deep experience across enterprise technology, infrastructure, and modern software delivery environments.
                </p>
              </Card>
              <Card className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="font-display text-4xl font-semibold tracking-tight text-slate-950">Enterprise to startup</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Perspective shaped by both large-scale organizations and fast-moving growth environments.
                </p>
              </Card>
              <Card className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="font-display text-4xl font-semibold tracking-tight text-slate-950">SDLC + cloud expertise</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Strong familiarity with software engineering, cloud platforms, infrastructure, security, DevOps, and platform teams.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading eyebrow="Services" title="Built for sophisticated hiring needs across leadership and specialist talent" description="Credence Talent supports clients who need precision, credibility, and a more thoughtful search process for leadership and specialist hiring." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mt-6 text-2xl font-semibold tracking-tight text-slate-950">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="sectors" className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[2.5rem] border border-slate-200 bg-slate-950 px-6 py-12 text-white shadow-xl lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Sectors & Roles</div>
                  <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                    Flexible enough for multiple industries, sharp enough to feel specialized.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                    Credence Talent supports hiring across engineering, cloud, infrastructure, security, digital transformation, and growth-stage technology functions while maintaining a premium, focused positioning.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {sectors.map((sector) => (
                    <div key={sector} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 text-sm text-slate-200 backdrop-blur-sm">
                      {sector}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeading eyebrow="Expertise" title="Built on deep experience across engineering, cloud, and enterprise systems" description="Credence Talent brings hands-on understanding of modern software delivery, helping companies hire across the full SDLC with confidence." />
              <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Credence Talent was built to address a gap in the recruitment market, where complex technology roles across the SDLC are often misunderstood and hiring becomes inefficient. We bring real-world engineering understanding into the hiring process, helping companies make better decisions with confidence.
                </p>
                <p>
                  As a startup, we are focused on building long-term relationships with our clients. Every engagement is handled with care, professionalism, and a commitment to delivering measurable hiring success.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              {differentiators.map((item) => (
                <Card key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="font-display text-2xl font-semibold text-slate-950">{item.title}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading eyebrow="Search Process" title="A structured, premium workflow that communicates discipline and trust" description="The process section helps clients quickly understand how Credence Talent works and why the agency feels dependable." />
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item) => (
                <Card key={item.step} className="rounded-[2rem] border border-slate-200 bg-slate-50/60 p-8 shadow-sm">
                  <div className="text-sm font-semibold tracking-[0.2em] text-emerald-700">{item.step}</div>
                  <div className="font-display mt-4 text-2xl font-semibold text-slate-950">{item.title}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading eyebrow="Why Credence" title="A search partner built for companies that need trust as much as speed" description="Our approach is designed for organizations hiring into critical roles where brand representation, judgment, and alignment matter." />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                'Leadership and specialist hiring support',
                'Clear communication throughout the search',
                'Strong market understanding across technical roles',
                'Shortlists focused on fit, not volume',
                'A boutique process with global reach',
                'A brand experience that reflects your standards',
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-white px-5 py-5 text-sm text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading eyebrow="Client Perspective" title="What clients value in a high-trust search partnership" description="Our work is built around clarity, quality, and strong representation in the market, especially for complex technical and leadership roles." />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <Card key={item.quote} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <p className="text-base leading-8 text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                  <div className="mt-7 border-t border-slate-100 pt-5">
                    <div className="font-semibold text-slate-950">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <Card className="rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-xl">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Candidate Experience</div>
              <h3 className="font-display mt-4 text-4xl font-semibold tracking-tight">Professional representation matters</h3>
              <p className="mt-5 text-base leading-8 text-slate-300">
                The strongest recruitment brands do more than fill jobs. They represent clients well in the market, communicate clearly, and create confidence throughout the process.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  'Thoughtful outreach that reflects your brand well in the market.',
                  'Clear communication that keeps candidates informed and engaged.',
                  'A measured, credible process that builds confidence on both sides.',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-200"
                  >
                    <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
            <div className="grid gap-5">
              {faqs.map((item) => (
                <Card key={item.q} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="font-display text-2xl font-semibold text-slate-950">{item.q}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-6 py-12 text-white shadow-xl lg:px-10">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_18%),radial-gradient(circle_at_80%_30%,white,transparent_14%),radial-gradient(circle_at_60%_70%,white,transparent_12%)]" />
              <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Contact</div>
                  <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                    Ready to hire the right talent with confidence?
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                    Whether you&apos;re hiring your first key engineer or scaling a global team, we&apos;re here to help. Let&apos;s discuss your hiring needs and how we can support your growth.
                  </p>
                  <div className="mt-8 grid gap-4 text-sm text-slate-300">
                    <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-emerald-300" /> hello@credencetalent.com</div>
                    <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-emerald-300" /> Global recruitment brand with international positioning</div>
                  </div>
                </div>

                <Card className="rounded-[2rem] border border-white/10 bg-white/95 p-8 text-slate-900 shadow-2xl sm:p-10">
                  <div className="space-y-6">
                    <div>
                      <div className="font-display text-3xl font-semibold text-slate-950">Start the conversation directly</div>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        We prefer a direct, high-context first conversation. Reach out by email with your hiring brief, business context, or role requirements and we&apos;ll respond personally.
                      </p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Primary Contact</div>
                      <a href="mailto:hello@credencetalent.com" className="mt-3 block text-lg font-semibold text-slate-950 hover:text-emerald-700">
                        hello@credencetalent.com
                      </a>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Best for retained search discussions, hiring plans, role briefs, and partnership conversations.
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-slate-200 px-5 py-5">
                        <div className="font-display text-2xl font-semibold text-slate-950">What to include</div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          Team context, role scope, location, hiring timeline, and any specific technical or leadership requirements.
                        </p>
                      </div>
                      <div className="rounded-3xl border border-slate-200 px-5 py-5">
                        <div className="font-display text-2xl font-semibold text-slate-950">Typical support</div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          Executive search, engineering hiring, market mapping, and strategic support for scaling teams across regions.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="mailto:hello@credencetalent.com?subject=Hiring%20Inquiry"
                        className="inline-flex items-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                      >
                        Email Credence Talent
                      </a>
                      <a
                        href="#services"
                        className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                      >
                        Review Services
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-slate-500 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <CredenceLogo height={68} />
            </div>
            <p className="mt-4 max-w-md leading-7 text-slate-600">
              Credence Talent partners with companies hiring leadership and specialist technology talent across modern engineering, cloud, and infrastructure functions.
            </p>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-slate-950">Navigation</div>
            <div className="mt-4 grid gap-3 text-slate-600">
              <a href="#services" className="transition hover:text-slate-950">Services</a>
              <a href="#about" className="transition hover:text-slate-950">Expertise</a>
              <a href="#process" className="transition hover:text-slate-950">Process</a>
              <a href="#contact" className="transition hover:text-slate-950">Contact</a>
            </div>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-slate-950">Why Credence</div>
            <p className="mt-4 leading-7 text-slate-600">
              We combine boutique search discipline with real understanding of technical roles, helping clients hire with clarity, credibility, and long-term fit.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-200 px-6 py-5 text-center text-sm text-slate-500 lg:px-8">
          &copy; 2026 Credence Talent. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
