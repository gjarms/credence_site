export type SectorPage = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  summary: string;
  intro: string;
  heroImage: string;
  marketFocus: string[];
  typicalRoles: string[];
  hiringChallenges: string[];
  whyCredence: string[];
  engagementSignals: string[];
};

export const sectorPages: SectorPage[] = [
  {
    slug: 'technology-hiring',
    label: 'Technology Hiring',
    eyebrow: 'Sector Focus',
    title: 'Technology hiring for companies building modern software teams',
    summary:
      'Search support across software engineering, platform, DevOps, cloud, QA, data, and security functions where technical credibility matters.',
    intro:
      'Credence Talent supports companies hiring into product-led and engineering-led environments where role definition, capability assessment, and market representation all affect hiring outcomes. We work best where the mandate is important, the talent market is competitive, and the shortlist needs to be precise.',
    heroImage: '/sectors/technology-hiring.svg',
    marketFocus: [
      'Software engineering organizations scaling core product teams',
      'Platform and infrastructure functions modernizing delivery environments',
      'Engineering leaders building stronger technical org design',
      'Growth-stage and enterprise businesses hiring into complex delivery teams',
    ],
    typicalRoles: [
      'Software Engineers and Staff Engineers',
      'Platform Engineers, SREs, and DevOps specialists',
      'Cloud and Infrastructure Engineers',
      'Engineering Managers, Heads of Engineering, and technical leaders',
      'QA, test automation, security, and data engineering roles',
    ],
    hiringChallenges: [
      'Differentiating strong engineers from keyword-matched applicants',
      'Balancing speed with technical judgment and team fit',
      'Representing the opportunity clearly to high-value passive talent',
      'Aligning hiring decisions with architecture, tooling, and delivery maturity',
    ],
    whyCredence: [
      'We understand the language of modern software delivery and infrastructure.',
      'We work comfortably across engineering depth, leadership scope, and business context.',
      'We focus on better-calibrated shortlists rather than noisy pipelines.',
    ],
    engagementSignals: [
      'You are hiring into engineering, platform, DevOps, cloud, QA, or security.',
      'The role needs stronger technical understanding than a generalist recruiter typically brings.',
      'You need a partner who can represent the role with clarity and credibility in the market.',
    ],
  },
  {
    slug: 'leadership-search',
    label: 'Leadership Search',
    eyebrow: 'Executive Search',
    title: 'Leadership search for critical hires where judgment and alignment are non-negotiable',
    summary:
      'Focused executive and senior leadership hiring across engineering, product, operations, and business functions.',
    intro:
      'Leadership hiring shapes culture, execution quality, and long-term growth. Credence Talent supports founder-led companies, scaling teams, and established organizations that need thoughtful search support for senior appointments, not a volume-led recruitment process.',
    heroImage: '/sectors/leadership-search.svg',
    marketFocus: [
      'Founder-led businesses making key first or second leadership hires',
      'Scaling companies strengthening engineering, product, or delivery leadership',
      'Organizations needing more discreet search execution for senior mandates',
      'Boards and executives hiring leaders who must align quickly and credibly',
    ],
    typicalRoles: [
      'VP Engineering, CTO, and Head of Engineering',
      'Directors and Heads of Product or Delivery',
      'Operations, transformation, and technical program leadership',
      'Senior commercial or cross-functional leadership roles',
    ],
    hiringChallenges: [
      'Assessing leadership capability beyond polished interview performance',
      'Balancing domain expertise with stage fit and cultural alignment',
      'Maintaining discretion while attracting strong senior candidates',
      'Managing candidate momentum through a longer, higher-stakes process',
    ],
    whyCredence: [
      'We approach leadership search with structure, discipline, and careful calibration.',
      'We understand how senior hires influence execution, trust, and team shape.',
      'We present leadership candidates with a high-touch, brand-conscious process.',
    ],
    engagementSignals: [
      'The role will shape team structure, execution quality, or business direction.',
      'The search needs discretion, clarity, and stronger judgment than a broad agency model provides.',
      'You want a boutique partner who reflects your standards in every candidate interaction.',
    ],
  },
  {
    slug: 'cloud-infrastructure',
    label: 'Cloud & Infrastructure',
    eyebrow: 'Technical Specialism',
    title: 'Cloud and infrastructure recruitment for resilient, scalable technical environments',
    summary:
      'Hiring support for platform, cloud operations, reliability, systems, networking, and infrastructure transformation roles.',
    intro:
      'Cloud and infrastructure hiring often sits at the intersection of engineering, operations, reliability, cost, and risk. Credence Talent helps clients hire into these functions with a clearer understanding of how the role operates inside the broader technical ecosystem.',
    heroImage: '/sectors/cloud-infrastructure.svg',
    marketFocus: [
      'Platform modernization and cloud migration programs',
      'Reliability, observability, and operational maturity initiatives',
      'Infrastructure teams supporting distributed product organizations',
      'Enterprises improving resilience, security, and environment standardization',
    ],
    typicalRoles: [
      'Cloud Engineers and Cloud Architects',
      'Platform Engineers, Infrastructure Engineers, and Systems specialists',
      'Site Reliability Engineers and DevOps leaders',
      'Network, security, and production operations roles',
    ],
    hiringChallenges: [
      'Finding candidates who combine technical depth with operational judgment',
      'Distinguishing between tooling exposure and real systems ownership',
      'Hiring across overlapping areas like cloud, platform, security, and reliability',
      'Explaining the real scope of the environment to the right candidates',
    ],
    whyCredence: [
      'Our background aligns naturally with platform, cloud, infrastructure, and operations hiring.',
      'We understand how these roles support delivery, resilience, and technical scale.',
      'We can position the mandate in a way that resonates with serious technical talent.',
    ],
    engagementSignals: [
      'You are building or strengthening platform, cloud, reliability, or infrastructure teams.',
      'The role spans architecture, operations, tooling, and real production responsibility.',
      'You need candidates who understand systems, not just certifications or buzzwords.',
    ],
  },
  {
    slug: 'global-hiring',
    label: 'Global Hiring',
    eyebrow: 'International Search',
    title: 'Global hiring support for companies building teams across regions',
    summary:
      'Search support for organizations hiring across the US, India, Europe, and remote-first markets with a premium, high-touch approach.',
    intro:
      'Global hiring requires more than widening the search geography. It demands better role framing, stronger calibration around communication and market context, and a process that can carry credibility across regions. Credence Talent supports that work with a structured, international mindset.',
    heroImage: '/sectors/global-hiring.svg',
    marketFocus: [
      'Companies building distributed engineering and leadership teams',
      'Organizations comparing onshore, offshore, and remote hiring strategies',
      'Growth businesses expanding into new talent markets',
      'Teams that need quality control across multiple regions and time zones',
    ],
    typicalRoles: [
      'Engineering and platform roles across remote or multi-region teams',
      'Regional leadership and delivery hires',
      'Operations, support, and shared-services functions',
      'Specialist mandates where talent availability varies by market',
    ],
    hiringChallenges: [
      'Balancing cost, capability, communication, and long-term fit',
      'Understanding how the same job spec lands differently across markets',
      'Maintaining candidate quality and consistency across geographies',
      'Creating a process that feels credible to both clients and candidates internationally',
    ],
    whyCredence: [
      'We work with a global mindset while keeping the service model focused and boutique.',
      'We understand the practical trade-offs involved in distributed hiring decisions.',
      'We help clients stay selective while widening access to stronger talent markets.',
    ],
    engagementSignals: [
      'You are hiring across multiple regions or evaluating where to build next.',
      'The role needs stronger market mapping and communication across geographies.',
      'You want global reach without losing quality control or candidate experience.',
    ],
  },
  {
    slug: 'fintech-recruitment',
    label: 'Fintech Recruitment',
    eyebrow: 'Industry Focus',
    title: 'Fintech recruitment for regulated, high-trust environments',
    summary:
      'Search support for fintech businesses hiring across engineering, platform, security, product, and leadership roles where reliability and trust are central.',
    intro:
      'Fintech hiring often sits at the intersection of technology depth, regulated environments, security discipline, and customer trust. Credence Talent supports fintech companies that need credible search execution for roles that affect systems resilience, delivery quality, compliance posture, and product scale.',
    heroImage: '/sectors/fintech-recruitment.svg',
    marketFocus: [
      'Payments, lending, wealth, banking infrastructure, and embedded finance environments',
      'Product and engineering teams building secure, reliable transaction systems',
      'Scale-stage fintech companies strengthening leadership, platform, and delivery capability',
      'Organizations modernizing legacy financial systems without compromising control',
    ],
    typicalRoles: [
      'Backend, platform, data, and security engineering roles',
      'Engineering managers, heads of engineering, and technical leadership hires',
      'Risk, compliance-adjacent technology roles, and operational platform mandates',
      'Product and delivery roles aligned to regulated technical environments',
    ],
    hiringChallenges: [
      'Finding candidates who understand both technical complexity and operational risk',
      'Balancing product speed with governance, reliability, and security expectations',
      'Representing a regulated environment well enough to attract the right caliber of talent',
      'Assessing candidates for judgment, systems ownership, and stakeholder maturity',
    ],
    whyCredence: [
      'We work well in high-trust hiring environments where quality and judgment matter.',
      'We understand how engineering, platform, risk, and reliability concerns overlap in fintech.',
      'We help clients present demanding technical roles with clarity rather than noise.',
    ],
    engagementSignals: [
      'You are hiring into a fintech environment where trust, security, and system quality are central.',
      'The role needs more than generic recruiter outreach to attract serious candidates.',
      'You want a search partner who understands why reliability and credibility affect hiring outcomes.',
    ],
  },
  {
    slug: 'cybersecurity-recruitment',
    label: 'Cybersecurity Recruitment',
    eyebrow: 'Security Search',
    title: 'Cybersecurity recruitment for organizations protecting critical systems and data',
    summary:
      'Hiring support across cloud security, AppSec, security engineering, governance, detection, and security leadership roles.',
    intro:
      'Cybersecurity hiring requires more than matching certifications to job specs. The strongest hires combine technical depth, sound judgment, communication ability, and the credibility to operate across engineering, infrastructure, and risk stakeholders. Credence Talent supports clients looking for that level of fit.',
    heroImage: '/sectors/cybersecurity-recruitment.svg',
    marketFocus: [
      'Organizations strengthening cloud, platform, and application security maturity',
      'Businesses building security programs alongside product and infrastructure scale',
      'Companies hiring security leadership to shape standards, posture, and response capability',
      'Environments where resilience, governance, and secure delivery all matter at once',
    ],
    typicalRoles: [
      'Cloud Security Engineers and Security Architects',
      'Application Security and Product Security specialists',
      'Detection, response, and security operations roles',
      'Security managers, heads of security, and strategic security leadership hires',
    ],
    hiringChallenges: [
      'Separating true security ownership from surface-level tooling familiarity',
      'Finding candidates who can influence engineering culture, not just enforce controls',
      'Balancing depth in one area with enough breadth across cloud, infrastructure, and applications',
      'Running a search process that serious security candidates respect',
    ],
    whyCredence: [
      'We understand security hiring in the context of real engineering and infrastructure environments.',
      'We can position security mandates credibly to candidates who are selective about where they move.',
      'We focus on fit, practical capability, and stakeholder alignment rather than volume.',
    ],
    engagementSignals: [
      'You are hiring into cloud security, AppSec, security engineering, or security leadership.',
      'The role needs stronger technical and contextual understanding than a generic agency process provides.',
      'You need candidates who can operate with authority across systems, teams, and risk concerns.',
    ],
  },
];

export function getSectorBySlug(slug: string) {
  return sectorPages.find((sector) => sector.slug === slug);
}
