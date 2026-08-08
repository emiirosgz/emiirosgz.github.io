import { Servicios } from './consts';
import { SERVICIOS_PRECIOS } from './precios';

export interface PersonSchema {
  '@context': string;
  '@type': string;
  name: string;
  alternateName?: string;
  jobTitle: string;
  description: string;
  url?: string;
  email?: string;
  telephone?: string;
  address: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  sameAs?: string[];
  knowsAbout?: string[];
}

export interface ServiceOffer {
  '@type': string;
  name: string;
  description: string;
  price?: number | string;
  priceCurrency?: string;
}

export interface ServiceSchema {
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: {
    '@type': string;
    name: string;
  };
  offers?: ServiceOffer[];
}

export interface ProfessionalServiceSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url?: string;
  telephone?: string;
  email?: string;
  address: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  provider: {
    '@type': string;
    name: string;
  };
  hasOfferCatalog: {
    '@type': string;
    name: string;
    itemListElement: Array<{
      '@type': string;
      item: ServiceSchema;
    }>;
  };
}

/**
 * Genera el esquema de datos estructurados JSON-LD tipo Person
 * con la información profesional de Emireth Rosas Gómez.
 */
export function getPersonSchema(siteUrl: string = 'https://emiirosgz.github.io'): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Emireth Rosas Gómez',
    alternateName: 'Emii Rosgz',
    jobTitle: 'Diseñadora Multidisciplinaria & Desarrolladora Web',
    description: 'Diseñadora multidisciplinaria y desarrolladora web especializada en UI/UX, desarrollo frontend a medida y consultoría SEO.',
    url: siteUrl,
    email: 'emiirosgz@gmail.com',
    telephone: '+52-229-400-9972',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Xalapa',
      addressRegion: 'Veracruz',
      addressCountry: 'MX',
    },
    sameAs: [
      'https://linkedin.com/in/emireth-rosas'
    ],
    knowsAbout: [
      'Diseño UI/UX',
      'Desarrollo Frontend (Astro, React, Tailwind CSS)',
      'Consultoría SEO & Posicionamiento Local',
      'Alojamiento Web y Administración de Servidores Linux'
    ]
  };
}

/**
 * Genera el esquema de datos estructurados JSON-LD tipo ProfessionalService
 * integrando dinámicamente la información de servicios y paquetes de precios
 * desde consts.ts y precios.ts.
 */
export function getServicesSchema(siteUrl: string = 'https://emiirosgz.github.io'): ProfessionalServiceSchema {
  const itemListElement = Servicios.map((servicio) => {
    const categoriaPrecios = SERVICIOS_PRECIOS[servicio.id];

    const offers: ServiceOffer[] = categoriaPrecios
      ? categoriaPrecios.paquetes.map((paquete) => ({
          '@type': 'Offer',
          name: paquete.nombre,
          description: paquete.descripcion,
          price: paquete.precio,
          priceCurrency: paquete.moneda,
        }))
      : [];

    const serviceItem: ServiceSchema = {
      '@type': 'Service',
      name: servicio.titulo,
      description: servicio.descripcion || servicio.long_desc,
      provider: {
        '@type': 'Person',
        name: 'Emireth Rosas Gómez',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'México',
      },
      ...(offers.length > 0 ? { offers } : {}),
    };

    return {
      '@type': 'OfferCatalogItem',
      item: serviceItem,
    };
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Emireth Rosas Gómez - Servicios de Diseño y Desarrollo Web',
    description: 'Servicios profesionales de diseño UI/UX, desarrollo web a medida, consultoría SEO y alojamiento web.',
    url: `${siteUrl}/servicios`,
    telephone: '+52-229-400-9972',
    email: 'emiirosgz@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Xalapa',
      addressRegion: 'Veracruz',
      addressCountry: 'MX',
    },
    provider: {
      '@type': 'Person',
      name: 'Emireth Rosas Gómez',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Catálogo de Servicios Digitales',
      itemListElement,
    },
  };
}
