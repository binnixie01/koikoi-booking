const baseUrl = "https://koikoi.vercel.app"
 import {place} from '@/components/place'

export default function sitemap() {
    const places= place.map((p) => ({
        url: `${baseUrl}/explore/${p.id}`,
        lastModified: new Date(),
      }))
    return [
      {
        url: 'https://koikoi.vercel.app',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://koikoi.vercel.app/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://koikoi.vercel.app/explore',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      ...places
    ]
  }