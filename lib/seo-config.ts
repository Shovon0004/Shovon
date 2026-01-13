// lib/seo-config.ts - SEO Configuration and Utilities
export const SEO_CONFIG = {
  site: {
    name: 'Shovon Halder',
    domain: 'shovon-halder.com',
    url: 'https://shovon-halder.com',
    description: 'Professional portfolio and projects of Shovon Halder, a DevOps Engineer and Full-Stack Web Developer',
    locale: 'en_US',
    type: 'website',
  },
  author: {
    name: 'Shovon Halder',
    email: 'shovonhalder04@gmail.com',
    phone: '+91-9800567487',
    github: 'https://github.com/Shovon0004',
    linkedin: 'https://linkedin.com/in/shovon-halder',
    twitter: '@ShovonHalder',
  },
  location: {
    city: 'Kolkata',
    state: 'West Bengal',
    country: 'India',
    countryCode: 'IN',
  },
  keywords: [
    'Shovon Halder',
    'DevOps Engineer',
    'Full-Stack Developer',
    'Kubernetes',
    'Docker',
    'React.js',
    'Node.js',
    'Spring Boot',
    'JavaScript',
    'Python',
    'Java',
    'Microservices',
    'Cloud Infrastructure',
    'Web Development',
    'Portfolio',
    'India Developer',
    'Freelance Developer',
    'AI/ML',
    'IoT',
    'Web Applications',
    'Backend Development',
    'Frontend Development',
    'Full Stack Development',
    'DevOps Tools',
    'Container Orchestration',
  ],
  socialProfiles: [
    {
      type: 'GitHub',
      url: 'https://github.com/Shovon0004',
      username: 'Shovon0004',
    },
    {
      type: 'LinkedIn',
      url: 'https://linkedin.com/in/shovon-halder',
      username: 'shovon-halder',
    },
    {
      type: 'Twitter',
      url: 'https://twitter.com/ShovonHalder',
      username: 'ShovonHalder',
    },
  ],
  skills: [
    'JavaScript',
    'Python',
    'Java',
    'C/C++',
    'SQL',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'Spring Boot',
    'Docker',
    'Kubernetes',
    'Helm',
    'Git/GitHub',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'REST APIs',
    'GraphQL',
    'Microservices Architecture',
    'AWS',
    'Google Cloud',
    'CI/CD Pipelines',
    'Linux',
    'Nginx',
    'Apache',
    'Terraform',
    'Jenkins',
    'GitLab CI',
    'GitHub Actions',
  ],
  ogImage: {
    url: 'https://shovon-halder.com/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Shovon Halder - DevOps & Full-Stack Developer',
  },
  twitterImage: {
    url: 'https://shovon-halder.com/twitter-image.png',
    width: 1024,
    height: 512,
    alt: 'Shovon Halder - DevOps & Full-Stack Developer',
  },
};

export const STRUCTURED_DATA = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONFIG.site.name,
    url: SEO_CONFIG.site.url,
    logo: `${SEO_CONFIG.site.url}/logo.png`,
    description: SEO_CONFIG.site.description,
    sameAs: SEO_CONFIG.socialProfiles.map(p => p.url),
    contact: {
      '@type': 'ContactPoint',
      contactType: 'General',
      telephone: SEO_CONFIG.author.phone,
      email: SEO_CONFIG.author.email,
    },
  },
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SEO_CONFIG.author.name,
    email: SEO_CONFIG.author.email,
    telephone: SEO_CONFIG.author.phone,
    url: SEO_CONFIG.site.url,
    jobTitle: ['Full-Stack Developer', 'DevOps Engineer'],
    knowsAbout: SEO_CONFIG.skills,
    sameAs: SEO_CONFIG.socialProfiles.map(p => p.url),
    address: {
      '@type': 'PostalAddress',
      addressLocality: SEO_CONFIG.location.city,
      addressRegion: SEO_CONFIG.location.state,
      addressCountry: SEO_CONFIG.location.countryCode,
    },
  },
};

// Meta tags generator utility
export function generateMetaTags(options: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}) {
  const {
    title = SEO_CONFIG.site.name,
    description = SEO_CONFIG.site.description,
    keywords = SEO_CONFIG.keywords,
    image = SEO_CONFIG.ogImage.url,
    url = SEO_CONFIG.site.url,
    type = 'website',
  } = options;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    image,
    url,
    type,
  };
}

// Breadcrumb schema generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Project schema generator
export function generateProjectSchema(project: {
  name: string;
  description: string;
  image?: string;
  url?: string;
  technologies: string[];
  datePublished?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    image: project.image,
    url: project.url,
    author: {
      '@type': 'Person',
      name: SEO_CONFIG.author.name,
    },
    datePublished: project.datePublished || new Date().toISOString(),
    keywords: project.technologies.join(', '),
  };
}
