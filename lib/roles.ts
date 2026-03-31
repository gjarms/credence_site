export type RoleCategory = {
  slug: string;
  title: string;
  summary: string;
  roles: string[];
  value: string;
};

export const roleCategories: RoleCategory[] = [
  {
    slug: 'leadership-executive',
    title: 'Leadership & Executive',
    summary:
      'Senior hires that shape delivery quality, team design, market confidence, and long-term growth.',
    roles: [
      'CTO, VP Engineering, and Head of Engineering',
      'Engineering Managers and Platform Leaders',
      'Heads of Product, Delivery, and Transformation',
      'Senior cross-functional and operational leadership roles',
    ],
    value:
      'These hires need more than title matching. We focus on stage fit, judgment, leadership depth, and how the person will influence the wider organization.',
  },
  {
    slug: 'software-engineering',
    title: 'Software Engineering',
    summary:
      'Core product and engineering hires across backend, frontend, full-stack, and distributed systems environments.',
    roles: [
      'Software Engineers and Senior Engineers',
      'Staff Engineers and Principal Engineers',
      'Frontend, Backend, and Full-Stack Developers',
      'Product Engineering and architecture-aligned technical hires',
    ],
    value:
      'We help clients hire engineers who fit the real system, team, and delivery model rather than just the job description.',
  },
  {
    slug: 'cloud-platform-infrastructure',
    title: 'Cloud, Platform & Infrastructure',
    summary:
      'Specialist hiring across cloud operations, infrastructure modernization, platform engineering, and reliability.',
    roles: [
      'Cloud Engineers and Cloud Architects',
      'Platform Engineers and Infrastructure Engineers',
      'Site Reliability Engineers and DevOps specialists',
      'Systems, production operations, and environment ownership roles',
    ],
    value:
      'These roles sit close to operational risk and technical scale. We bring stronger context around systems ownership, resilience, and platform maturity.',
  },
  {
    slug: 'security-data-ai',
    title: 'Security, Data & AI',
    summary:
      'Hiring support for high-value specialist mandates where capability depth and cross-functional credibility matter.',
    roles: [
      'Cloud Security, AppSec, and Security Engineering',
      'Data Engineers, Analytics Engineers, and ML Engineers',
      'Security leadership and applied AI roles',
      'Risk-aware technical specialists operating across engineering and business contexts',
    ],
    value:
      'We support searches where technical specialization must be balanced with communication quality, stakeholder alignment, and strong market representation.',
  },
  {
    slug: 'product-delivery-quality',
    title: 'Product, Delivery & Quality',
    summary:
      'Roles that connect execution, planning, customer outcomes, and delivery discipline.',
    roles: [
      'Product Managers and Product Leaders',
      'Technical Program and Delivery Managers',
      'QA, Test Automation, and Quality leadership roles',
      'Cross-functional execution and transformation support hires',
    ],
    value:
      'These roles often sit between technical teams and business outcomes. We help define them clearly and calibrate the shortlist accordingly.',
  },
];
