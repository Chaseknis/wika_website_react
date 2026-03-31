const path = require('path');
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// Assuming blogContent is an array of blog posts with unique IDs
const blogContent = [
  { id: 1, title: 'First Blog Post' },
  { id: 2, title: 'Second Blog Post' },
  // Add more blog posts here
];

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/translation', changefreq: 'monthly', priority: 0.6 },
  { url: '/faq', changefreq: 'monthly', priority: 0.5 },
  { url: '/blog', changefreq: 'monthly', priority: 0.5 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
  // Add dynamic blog post routes
  ...blogContent.map((post) => ({
    url: `/blog/${post.id}`,
    changefreq: 'monthly',
    priority: 0.6,
  })),
];

(async () => {
  const sitemapStream = new SitemapStream({ hostname: 'https://www.wikatranslate.net' });

  // Write the static and dynamic URLs to the sitemap
  links.forEach((link) => sitemapStream.write(link));
  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream).then((data) => data.toString());

  // Write the generated sitemap to the public folder
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  // eslint-disable-next-line no-console
  console.log('✅ Sitemap generated successfully!');
})();
