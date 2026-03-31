'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
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
import { sectorPages } from '@/lib/sectors';

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
      'We help companies hire across North America, Europe, India, LATAM, and remote markets, balancing cost, capability, and cultural alignment for distributed teams.',
  },
  {
    icon: Handshake,
    title: 'Strategic Hiring Partner',
    description:
      'Beyond filling roles, we act as a long-term hiring partner, supporting workforce planning, role definition, and scaling strategies for growing organizations.',
  },
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

const engagementModels = [
  {
    title: 'Permanent Hiring (FTE)',
    description:
      'Support for full-time employee hiring across leadership, Engineering, Cloud, Infrastructure, Security, Product, and other specialist mandates where long-term fit matters.',
  },
  {
    title: 'Contract / C2C',
    description:
      'Flexible support for contract and Corp-to-Corp hiring when clients need specialist capability, delivery support, or project-based expertise through independent business entities or consulting structures.',
  },
  {
    title: 'RPO Support',
    description:
      'Recruitment Process Outsourcing for companies that need a more embedded hiring partner. We can support part or all of the recruitment function as an extension of the internal team, especially during scale-up phases or targeted hiring programs.',
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
    text: 'We manage interview flow, candidate engagement, offer strategy, and final negotiations while supporting smooth onboarding, long-term alignment, and ongoing follow-up after candidates join.',
  },
];

const proofBlocks = [
  {
    title: 'Calibrated shortlists for technical depth',
    text:
      'We help clients define the mandate properly, reduce noise in the search, and reach candidates who align with the actual technical and business context of the role.',
  },
  {
    title: 'Stronger candidate representation in the market',
    text:
      'Our process is designed to represent client opportunities well, communicate clearly, and create confidence with high-value candidates from first outreach to final close.',
  },
  {
    title: 'Search support built for scale and complexity',
    text:
      'From single critical hires to broader hiring programs, we bring structure, consistency, and better search discipline across leadership and specialist mandates.',
  },
];

