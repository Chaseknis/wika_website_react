const path = require("path");
const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/services", changefreq: "weekly", priority: 0.8 },
  { url: "/translation", changefreq: "monthly", priority: 0.6 },
  { url: "/faq", changefreq: "monthly", priority: 0.5 },
  { url: "/contact", changefreq: "monthly", priority: 0.5 },
];

(async () => {
  const sitemapStream = new SitemapStream({ hostname: "https://www.wikatranslate.net" });

  links.forEach((link) => sitemapStream.write(link));
  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream).then((data) => data.toString());

  fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);

  console.log("✅ Sitemap generated successfully!");
})();