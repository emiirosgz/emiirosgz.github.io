export interface FAQItem {
  id: string;
  pregunta: string;
  respuesta: string;
}

export interface CategoriaFAQ {
  servicioId: string;
  servicioNombre: string;
  preguntas: FAQItem[];
}

export const FAQS_POR_SERVICIO: CategoriaFAQ[] = [
  {
    servicioId: "diseno-experiencia",
    servicioNombre: "Diseño & Experiencia UI/UX",
    preguntas: [
      {
        id: "diseno-1",
        pregunta: "¿Qué necesito entregar para empezar a diseñar mi marca o redes?",
        respuesta: "¡Muy poco para comenzar! Con que me cuentes sobre tu negocio, tus colores preferidos, tus metas y algún ejemplo de lo que te gusta es suficiente. Si ya tienes logotipo o fotos de tus productos me los compartes, y si no, te ayudo a crearlos o seleccionarlos."
      },
      {
        id: "diseno-2",
        pregunta: "¿Me entregas los archivos originales de los diseños?",
        respuesta: "Sí, totalmente. Te entrego los archivos finales en formatos listos para usar (PNG, JPG, PDF) y también el acceso a los archivos editables (Figma o Canva/Adobe/Affinity) para que todo sea 100% tuyo."
      },
      {
        id: "diseno-3",
        pregunta: "¿Qué pasa si no me gusta la primera propuesta de diseño?",
        respuesta: "No te preocupes. Antes de avanzar a la entrega final, revisamos juntos la dirección visual y realizamos las rondas de ajustes necesarias para que quedes completamente satisfecho."
      },
      {
        id: "diseno-4",
        pregunta: "¿Incluye la redacción de los textos para las publicaciones?",
        respuesta: "¡Sí! En los paquetes de redes me encargo de redactar los textos (copys) con un tono atractivo para tus clientes, además de incluir los hashtags e ideas para las publicaciones."
      }
    ]
  },
  {
    servicioId: "consultoria-seo",
    servicioNombre: "Consultoría SEO & Posicionamiento Local",
    preguntas: [
      {
        id: "seo-1",
        pregunta: "¿En cuánto tiempo empezaré a aparecer en Google o en los primeros lugares?",
        respuesta: "El SEO es un trabajo progresivo. En búsquedas locales (Google Maps y tu ficha de negocio) sueles ver mejoras en unas 3 a 6 semanas. Para palabras clave competitivas a nivel web, los resultados se consolidan entre 2 y 4 meses."
      },
      {
        id: "seo-2",
        pregunta: "¿Necesito rehacer toda mi página web para hacer SEO?",
        respuesta: "No siempre. En la mayoría de los casos solo ajustamos la estructura, las palabras clave principales, la velocidad de carga y los textos para que Google entienda exactamente qué vendes y en qué zona estás ubicado."
      },
      {
        id: "seo-3",
        pregunta: "¿Qué es la ficha de Google Business y por qué la necesito?",
        respuesta: "Es el mapa y perfil comercial que aparece en Google cuando la gente busca tu servicio en tu ciudad (ej. 'restaurante en Xalapa' o 'diseñador en Veracruz'). Optimizarla hace que te llamen directo por teléfono o visiten tu local."
      },
      {
        id: "seo-4",
        pregunta: "¿Cómo sé si el servicio de SEO realmente me está dando resultados?",
        respuesta: "Te entrego reportes mensuales muy fáciles de entender, sin tecnicismos raros: verás cuántas personas vieron tu negocio, cuántos clics hicieron a tu web, cuántas llamadas recibiste y cómo subiste de posición."
      }
    ]
  },
  {
    servicioId: "desarrollo-web",
    servicioNombre: "Desarrollo Web",
    preguntas: [
      {
        id: "web-1",
        pregunta: "No entiendo nada de programación, ¿tú te encargas de todo el proceso?",
        respuesta: "¡Sí, al 100%! Tú solo me platicas tu idea y tus metas, y yo me encargo de diseñar, programar, configurar y dejar tu página web lista para funcionar en internet."
      },
      {
        id: "web-2",
        pregunta: "¿Cuánto tiempo tarda en estar lista mi página web?",
        respuesta: "El tiempo depende de la complejidad. Una landing page o web informativa suele tardar entre 1 y 2 semanas. Un sitio web corporativo completo o tienda en línea toma de 3 a 4 semanas."
      },
      {
        id: "web-3",
        pregunta: "¿La página se verá bien en teléfonos celulares?",
        respuesta: "¡Garantizado! Todas las páginas que construyo son totalmente adaptables (responsive), funcionando de forma impecable en celulares, tablets y computadoras."
      },
      {
        id: "web-4",
        pregunta: "¿Voy a poder cambiar textos o fotos yo mismo en el futuro?",
        respuesta: "Sí. Te entrego tu sitio estructurado de forma amigable o con capacitación básica para que puedas actualizar información sencilla de forma independiente cuando lo necesites."
      }
    ]
  },
  {
    servicioId: "alojamiento-web",
    servicioNombre: "Alojamiento Web & Hosting",
    preguntas: [
      {
        id: "hosting-1",
        pregunta: "¿Qué es el hosting y el dominio? Explicado de forma sencilla",
        respuesta: "El dominio es la dirección de tu negocio en internet (ejemplo: www.tunegocio.com) y el hosting es el local virtual donde se guardan las fotos, textos y archivos de tu página para que cualquiera pueda entrar."
      },
      {
        id: "hosting-2",
        pregunta: "¿Si ya tengo un dominio comprado en otra empresa, se puede usar?",
        respuesta: "¡Claro que sí! Podemos conectar tu dominio actual sin costo extra o mudarlo si prefieres tener todo administrado en un solo lugar."
      },
      {
        id: "hosting-3",
        pregunta: "¿Tendré correos empresariales con el nombre de mi marca?",
        respuesta: "Sí. Configuro tus cuentas de correo personalizadas (ej. contacto@tunegocio.com) para que puedas usarlas directamente en tu celular o computadora."
      },
      {
        id: "hosting-4",
        pregunta: "¿Qué pasa si mi página falla o se cae?",
        respuesta: "Cuento con monitoreo y respaldos automáticos de seguridad. Si llega a ocurrir algún inconveniente, se restaura una copia limpia en minutos para garantizar que tu negocio siga siempre activo."
      }
    ]
  }
];
