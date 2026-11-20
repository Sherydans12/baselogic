import { contact } from './contact';
import { site } from './site';
import type { SeoEntry } from './seo';

type Faq = {
  question: string;
  answer: string;
};

type Breadcrumb = {
  label: string;
  href?: string;
};

type Schema = Record<string, unknown>;

const absoluteUrl = (path = '/') => new URL(path, site.url).toString();

export const organizationSchema = (): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  email: contact.email,
  logo: absoluteUrl('/images/brand/baselogic-logo.png'),
  areaServed: site.serviceArea,
  description: site.description,
});

export const websiteSchema = (): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: 'es-CL',
  publisher: { '@id': `${site.url}/#organization` },
});

export const professionalServiceSchema = (description = site.description): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#professional-service`,
  name: site.name,
  url: site.url,
  email: contact.email,
  areaServed: site.serviceArea,
  description,
});

export const breadcrumbSchema = (items: Breadcrumb[]): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: item.href ? absoluteUrl(item.href) : undefined,
  })),
});

export const faqSchema = (faqs: Faq[]): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const serviceSchema = (service: { detailTitle?: string; title: string; summary: string }, seoEntry: SeoEntry): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.detailTitle ?? service.title,
  areaServed: site.serviceArea,
  description: seoEntry.description,
  provider: { '@id': `${site.url}/#organization` },
});

export const softwareApplicationSchema = (
  product: { name: string; summary: string; audience?: string },
  seoEntry: SeoEntry,
): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: product.name,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: absoluteUrl(seoEntry.path),
  description: seoEntry.description || product.summary,
  provider: { '@id': `${site.url}/#organization` },
  audience: product.audience
    ? {
        '@type': 'Audience',
        audienceType: product.audience,
      }
    : undefined,
});

export const baseSchema = (description?: string): Schema[] => [
  organizationSchema(),
  websiteSchema(),
  professionalServiceSchema(description),
];
