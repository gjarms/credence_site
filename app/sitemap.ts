import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { sectorPages } from '@/lib/sectors';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/engagement-models`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/roles`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/sectors`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...sectorPages.map((sector) => ({
      url: `${siteUrl}/sectors/${sector.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
