import type { MetadataRoute } from 'next';

const SITE_URL = 'https://gana-faye.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    {
      path: '/projets/web',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/projets/mobile',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/laboratoires',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/certifications',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' as const },
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}