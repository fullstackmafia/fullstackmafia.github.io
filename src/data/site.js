// Site-wide content. Edit this file to update the timeline, links and skills.

export const person = {
  name: 'Raphael Ugwu',
  role: 'Senior technical writer',
  location: 'Toronto, Canada',
  email: 'ugwuraphael@gmail.com',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/raphaelugwu/' },
    { label: 'GitHub', url: 'https://github.com/fullstackmafia' },
  ],
};

// Newest first. `slug` links the row to a case study in src/content/work/.
export const experience = [
  {
    company: 'Exchange Solutions',
    role: 'Senior Technical Writer',
    dates: 'Feb 2026 to present',
    location: 'Toronto',
    note: 'Sole writer for the ES Loyalty platform: console guides, API reference, data feeds and release notes.',
    slug: 'exchange-solutions',
  },
  {
    company: 'Nautical Commerce',
    role: 'Senior Technical Writer',
    dates: 'Oct 2024 to Dec 2025',
    location: 'Toronto',
    note: 'Help guides, API reference and weekly release notes for a multi-vendor marketplace platform.',
    slug: 'nautical-commerce',
  },
  {
    company: 'Instacart',
    role: 'Technical Writer (contract)',
    dates: 'Jan 2024 to Jun 2024',
    location: 'Toronto',
    note: 'Concept pages, API endpoints and integration tutorials for the Instacart Developer Platform.',
    slug: 'instacart',
  },
  {
    company: 'Electronic Arts',
    role: 'Technical Writer (contract)',
    dates: 'Dec 2023 to Mar 2024',
    location: 'Vancouver',
    note: 'Developer documentation for internal tools, written from scratch, plus Confluence knowledge bases and archived GitLab docs.',
  },
  {
    company: 'Playtech',
    role: 'Technical Writer',
    dates: 'Apr 2023 to Dec 2023',
    location: 'London',
    note: 'Developer programme documentation for game studios, internal API docs, in-game copy and localisation processes.',
  },
  {
    company: 'Reloadly',
    role: 'Technical Writer, API Documentation',
    dates: 'Apr 2021 to Mar 2023',
    location: 'Lagos',
    note: 'Wrote the API and SDK documentation from scratch and ran the developer portal as its product owner.',
    slug: 'reloadly',
  },
  {
    company: 'Flutterwave',
    role: 'Developer Experience Engineer and Technical Writer',
    dates: 'Jul 2019 to Mar 2021',
    location: 'Lagos',
    note: 'Tutorials and v3 API documentation for a payments gateway, plus technical account management for tier one customers.',
    slug: 'flutterwave',
  },
  {
    company: 'ForLoop Africa',
    role: 'Developer Advocate and Technical Writer',
    dates: 'May 2017 to Jun 2019',
    location: 'Lagos',
    note: 'JavaScript tutorials for LogRocket and Scotch.io, and developer conferences averaging 1,000 attendees.',
  },
];

export const docs = [
  {
    title: 'Nautical Help Guide',
    url: 'https://guide.nauticalcommerce.com/',
    note: 'Dashboard and storefront help content.',
  },
  {
    title: 'Nautical Commerce API reference',
    url: 'https://guide.nauticalcommerce.com/api/v1-89/introduction/welcome',
    note: 'GraphQL API documentation.',
  },
  {
    title: 'Reloadly developer portal',
    url: 'https://developers.reloadly.com/',
    note: 'Product docs I wrote from scratch and owned.',
  },
  {
    title: 'Reloadly API reference',
    url: 'https://github.com/Reloadly/reloadly-api-docs',
    note: 'OpenAPI source, published with Redocly.',
  },
];

export const writing = [
  {
    title: 'One Writer, Four Systems, Six Months',
    url: 'https://exchangesolutions.com/resources/documentation-team-of-one/',
    where: 'Exchange Solutions, 2026',
    note: 'How a documentation team of one unified four systems into a single docs-as-code site.',
  },
  {
    title: 'Front-end engineering tutorials',
    url: 'https://blog.logrocket.com/author/raphaelugwu/',
    where: 'LogRocket',
    note: '220k cumulative views.',
  },
  {
    title: 'Getting Started with Svelte 3',
    url: 'https://www.digitalocean.com/community/tutorials/getting-started-with-svelte-3',
    where: 'DigitalOcean, first published on Scotch.io',
  },
  {
    title: 'Friendly fraud: mitigating its footprints on global e-commerce',
    url: 'https://flutterwave.com/gb/blog/friendly-fraud-mitigating-its-footprints-on-global-e-commerce',
    where: 'Flutterwave blog',
  },
  {
    title: 'Developer experience articles',
    url: 'https://www.reloadly.com/blog/category/developer-blog/',
    where: 'Reloadly developer blog',
  },
  {
    title: 'Open source technical writing',
    url: 'https://dev.to/fullstackmafia',
    where: 'Dev.to',
  },
];

export const workshops = [
  {
    title: 'Demystifying airtime payments with REST APIs',
    url: 'https://youtu.be/L4cO5qJ2pQE',
  },
  {
    title: "Getting started with Reloadly's Node.js SDK",
    url: 'https://youtu.be/fbYtdT0kTS4',
  },
];

export const skills = [
  {
    group: 'What I write',
    items:
      'API references, SDK docs, quick starts, integration guides, tutorials, console and end-user help, data feed specifications, release notes, internal knowledge bases, style guides.',
  },
  {
    group: 'How I work',
    items:
      'Docs-as-code in Git, information architecture, migrations from legacy tools, code-to-docs automation, AI-assisted drafting and review, docs analytics.',
  },
  {
    group: 'Docs tooling',
    items:
      'Docusaurus, Markdown and MDX, Postman, Swagger and OpenAPI, Redocly, ReadMe, GitBook, GraphQL, Confluence, Intercom, RoboHelp, MadCap Flare, Oxygen XML, Google Analytics, Figma, Lucidchart.',
  },
  {
    group: 'AI tools',
    items: 'Claude (Projects, Cowork), Claude Code, ChatGPT, Gemini, ElevenLabs.',
  },
  {
    group: 'Languages',
    items: 'JavaScript (Node.js, React, Vue, Svelte), Python, HTML and CSS.',
  },
];
