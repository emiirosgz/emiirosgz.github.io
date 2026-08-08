// =========== imports ===========
import type { NavItem, Capabilities, Experiencia, LinksInteres, CategoriasProyectos, ServiceWorkflow, FAQItem  } from "../types"
import {Layers, Globe, Code, Database} from '@/assets/icons'
import imgDisennoRedes from '@/assets/imgs/servicios/disenno-redes.webp';
import imgSeo from '@/assets/imgs/servicios/seo.webp';
import imgWebdesign from '@/assets/imgs/servicios/webdesign.webp';
import imgAlojamientoWeb from '@/assets/imgs/servicios/alojamiento-web.webp';

// =========== consts ===========
export const SITE_TITLE = 'Emii Rosgz | Portafolio profesional';
export const SITE_DESCRIPTION = 'Diseñadora multidiciplanaria';

export const NAV_ITEMS : NavItem[] = [
    { href: "/", label: "Inicio" },
    { href: "/proceso", label: "Proceso" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
]

// ======== Categorias ========
export const CATEGORIAS: CategoriasProyectos[] = [
    {
        id: 'Client Work',
        href: 'client-work',
        desc: 'Proyectos digitales a medida desarrollados para marcas, empresas y clientes. Enfocados en resolver necesidades reales de negocio, optimizar la conversión y potenciar la presencia digital.'
    },
    {
        id: 'Proyectos Propios',
        href: 'proyectos-propios',
        desc: 'Iniciativas y productos digitales desarrollados 100% por mí para el público general, que abarcan desde pequeñas webapps interactivas hasta sitios web completos y plataformas funcionales.'
    },
]


// ======== Servicios ========
export const Servicios : Capabilities[] = [
    {
        id:"diseno-experiencia",
        href:'diseno-experiencia',
        icon: Layers,
        titulo:"Diseño & Experiencia",
        descripcion: "Diseño gráfico para redes sociales y creación de experiencias visuales atractivas y efectivas para productos digitales.",
        lista:['Diseño para redes', 'UI/UX Design', 'Maquetado & Prototipado'],
        long_desc: 'El diseño no debe ser solo un adorno, debe ser un vehículo para la funcionalidad. Mi enfoque en Diseño UI/UX y Dirección de Arte garantiza que cada píxel tenga un propósito. Creo interfaces intuitivas que reducen la fricción cognitiva y sistemas de diseño escalables que mantienen la coherencia visual a lo largo del tiempo.',
        beneficio: [
          'Reducción de abandono de usuarios',
          'Coherencia de marca en todos los puntos de contacto',
          'Sistemas de diseño escalables y documentados',
        ],
        img: imgDisennoRedes,
        stack:['Figma', 'Adobe Suite', 'Affinity', 'DaVinci Resolve', 'PowerPoint'],
        tags:['Ui & Ux','Brand','Editorial','Design Systems', 'CopyWriting'],
    },
    {
        id:"consultoria-seo",
        href:"consultoria-seo",
        icon: Globe,
        titulo: "Consultoría SEO",
        descripcion: "Optimización de motores de búsqueda e implementación de estrategias para mejorar el posicionamiento de los sitios web.",
        lista:['Optimización on-page', 'Estrategia SEO y SEM', 'Link building'],
        long_desc: 'Una web hermosa sin estrategia es un barco sin brújula. Analizo el ecosistema digital de tu negocio para detectar fugas de conversión y oportunidades orgánicas. Construyo arquitecturas de información sólidas y pilares de contenido que no solo agradan a Google (SEO), sino que guían al usuario hacia la decisión de compra.',
        beneficio: [
          'Aumento de tráfico orgánico cualificado',
          'Estructuras web pensadas para la conversión',
          'Auditorías claras con roadmaps accionables'
        ],
        img: imgSeo,
        stack:['Google Analytics', 'Search Console', 'Semrush', 'Excel'],
    },
    {
        id:"desarrollo-web",
        href:"desarrollo-web",
        icon: Code,
        titulo: "Desarrollo Web",
        descripcion: "Consigue una web profesional, segura y optimizada. Mejora tu presencia digital y consigue más conversiones para tu negocio.",
        lista:['Desarrollo Frontend', 'Compilación y Despliegue', 'Mantenimiento y Hosting'],
        long_desc: 'Cierro la brecha entre el lienzo de diseño y el navegador. Escribo código limpio, modular y optimizado para el rendimiento utilizando frameworks modernos como React o Astro. No dependo de constructores visuales pesados, lo que me permite garantizar tiempos de carga ultrarrápidos y un control total sobre el despliegue.',
        beneficio: [
          'Tiempos de carga ultrarrápidos (Core Web Vitals)',
          'Código limpio y libre de dependencias innecesarias',
          'Despliegues continuos sin interrupciones',
        ],
        img: imgWebdesign,
        stack:['VS Code', 'Astro', 'Tailwind', 'React', 'Angular', 'Git & GitHub', 'JavaScript'],
        tags:['Hostinger', 'Frontend', 'WordPress', 'Linux', 'WSL2' ]
    },
    {
        id:"alojamiento-web",
        href:"alojamiento-web",
        icon: Database,
        titulo: "Alojamiento Web",
        descripcion: "Servicios de hosting seguro, migración de servidores, certificados SSL y mantenimiento técnico continuo.",
        lista:['Hosting & Dominio', 'Migración de Servidor', 'Administración Linux/SSL'],
        long_desc: 'Un sitio web necesita un hogar rápido, estable y seguro. Configuro servidores optimizados, gestiono migración de dominios, SSL y garantizo que tu plataforma esté en línea las 24 horas del día con soporte continuo.',
        beneficio: [
          'Uptime garantizado 99.9% y alta velocidad de respuesta',
          'Configuración SSL, correos corporativos y respaldos periódicos',
          'Migraciones sin interrupción del servicio',
        ],
        img: imgAlojamientoWeb,
        stack:['Hostinger', 'Linux', 'WSL2', 'DNS & SSL', 'Git & GitHub'],
        tags:['Hosting', 'Servidores', 'Linux', 'DNS', 'SSL']
    }
]

// pasos de servicios ========
export const FlujosTrabajo: ServiceWorkflow[] = [
  {
    id: "diseno-experiencia",
    encabezado: "Diseño & Experiencia",
    introduccion:
      "Cada proyecto inicia con una etapa de descubrimiento para comprender objetivos, usuarios y necesidades del negocio. A partir de esta información se desarrolla una propuesta visual y funcional enfocada en crear experiencias claras, consistentes y alineadas con la identidad de la marca.",

    condiciones:
      "El alcance, entregables y tiempos estimados se detallan por escrito en la cotización. Los proyectos de Diseño & Experiencia se trabajan con un esquema de pago del 50% para iniciar y 50% al concluir el proyecto.",

    pasos: [
      {
        titulo: "01 · Reunión",
        descripcion:
          "Realizamos una reunión inicial para conocer el proyecto, entender objetivos, audiencia, referencias visuales y requerimientos generales. También se identifican necesidades de comunicación, funcionalidad y posicionamiento."
      },
      {
        titulo: "02 · Proceso",
        descripcion:
          "Se desarrolla la propuesta de diseño considerando estructura, experiencia de usuario, dirección visual y consistencia de marca. Dependiendo del proyecto, pueden generarse wireframes, prototipos, piezas gráficas o sistemas visuales para validar la solución propuesta."
      },
      {
        titulo: "03 · Entrega",
        descripcion:
          "Se entregan los archivos finales correspondientes al alcance contratado junto con las especificaciones necesarias para su implementación o uso. El cliente recibe una solución lista para integrarse a sus procesos de comunicación o desarrollo."
      }
    ]
  },

  {
    id: "consultoria-seo",
    encabezado: "Consultoría SEO",
    introduccion:
      "La estrategia adecuada permite convertir objetivos comerciales en acciones concretas. Este servicio se enfoca en analizar, estructurar y planificar contenidos, canales y oportunidades de crecimiento digital para generar resultados sostenibles.",

    condiciones:
      "El alcance, entregables y tiempos estimados se especifican en la cotización entregada al cliente. Los proyectos de Estrategia & Contenido se trabajan con un esquema de pago del 50% para iniciar y 50% al finalizar.",

    pasos: [
      {
        titulo: "01 · Reunión",
        descripcion:
          "Se realiza una sesión de descubrimiento para comprender el negocio, objetivos, mercado, competencia y situación actual de comunicación o marketing. Esta etapa permite identificar oportunidades y prioridades."
      },
      {
        titulo: "02 · Proceso",
        descripcion:
          "Se desarrolla un análisis estratégico que puede incluir arquitectura de contenido, planificación editorial, optimización SEO, análisis de marketing digital o definición de procesos de comunicación. Todas las recomendaciones se alinean a los objetivos del proyecto."
      },
      {
        titulo: "03 · Entrega",
        descripcion:
          "El cliente recibe la documentación, estrategia o plan de acción correspondiente al alcance contratado, acompañada de recomendaciones claras para su implementación y seguimiento."
      }
    ]
  },

  {
    id: "desarrollo-web",
    encabezado: "Desarrollo Web",
    introduccion:
      "Transformo ideas, diseños y requerimientos en soluciones web funcionales, rápidas y escalables. Cada proyecto se construye considerando rendimiento, mantenibilidad y una experiencia sólida para usuarios y administradores.",

    condiciones:
      "El alcance, funcionalidades, entregables y tiempos de desarrollo se especifican por escrito dentro de la cotización. Los proyectos de desarrollo se trabajan en tres fases de pago: 45% para iniciar el proyecto, 35% durante la etapa intermedia de construcción y 20% al finalizar la entrega.",

    pasos: [
      {
        titulo: "01 · Reunión",
        descripcion:
          "Se realiza una reunión inicial para definir objetivos, funcionalidades, estructura del sitio, requerimientos técnicos, contenido disponible e integraciones necesarias."
      },
      {
        titulo: "02 · Proceso",
        descripcion:
          "Se desarrolla la solución web siguiendo las etapas acordadas para el proyecto. Dependiendo del alcance, puede incluir maquetación frontend, integración de contenido, optimización técnica, implementación de funcionalidades y pruebas de calidad."
      },
      {
        titulo: "03 · Entrega",
        descripcion:
          "Una vez concluido el desarrollo, se realiza la entrega del proyecto según lo establecido en la cotización. El sitio queda preparado para su publicación o puesta en producción, incluyendo los accesos y documentación acordados."
      }
    ]
  },
  {
    id: "alojamiento-web",
    encabezado: "Alojamiento Web",
    introduccion:
      "Garantizo la estabilidad, velocidad y seguridad de tu sitio web mediante la elección y configuración adecuada de hosting, nombres de dominio y certificados SSL.",

    condiciones:
      "El alcance técnico y requerimientos de servidor se detallan en la cotización entregada al cliente. Los servicios de migración y alojamiento se trabajan bajo pago único o planes de mantenimiento periódico según la opción seleccionada.",

    pasos: [
      {
        titulo: "01 · Diagnóstico",
        descripcion:
          "Evaluamos el peso, requerimientos de tecnología, tráfico esperado y hosting actual de tu sitio para definir la arquitectura de servidor ideal."
      },
      {
        titulo: "02 · Migración / Configuración",
        descripcion:
          "Ejecutamos la migración de archivos, base de datos, zona DNS y certificados SSL o la preparación del nuevo entorno sin interrumpir la disponibilidad web."
      },
      {
        titulo: "03 · Puesta en Producción & Entrega",
        descripcion:
          "Comprobamos la estabilidad, velocidad y cuentas de correo vinculadas, entregando credenciales de acceso y reportes de estado."
      }
    ]
  }
];

// ======== Experiencia ========
export const ExperienciaInfo : Experiencia[] = [
    {
        puesto: 'Freelance',
        empresa: 'Independiente',
        fechaInicio: '2024',
        fechaFin: 'actualmente',
        descripcion: 'Mis proyectos van desde auditorías digitales para clientes B2B/B2C, hasta webs funcionales que resuelven problemas operativos concretos. Siempre con criterio visual y ejecución técnica.',
    },
    {
        puesto: 'Marketing Digital',
        empresa: 'Grupo Tokio S.A. de C.V.',
        fechaInicio: '2023',
        fechaFin: '2024',
        descripcion: 'Desarrollé contenido creativo para redes sociales, campañas, videos, además de administrar y actualizar el catálogo de la tienda en línea. También coordiné proveedores internos y externos, elaboré reportes y análisis de desempeño, y participé en la planeación estratégica de marketing para la temporada escolar 2023.',
    },
    {
        puesto: 'Docencia Universitaria',
        empresa: 'Universidad del Tercer Milenio',
        fechaInicio: '2022',
        fechaFin: '2023',
        descripcion: 'Profesora universitaria en la licenciatura en Diseño Gráfico y profesora de informática para nivel media superior (bachillerato).',
    },

]

// ======== Footer links ========

export const FooterLinks : LinksInteres[] = [
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/emireth-rosas'
    },
    {
        label: 'Acerca de Emi',
        href: '/acercade'
    },
    {
        label: 'FAQs',
        href: '/faqs'
    },
    {
        label: 'Mi CV',
        href: 'https://drive.google.com/file/d/1Wz5p9_o6GE9gnAf-54Oguit1mKUufaxI/view?usp=sharing'
    },
    {
        label: 'Aviso de Privacidad',
        href: '/aviso-privacidad'
    },
]