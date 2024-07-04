export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '',
      },
      sitemap: 'https://koikoi.vercel.app/sitemap.xml',
    }
  }