const faqs = [
  {
    q: 'What kinds of roles do you support best?',
    a: 'We work best on leadership and specialist mandates across Engineering, Cloud, Platform, Infrastructure, Security, Data, Product, Delivery, and adjacent technical functions where role clarity and candidate quality matter.',
  },
  {
    q: 'Do you support permanent, contract, and RPO hiring models?',
    a: 'Yes. We support permanent hiring, Contract / C2C mandates, and more embedded RPO-style recruitment support depending on the pace, structure, and complexity of the hiring need.',
  },
  {
    q: 'Can you support international or multi-region hiring?',
    a: 'Yes. We support hiring across North America, Europe, India, LATAM, and remote markets, helping clients balance capability, communication quality, and long-term fit across regions.',
  },
  {
    q: 'How are you different from a generalist recruitment agency?',
    a: 'Our work is designed for higher-trust searches where technical understanding, stronger market representation, and a more disciplined shortlist matter more than raw candidate volume.',
  },
  {
    q: 'What happens after the shortlist stage?',
    a: 'We stay involved through interview flow, candidate engagement, offer strategy, final negotiations, onboarding support, and post-join follow-up so the search is carried through properly to the close.',
  },
  {
    q: 'What kinds of companies do you work best with?',
    a: 'We work well with founder-led businesses, scaling companies, and established organizations hiring into important leadership or specialist roles where quality, communication, and credibility are central.',
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

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    const form = event.currentTarget;

    const formData = new FormData(form);
    const payload = {
      firstName: String(formData.get('firstName') ?? '').trim(),
      lastName: String(formData.get('lastName') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error || 'Unable to send your message right now.');
      }

      form.reset();
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to send your message right now.'
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-700">First name</label>
        <input id="firstName" name="firstName" required className="h-12 w-full rounded-2xl border border-slate-300 px-4" placeholder="First name" />
      </div>
      <div>
        <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-700">Last name</label>
        <input id="lastName" name="lastName" required className="h-12 w-full rounded-2xl border border-slate-300 px-4" placeholder="Last name" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Work email</label>
        <input id="email" type="email" name="email" required className="h-12 w-full rounded-2xl border border-slate-300 px-4" placeholder="you@company.com" />
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">Company</label>
        <input id="company" name="company" required className="h-12 w-full rounded-2xl border border-slate-300 px-4" placeholder="Company name" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">How can we help?</label>
        <textarea id="message" name="message" required className="min-h-[140px] w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Tell us about the role, hiring challenge, or growth plan." />
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="h-12 rounded-2xl bg-slate-950 px-6 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
        </button>
        {status === 'success' ? (
          <p className="text-sm text-emerald-700">Thanks. Your inquiry has been sent successfully.</p>
        ) : null}
        {status === 'error' ? (
          <p className="text-sm text-rose-700">{errorMessage}</p>
        ) : null}
      </div>
    </form>
  );
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
            <Link href="/engagement-models" className="transition hover:text-slate-950">What We Do</Link>
            <Link href="/sectors" className="transition hover:text-slate-950">Sectors</Link>
            <Link href="/roles" className="transition hover:text-slate-950">Roles</Link>
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
              <Card className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
                <div className="relative">
                  <img
                    src="/sectors/photos/leadership-search.jpg"
                    alt="Executive search and leadership hiring"
                    className="h-[280px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-medium text-emerald-200">Why Credence Talent</div>
                        <div className="font-display mt-2 text-3xl font-semibold tracking-tight">A premium, trust-first search partner</div>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-3 text-emerald-200 backdrop-blur-sm">
                        <BadgeCheck className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-sm leading-7 text-slate-600">
                    Credence Talent supports critical hiring mandates with a more focused, high-touch search process. We combine technical understanding, clear communication, and disciplined market mapping to deliver stronger shortlists for leadership and specialist roles.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      'Executive and specialist technology search',
                      'Global-market hiring support',
                      'High-credibility candidate engagement',
                      'Relationship-led, premium delivery',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-sm text-slate-700">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
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
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Operating Principles</div>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                The standards behind each search mandate
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                These are the principles that shape how we represent clients, engage candidates, and move a search from briefing through close.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: Building2,
                  title: 'Boutique Model',
                  text: 'A focused search approach with higher attention on role quality, communication, and fit.',
                },
                {
                  icon: Users2,
                  title: 'Client + Candidate First',
                  text: 'A process designed to protect the client brand while creating a better candidate experience.',
                },
                {
                  icon: Clock3,
                  title: 'Structured Execution',
                  text: 'Clear process design, disciplined follow-through, and timely search movement from brief to close.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Credibility Throughout',
                  text: 'Thoughtful market representation at every touchpoint, especially for leadership and specialist roles.',
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <Card
                    key={item.title}
                    className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-display mt-5 text-2xl font-semibold text-slate-950">
                      {item.title}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50/80 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Experience Snapshot</div>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Technical context and search judgment built over time
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                This background informs how we assess specialist roles, calibrate shortlists, and support hiring decisions across different business stages.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <Card className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="font-display text-4xl font-semibold tracking-tight text-slate-950">20+ Years of Experience</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Experience shaped across enterprise technology, infrastructure, and modern software delivery environments where hiring quality directly affects execution.
                </p>
              </Card>
              <Card className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="font-display text-4xl font-semibold tracking-tight text-slate-950">Enterprise to Growth-Stage</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Perspective built across large-scale organizations and fast-moving growth environments, with a clear understanding of how hiring priorities change by stage.
                </p>
              </Card>
              <Card className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="font-display text-4xl font-semibold tracking-tight text-slate-950">Engineering, Cloud & Platform</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Strong familiarity with software engineering, cloud platforms, infrastructure, security, DevOps, and platform teams, helping us assess roles with greater context.
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

        <section id="what-we-do" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="What We Do"
              title="Flexible hiring support across permanent, contract, and embedded recruitment models"
              description="Clients do not always need the same hiring model. We support full-time hiring, contract and C2C mandates, and RPO-style engagement where a more embedded recruiting partner adds value."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {engagementModels.map((model) => (
                <Card key={model.title} className="rounded-[2rem] border border-slate-200 bg-slate-50/70 p-8 shadow-sm">
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-slate-950">{model.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{model.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/engagement-models"
                className="inline-flex items-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Explore Engagement Models
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
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
                    Credence Talent supports hiring across Engineering, Cloud, Infrastructure, Security, Digital Transformation, and growth-stage technology functions with a premium, focused positioning. We work across both Industry contexts and Core Technologies so clients can see the depth behind each search.
                  </p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      'Leadership and specialist mandates',
                      'North America, Europe, India, and LATAM',
                      'Industry context plus technical depth',
                      'Dedicated pages for buyer review',
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/sectors"
                      className="inline-flex items-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                    >
                      View All Sector Pages
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:col-span-2">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">Industry</div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {sectorPages
                        .filter((sector) =>
                          ['leadership-search', 'global-hiring', 'fintech-recruitment'].includes(sector.slug)
                        )
                        .map((sector) => (
                          <Link
                            key={sector.slug}
                            href={`/sectors/${sector.slug}`}
                            className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 text-sm text-slate-200 transition hover:border-emerald-300/40 hover:bg-white/10"
                          >
                            <div className="font-semibold text-white">{sector.label}</div>
                            <div className="mt-2 text-slate-300">{sector.summary}</div>
                          </Link>
                        ))}
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:col-span-2">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">Core Technologies</div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {sectorPages
                        .filter((sector) =>
                          ['technology-hiring', 'cloud-infrastructure', 'cybersecurity-recruitment'].includes(sector.slug)
                        )
                        .map((sector) => (
                          <Link
                            key={sector.slug}
                            href={`/sectors/${sector.slug}`}
                            className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 text-sm text-slate-200 transition hover:border-emerald-300/40 hover:bg-white/10"
                          >
                            <div className="font-semibold text-white">{sector.label}</div>
                            <div className="mt-2 text-slate-300">{sector.summary}</div>
                          </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeading eyebrow="Expertise" title="Built on deep experience across Engineering, Cloud, and Enterprise Systems" description="Credence Talent brings hands-on understanding of modern software delivery, helping companies hire across the full SDLC with confidence." />
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
            <SectionHeading eyebrow="Search Value" title="How we create value in high-trust hiring environments" description="Where the mandate is important, the process needs to do more than generate applicants. It needs to improve calibration, market representation, and decision quality." />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {proofBlocks.map((item) => (
                <Card key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <div className="font-display mt-6 text-2xl font-semibold text-slate-950">{item.title}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                </Card>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/roles"
                className="inline-flex items-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Explore Roles We Cover
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Candidate Experience"
            title="How the search feels to the market matters"
            description="This part of the process shapes candidate confidence, client reputation, and the overall quality of engagement during a critical hire."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-xl">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Candidate Experience</div>
              <h3 className="font-display mt-4 text-4xl font-semibold tracking-tight">Professional representation matters</h3>
              <p className="mt-5 text-base leading-8 text-slate-300">
                The strongest recruitment brands do more than fill jobs. They represent clients well in the market, communicate clearly, and create confidence throughout the process.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-slate-300">
                Strong candidate experience protects your brand while helping the process hold momentum through interview, offer, and onboarding.
              </div>
            </Card>
            <div>
              <div className="max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Client Questions</div>
                <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                  Practical answers for buyers evaluating the search partner
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  These are the questions clients typically ask when they want to understand fit, delivery model, and how involved we stay throughout the search.
                </p>
              </div>
              <div className="mt-6 grid gap-4 xl:grid-cols-2">
              {faqs.map((item) => (
                <Card key={item.q} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="font-display text-2xl font-semibold text-slate-950">{item.q}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
                </Card>
              ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-12 text-white shadow-xl lg:px-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(148,163,184,0.12),transparent_24%)]" />
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
                    <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-emerald-300" /> hradmin@credencetalent.com</div>
                    <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-emerald-300" /> Supporting hiring across North America, Europe, India, and LATAM</div>
                  </div>
                  <p className="mt-8 max-w-xl text-sm leading-7 text-slate-400">
                    All inquiries are handled confidentially. Share as much context as you need, and we&apos;ll respond directly after reviewing the brief.
                  </p>
                </div>

                <Card className="rounded-[2rem] border border-white/10 bg-white/95 p-8 text-slate-900 shadow-2xl sm:p-10">
                  <div>
                    <div className="font-display text-3xl font-semibold text-slate-950">Start the conversation directly</div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Share your hiring brief, business context, role scope, and timeline. We&apos;ll review the inquiry and respond directly.
                    </p>
                  </div>
                  <div className="mt-8">
                    <ContactForm />
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
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-slate-600">
              <a href="#services" className="transition hover:text-slate-950">Services</a>
              <Link href="/engagement-models" className="transition hover:text-slate-950">What We Do</Link>
              <Link href="/sectors" className="transition hover:text-slate-950">Sectors</Link>
              <Link href="/roles" className="transition hover:text-slate-950">Roles</Link>
              <a href="#about" className="transition hover:text-slate-950">Expertise</a>
              <a href="#process" className="transition hover:text-slate-950">Process</a>
              <a href="#insights" className="transition hover:text-slate-950">Insights</a>
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
