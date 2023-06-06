/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://2023.javazone.no",
  generateRobotsTxt: true, // (optional)
  exclude: ["/api/*, /internal/*"]
  // ...other options
}
