/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://salahaat.vercel.app/",
  generateRobotsTxt: true, // (optional)
  exclude: ["/api/*", "/order/*"],
  // ...other options
};
