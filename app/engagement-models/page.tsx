import Link from 'next/link';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Building2, Handshake } from 'lucide-react';

export const metadata = {
  title: 'Engagement Models | Credence Talent',
  description:
    'Explore Credence Talent engagement models across permanent hiring, contract / C2C support, and RPO-style embedded recruitment.',
};

const models = [
  {
    icon: BriefcaseBusiness,
    title: 'Permanent Hiring (FTE)',
    summary:
      'Support for full-time employee hiring across leadership, Engineering, Cloud, Infrastructure, Security, Product, and other specialist mandates.',
    bestFor: [
      'Critical hires where long-term fit matters',
      'Leadership and specialist technical roles',
      'Teams building core internal capability',
    ],
    value:
      'We help define the brief, calibrate the market, and present a focused shortlist for roles that need stronger judgment than a volume-led agency process.',
  },
  {
    icon: Handshake,
    title: 'Contract / C2C',
    summary:
      'Flexible support for contract and Corp-to-Corp hiring when clients need specialist capability, delivery support, or project-based expertise.',
    bestFor: [
      'Shorter-term delivery or transformation needs',
      'Project-based technical capability',
      'Teams needing speed without lowering standards',
    ],
    value:
      'This model works when you need access to specific skills, faster deployment, or greater flexibility while still expecting credible screening and stronger role alignment.',
  },
  {
    icon: Building2,
    title: 'RPO Support',
    summary:
      'Recruitment Process Outsourcing for companies that need a more embedded hiring partner operating as an extension of the internal team.',
    bestFor: [
      'Scaling businesses hiring across multiple roles',
      'Teams with limited in-house recruiting bandwidth',
      'Focused hiring programs that need structure and continuity',
    ],
    value:
      'We can support part or all of the recruitment function with a more integrated, process-led model that improves consistency, communication, and hiring momentum.',
  },
];

export default function EngagementModelsPage() {
  return (
    <main className="min-h-screen bg-[#f8faf9] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-slate-950">
            Credence Talent
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <Link href="/" className="transition hover:text-slate-950">
              Home
            </Link>
            <Link href="/sectors" className="transition hover:text-slate-950">
              Sectors
            </Link>
            <Link href="/roles" className="transition hover:text-slate-950">
              Roles
            </Link>
            <a href="mailto:hradmin@credencetalent.com" className="transition hover:text-slate-950">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Engagement Models
            </div>
            <h1 className="font-display mt-4 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Flexible hiring support built around how your team actually needs to hire.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Not every hiring mandate needs the same delivery model. Credence Talent supports
              permanent hiring, contract and C2C mandates, and RPO-style embedded recruiting for
              companies that need stronger search discipline and clearer market representation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6">
          {models.map((model) => {
            const Icon = model.icon;
            return (
              <article
                key={model.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-slate-950">
                      {model.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-600">{model.summary}</p>
                    <p className="mt-5 text-sm leading-7 text-slate-700">{model.value}</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                      Best For
                    </div>
                    <div className="mt-5 grid gap-4">
                      {model.bestFor.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                          <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-slate-200 bg-slate-950 px-8 py-10 text-white shadow-xl lg:px-10">
            <div className="max-w-4xl">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Choosing The Right Model
              </div>
              <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight">
                The right engagement structure depends on role criticality, hiring pace, and team capacity.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                If you are unsure whether a mandate is better suited to FTE, Contract / C2C, or a
                more embedded RPO-style model, we can help shape the approach before the search
                begins.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:hradmin@credencetalent.com?subject=Engagement%20Model%20Discussion"
                  className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
                >
                  Discuss Engagement Models
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link
                  href="/sectors"
                  className="inline-flex items-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  Explore Sector Pages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-slate-500 md:grid-cols-[1.1fr_0.9fr_1fr] lg:px-8">
          <div>
            <div className="font-display text-2xl font-semibold text-slate-950">Credence Talent</div>
            <p className="mt-4 max-w-md leading-7 text-slate-600">
              Boutique, high-trust search support across leadership, specialist technology hiring, and embedded recruitment models.
            </p>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-slate-950">Navigate</div>
            <div className="mt-4 grid gap-3 text-slate-600">
              <Link href="/" className="transition hover:text-slate-950">
                Home
              </Link>
              <Link href="/sectors" className="transition hover:text-slate-950">
                Sector Pages
              </Link>
              <Link href="/roles" className="transition hover:text-slate-950">
                Roles
              </Link>
            </div>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-slate-950">Discuss a Search</div>
            <p className="mt-4 leading-7 text-slate-600">
              Share the hiring brief at{' '}
              <a href="mailto:hradmin@credencetalent.com" className="font-medium text-slate-950 hover:text-emerald-700">
                hradmin@credencetalent.com
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
