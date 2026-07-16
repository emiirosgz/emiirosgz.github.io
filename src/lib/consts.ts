// =========== imports ===========
import type { NavItem, Capabilities, Experiencia, LinksInteres, CategoriasProyectos, ServiceWorkflow, FAQItem  } from "../types"
import {Layers, Globe, Code} from '@/assets/icons'

// =========== consts ===========
export const SITE_TITLE = 'Emii Rosgz | Portafolio profesional';
export const SITE_DESCRIPTION = 'Diseñadora multidiciplanaria';

export const PRINCIPAL_SITE = {href: '/'}

export const NAV_ITEMS : NavItem[] = [
    { href: "/", label: "Inicio" },
    { href: "/clientes", label: "Clientes" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/servicios", label: "Servicios" },
    { href: "/#contacto", label: "Contacto" },
]

// ======== Categorias ========
export const CATEGORIAS: CategoriasProyectos[] = [
    {
        id: 'Client Work',
        href: 'client-work',
        desc: 'texto descriptivo para proyectos de clientes'
    },
    {
        id: 'Web App Lab',
        href: 'web-app-lab',
        desc: 'texto descriptivo para proyectos personales de laboratorio'
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
        img:"src/assets/imgs/servicios/disenno-redes.webp",
        // relacionados: "",
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
        img:"src/assets/imgs/servicios/seo.webp",
        // relacionados: "",
        stack:['Google Analitycs', 'Search Console', 'Semrush (básico)', 'Excel'],
    },
    {
        id:"desarrollo-web",
        href:"desarrollo-web",
        icon: Code,
        titulo: "Desarrollo Web",
        descripcion: "Consigue una web profesional, segura y optimizada. Mejora tu presencia digital y consigue más conversiones para tu negocio.",
        lista:['Desarrollo Frontend', 'Compilación y Despliegue', 'Mantenimiento en Hosting'],
        long_desc: 'Cierro la brecha entre el lienzo de diseño y el navegador. Escribo código limpio, modular y optimizado para el rendimiento utilizando frameworks modernos como React o Astro. No dependo de constructores visuales pesados, lo que me permite garantizar tiempos de carga ultrarrápidos y un control total sobre el despliegue.',
        beneficio: [
          'Tiempos de carga ultrarrápidos (Core Web Vitals)',
          'Código limpio y libre de dependencias innecesarias',
          'Despliegues continuos sin interrupciones',
        ],
        img:"src/assets/imgs/servicios/webdesign.webp",
        // relacionados: "",
        stack:['VS Code', 'Astro', 'Tailwind', 'React', 'Angular', 'Git & GitHub', 'JavaScript'],
        tags:['Hostinger', 'Frontend', 'WordPress', 'Linux', 'WSL2' ]
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
        puesto: 'Analista de Marketing',
        empresa: 'Barradas Equipos Comerciales',
        fechaInicio: '2026',
        fechaFin: '2026',
        descripcion: 'Auditoría intensiva del ecosistema digital de una empresa de equipos comerciales. Evaluación de canales, propuesta de reestructuración de contenido pilar y diagnóstico de mercado B2B/B2C.',
    },
    {
        puesto: 'Marketing Digital',
        empresa: 'Grupo Tokio S.A. de C.V.',
        fechaInicio: '2023',
        fechaFin: '2024',
        descripcion: 'Desarrollé contenido creativo para redes sociales, campañas, videos, además de administrar y actualizar el catálogo de la tienda en línea. También coordiné proveedores internos y externos, elaboré reportes y análisis de desempeño, y participé en la planeación estratégica de marketing para la temporada escolar 2023.',
    },
]

// ======== FAQs Generales de mis servicios ========
export const FAQsGenerales: FAQItem[] = [
  {
    pregunta: "¿Cómo es tu proceso de trabajo integral?",
    respuesta: "Mi enfoque es punta a punta (end-to-end). Tengo la capacidad de entender tus objetivos de negocio, traducirlos en una estrategia de contenido clara, diseñar la experiencia de usuario en Figma y finalmente programar la solución final sin intermediarios. Esto elimina la brecha de comunicación entre diseñadores y desarrolladores, garantizando que el producto final sea exactamente lo que se planificó."
  },
  {
    pregunta: "¿Puedo contratar solo uno de los servicios de forma independiente?",
    respuesta: "Sí, absolutamente. Aunque mis servicios de diseño, estrategia y código se potencian mutuamente, están estructurados de forma modular. Podemos trabajar únicamente en el diseño UI/UX de tu producto, realizar solo una auditoría de estrategia/SEO, o bien, si ya tienes los diseños listos, me puedo encargar exclusivamente del desarrollo frontend."
  },
  {
    pregunta: "¿Qué ventajas tiene que una misma persona diseñe y programe?",
    respuesta: "La principal ventaja es la eficiencia técnica y la fidelidad del diseño. Al diseñar sé perfectamente cómo se va a comportar ese elemento en el navegador, qué tan costoso es a nivel de rendimiento y cómo optimizarlo desde el lienzo. El resultado es un producto libre de inconsistencias visuales, código más limpio y un desarrollo mucho más ágil."
  }
];

// ======== FAQs Particulares por cada servicio ========

// FAQs Diseño & Experiencia
export const FAQsDisenoExperiencia: FAQItem[] = [
  {
    pregunta: "¿Qué es un sistema de diseño y por qué dices que es escalable?",
    respuesta: "Un sistema de diseño no es solo una plantilla; es una biblioteca viva de componentes (botones, tipografías, formularios, layouts) documentada y reutilizable. Permite que si mañana tu negocio crece o añade nuevas secciones, no tengas que rediseñar todo desde cero, garantizando la coherencia de tu marca y ahorrando cientos de horas de diseño y desarrollo en el futuro."
  },
  {
    pregunta: "¿Cómo logras reducir el abandono de usuarios en una web?",
    respuesta: "Lo logro reduciendo la fricción cognitiva. Diseño interfaces limpias basadas en la lógica del usuario y no en suposiciones. Estructuro la navegación para que encontrar la información o realizar una compra requiera el menor esfuerzo posible, creando flujos visualmente atractivos pero estrictamente funcionales."
  },
  {
    pregunta: "¿En qué herramientas entregas los prototipos y diseños?",
    respuesta: "Mi herramienta principal para UI/UX y maquetado es Figma, donde tendrás acceso total a los lienzos de trabajo de forma transparente. Para la dirección de arte y creación de contenido multimedia complementario me apoyo en Adobe Suite, Affinity y DaVinci Resolve."
  }
];

// FAQs Estrategia & Contenido
export const FAQsEstrategiaContenido: FAQItem[] = [
  {
    pregunta: "¿Qué diferencia hay entre una web bonita y una web con estrategia?",
    respuesta: "Una web hermosa sin estrategia es un barco sin brújula. La estrategia se encarga de analizar a tu audiencia (B2B o B2C), definir qué información debe ir primero, estructurar un embudo de conversión y optimizar la arquitectura del sitio para que no solo reciba visitas, sino que guíe orgánicamente al usuario a realizar una acción comercial."
  },
  {
    pregunta: "¿Cómo abordas el posicionamiento SEO en tus proyectos?",
    respuesta: "No creo en trucos mágicos, creo en estructuras sólidas. Construyo arquitecturas de información limpias y semánticas que Google pueda indexar fácilmente. Analizo palabras clave y competidores para definir pilares de contenido que resuelvan las intenciones de búsqueda reales de tus clientes potenciales."
  },
  {
    pregunta: "¿Cómo mides el rendimiento y el éxito de la estrategia implementada?",
    respuesta: "Tomo decisiones basadas en datos, no en intuiciones. Implemento y configuro herramientas analíticas clave como Google Analytics y Google Search Console. A través de ellas monitoreamos el tráfico orgánico cualificado, el comportamiento de los usuarios en el sitio y te entrego auditorías claras con roadmaps accionables."
  }
];

// FAQs Code & Build
export const FAQsCodeBuild: FAQItem[] = [
  {
    pregunta: "¿Por qué desarrollas con Astro o React en lugar de constructores visuales comunes?",
    respuesta: "Los constructores visuales tradicionales suelen inyectar demasiado código basura, ralentizando tu sitio. Al desarrollar código a medida con frameworks modernos como Astro o React, garantizo tiempos de carga ultrarrápidos y un control total del rendimiento. Esto es crucial tanto para retener usuarios como para cumplir con los Core Web Vitals de Google, influyendo directamente en tu posicionamiento SEO."
  },
  {
    pregunta: "¿Qué incluye el servicio de mantenimiento y despliegue en hosting?",
    respuesta: "Me encargo de configurar tu ecosistema en servidores como Hostinger o plataformas en la nube, garantizando entornos seguros bajo entornos Linux/WSL2. Además, implemento flujos de trabajo con Git y GitHub para realizar despliegues continuos: esto significa que cualquier cambio o actualización se sube a producción de forma limpia y transparente, sin interrumpir el servicio de tu web."
  },
  {
    pregunta: "¿El código que desarrollas es fácil de mantener si mi proyecto crece?",
    respuesta: "Completamente. Escribo código frontend limpio, modular, documentado y libre de dependencias innecesarias, utilizando estándares de la industria como JavaScript moderno y Tailwind CSS para los estilos. Si el día de mañana se integra un equipo de desarrollo más grande a tu empresa, podrán leer y escalar el código sin complicaciones."
  }
];


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
        label: 'Mi CV',
        href: 'https://drive.google.com/file/d/1Wz5p9_o6GE9gnAf-54Oguit1mKUufaxI/view?usp=sharing'
    },
]