export interface PaqueteServicio {
  id: string;
  nombre: string;
  precio: number | string;
  moneda: string;
  periodo?: string; // ej. 'mes', 'año', 'proyecto'
  popular?: boolean;
  destacadoLabel?: string;
  descripcion: string;
  caracteristicas: string[];
  ctaText?: string;
}

export interface CategoriaServicio {
  slug: string;
  titulo: string;
  subtitulo: string;
  paquetes: PaqueteServicio[];
}

export const SERVICIOS_PRECIOS: Record<string, CategoriaServicio> = {
  'diseno-experiencia': {
    slug: 'diseno-experiencia',
    titulo: 'Diseño & Experiencia UI/UX',
    subtitulo: 'Interfaces atractivas, prototipado funcional y presencia visual para tu marca.',
    paquetes: [
      {
        id: 'prototipado-ui',
        nombre: 'Maquetado & Prototipado UI/UX',
        precio: 3500,
        moneda: 'MXN',
        periodo: 'desde',
        descripcion: 'Diseño de interfaz profesional en Figma listo para desarrollo.',
        caracteristicas: [
          'Wireframes de baja y alta fidelidad',
          'Prototipo interactivo en Figma',
          'UI Kit con componentes reutilizables',
          'Optimizada para conversión y UX'
        ]
      },
      {
        id: 'rrss-basico',
        nombre: 'Redes Sociales - Básico',
        precio: 2599,
        moneda: 'MXN',
        periodo: 'mes',
        descripcion: 'Ideal para marcas que buscan mantener presencia activa y profesional.',
        caracteristicas: [
          '8 a 10 gráficos editables / mes',
          'Línea gráfica base',
          'Adaptación de formatos (Feed/Stories)',
          'Entregables organizados en la nube'
        ]
      },
      {
        id: 'rrss-estandar',
        nombre: 'Redes Sociales - Estándar',
        precio: 4299,
        moneda: 'MXN',
        periodo: 'mes',
        popular: true,
        destacadoLabel: 'Más Popular',
        descripcion: 'Estrategia visual constante para generar engagement diario.',
        caracteristicas: [
          '15 contenidos (Posts, Reels/Carruseles)',
          'Copywriting estratégico incluido',
          'Diseño de portadas destacadas',
          'Revisión y ajustes semanales'
        ]
      },
      {
        id: 'rrss-pro',
        nombre: 'Redes Sociales - Pro',
        precio: 6899,
        moneda: 'MXN',
        periodo: 'mes',
        descripcion: 'Cobertura visual completa y estratégica para negocios en crecimiento.',
        caracteristicas: [
          '20+ contenidos multimedia',
          'Estrategia de branding visual',
          'Diseño multicanal (IG, FB, LinkedIn)',
          'Atención y prioridad de entrega'
        ]
      },
    ]
  },
  'consultoria-seo': {
    slug: 'consultoria-seo',
    titulo: 'Consultoría SEO & Posicionamiento Local',
    subtitulo: 'Aumenta la visibilidad orgánica de tu sitio web y domina las búsquedas locales en Google Maps.',
    paquetes: [
      {
        id: 'auditoria-gmb-seo',
        nombre: 'Optimización SEO Local & Google Business',
        precio: 3800,
        moneda: 'MXN',
        periodo: 'pago único',
        descripcion: 'Configuración, optimización y auditoría inicial de tu ficha de Google Business Profile.',
        caracteristicas: [
          'Creación o reclamo y verificación de la ficha',
          'Optimización de categorías, servicios y palabras clave locales',
          'Auditoría SEO local técnica y análisis de la competencia',
          'Estrategia para captura y gestión de reseñas',
          'Geolocalización de imágenes y catálogo de productos base'
        ]
      },
      {
        id: 'auditoria-seo-web',
        nombre: 'Auditoría SEO Web Integral',
        precio: 4500,
        moneda: 'MXN',
        periodo: 'pago único',
        popular: true,
        destacadoLabel: 'Recomendado',
        descripcion: 'Evaluación situacional técnica completa de tu sitio web y plan de acción SEO.',
        caracteristicas: [
          'Análisis técnico de arquitectura web y velocidad',
          'Investigación de palabras clave (Keywords de alta conversión)',
          'Análisis competitivo y de backlinks',
          'Reporte detallado de correcciones prioritarias'
        ]
      },
      {
        id: 'crecimiento-seo-local',
        nombre: 'Plan Crecimiento Orgánico + SEO Local',
        precio: 6500,
        moneda: 'MXN',
        periodo: 'mes',
        descripcion: 'Estrategia continua para posicionar tu web y dominar Google Maps en tu ciudad.',
        caracteristicas: [
          'Optimización continua web y gestión de Google Business Profile',
          '2 a 3 publicaciones mensuales optimizadas (Blog o actualización GBP)',
          'Publicación periódica de fotos, novedades y productos en tu ficha',
          'Monitoreo de reseñas y estrategia de Link Building local',
          'Reporte mensual de métricas, llamadas y visibilidad'
        ]
      }
    ]
  },
  'desarrollo-web': {
    slug: 'desarrollo-web',
    titulo: 'Desarrollo Web & Soluciones Digitales',
    subtitulo: 'Sitios web rápidos, escalables e impecables técnicamente.',
    paquetes: [
      {
        id: 'mantenimiento-web',
        nombre: 'Mantenimiento & Soporte',
        precio: 990,
        moneda: 'MXN',
        periodo: 'mes',
        descripcion: 'Tranquilidad total para la seguridad y funcionamiento de tu sitio.',
        caracteristicas: [
          'Respaldos de seguridad periódicos',
          'Actualizaciones de core y librerías',
          'Monitoreo de disponibilidad (Uptime 24/7)',
          'Soporte directo para ajustes menores'
        ]
      },
      {
        id: 'dev-wordpress',
        nombre: 'Desarrollo en WordPress',
        precio: 8500,
        moneda: 'MXN',
        periodo: 'desde',
        popular: true,
        destacadoLabel: 'Ideal para PyMes',
        descripcion: 'Ideal para sitios corporativos autoadministrables y dinámicos.',
        caracteristicas: [
          'Maquetación personalizada y autoadministrable',
          'Panel de administración intuitivo',
          'Optimización básica de velocidad y SEO',
          'Formularios e integración de analytics'
        ]
      },
      {
        id: 'dev-ecommerce',
        nombre: 'Tienda en Línea (E-commerce)',
        precio: 11000,
        moneda: 'MXN',
        periodo: 'desde',
        descripcion: 'Plataforma completa de venta online (Shopify o WooCommerce).',
        caracteristicas: [
          'Configuración de pasarelas de pago (Stripe/PayPal)',
          'Carga inicial del catálogo base',
          'Diseño enfocado a la conversión de ventas',
          'Capacitación para gestión de inventarios'
        ]
      },
      {
        id: 'dev-astro',
        nombre: 'Desarrollo a Medida (Astro Stack)',
        precio: 14500,
        moneda: 'MXN',
        periodo: 'desde',
        descripcion: 'Arquitectura web ultra rápida, segura y hecha exactamente a tu medida.',
        caracteristicas: [
          'Desarrollo moderno con Astro, React y Tailwind CSS',
          'Carga ultrarrápida (100% Score en Lighthouse)',
          'SEO técnico avanzado de origen',
          'Código ultra limpio, seguro y sin plugins pesados'
        ]
      },
    ]
  },
  'alojamiento-web': {
    slug: 'alojamiento-web',
    titulo: 'Alojamiento Web & Servidores',
    subtitulo: 'Hosting de alta velocidad, migración de sitios y gestión de dominios y seguridad SSL.',
    paquetes: [
      {
        id: 'mantenimiento-vps',
        nombre: 'Administración VPS & Linux',
        precio: 1499,
        moneda: 'MXN',
        periodo: 'mes',
        descripcion: 'Gestión profesional de servidor dedicado o VPS en la nube.',
        caracteristicas: [
          'Configuración de entornos Linux / Nginx / Apache',
          'Monitoreo de seguridad y parches en tiempo real',
          'Backups automatizados en la nube',
          'Soporte técnico directo 24/7'
        ]
      },
      {
        id: 'hosting-basico',
        nombre: 'Hosting & Dominio Anual',
        precio: 2299,
        moneda: 'MXN',
        periodo: 'año',
        popular: true,
        destacadoLabel: 'Recomendado',
        descripcion: 'Alojamiento web ideal para sitios institucionales o portfolios.',
        caracteristicas: [
          'Dominio .com o .mx incluido (1er año)',
          'Certificado de Seguridad SSL gratuito',
          'Correos corporativos personalizados',
          '99.9% Uptime garantizado'
        ]
      },
      {
        id: 'migracion-soporte',
        nombre: 'Migración & Soporte Servidor',
        precio: 3499,
        moneda: 'MXN',
        periodo: 'evento',
        descripcion: 'Mudanza limpia de tu web a un hosting de alta velocidad sin caídas de servicio.',
        caracteristicas: [
          'Migración de archivos y base de datos sin downtime',
          'Configuración de registros DNS y cuentas de correo',
          'Optimización de PHP y servidor de base de datos',
          'Respaldos de seguridad preventivos'
        ]
      },
    ]
  }
};