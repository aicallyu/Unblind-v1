export type Language = 'en' | 'de' | 'es'

export interface Translations {
  // Navigation
  nav: {
    topics: string
    posts: string
    subscribe: string
  }
  // Hero Section
  hero: {
    tagline: string
    title: {
      line1: string
      highlight: string
      line2: string
    }
    subtitle: string
    cta: {
      explore: string
      subscribe: string
    }
  }
  // Sequence Section
  sequence: {
    signal: string
    filter: string
    perception: string
    tagline: string
  }
  // Quote Section
  quote: {
    text: string
    attribution: string
  }
  // Topics Section
  topics: {
    title: string
    subtitle: string
  }
  // Stats Section
  stats: {
    title: string
    items: {
      decisions: string
      bitsPerSecond: string
      conscious: string
      dailyDecisions: string
    }
  }
  // Featured Post Section
  featured: {
    label: string
    cta: string
  }
  // Library Section
  library: {
    title: string
  }
  // Posts Section
  posts: {
    title: string
    readMore: string
  }
  // Subscribe Section
  subscribe: {
    title: string
    titleHighlight: string
    subtitle: string
    placeholder: string
    button: string
  }
  // Footer
  footer: {
    rss: string
    archive: string
    about: string
    copyright: string
  }
  // Article Page
  article: {
    continueReading: string
    author: {
      name: string
      bio: string
    }
  }
  // Common
  common: {
    copy: string
    share: string
    copied: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      topics: 'Topics',
      posts: 'Posts',
      subscribe: 'Subscribe',
    },
    hero: {
      tagline: 'SEE WHAT OTHERS MISS',
      title: {
        line1: 'THE SIGNAL',
        highlight: 'ARRIVES',
        line2: 'BEFORE THE NOISE',
      },
      subtitle: 'Most decisions are made before the meeting starts. Most perceptions are filtered before they reach consciousness. UNBLIND explores the invisible forces that shape what you see, what you miss, and what you never knew existed.',
      cta: {
        explore: 'EXPLORE',
        subscribe: 'SUBSCRIBE',
      },
    },
    sequence: {
      signal: 'SIGNAL',
      filter: 'FILTER',
      perception: 'PERCEPTION',
      tagline: 'See what others miss',
    },
    quote: {
      text: 'The most dangerous blind spot is the one that makes you certain you see clearly.',
      attribution: 'THE UNBLIND PRINCIPLE',
    },
    topics: {
      title: 'EXPLORE THE TERRITORY',
      subtitle: 'Six domains where perception shapes reality before you even notice.',
    },
    stats: {
      title: 'THE PERCEPTION GAP',
      items: {
        decisions: '% of decisions made unconsciously',
        bitsPerSecond: 'Million bits of info per second',
        conscious: 'Bits consciously processed',
        dailyDecisions: 'K daily decisions average',
      },
    },
    featured: {
      label: 'LATEST POST',
      cta: 'READ ARTICLE',
    },
    library: {
      title: 'THE PERCEPTION LIBRARY',
    },
    posts: {
      title: 'LATEST POSTS',
      readMore: 'READ MORE',
    },
    subscribe: {
      title: 'GET',
      titleHighlight: 'UNBLINDED',
      subtitle: "New posts delivered when they're ready. No spam. No fluff. Just signal.",
      placeholder: 'your@email.com',
      button: 'SUBSCRIBE',
    },
    footer: {
      rss: 'RSS',
      archive: 'Archive',
      about: 'About',
      copyright: '© 2026 UNBLIND. All rights reserved.',
    },
    article: {
      continueReading: 'CONTINUE READING',
      author: {
        name: 'Juan Schubert',
        bio: "Founder of UNBLIND. Exploring perception, power, and the invisible forces that shape decisions before they're made.",
      },
    },
    common: {
      copy: 'Copy',
      share: 'Share',
      copied: 'Copied!',
    },
  },
  de: {
    nav: {
      topics: 'Themen',
      posts: 'Beiträge',
      subscribe: 'Abonnieren',
    },
    hero: {
      tagline: 'SIEH, WAS ANDERE ÜBERSEHEN',
      title: {
        line1: 'DAS SIGNAL',
        highlight: 'KOMMT',
        line2: 'VOR DEM RAUSCHEN',
      },
      subtitle: 'Die meisten Entscheidungen werden getroffen, bevor das Meeting beginnt. Die meisten Wahrnehmungen werden gefiltert, bevor sie das Bewusstsein erreichen. UNBLIND erforscht die unsichtbaren Kräfte, die bestimmen, was du siehst, was du verpasst und was du nie wusstest, dass es existiert.',
      cta: {
        explore: 'ERKUNDEN',
        subscribe: 'ABONNIEREN',
      },
    },
    sequence: {
      signal: 'SIGNAL',
      filter: 'FILTER',
      perception: 'WAHRNEHMUNG',
      tagline: 'Sieh, was andere übersehen',
    },
    quote: {
      text: 'Der gefährlichste blinde Fleck ist der, der dich sicher macht, dass du klar siehst.',
      attribution: 'DAS UNBLIND PRINZIP',
    },
    topics: {
      title: 'DAS TERRITORIUM ERKUNDEN',
      subtitle: 'Sechs Bereiche, in denen Wahrnehmung die Realität formt, bevor du es bemerkst.',
    },
    stats: {
      title: 'DIE WAHRNEHMUNGSLÜCKE',
      items: {
        decisions: '% der Entscheidungen unbewusst getroffen',
        bitsPerSecond: 'Millionen Bits Info pro Sekunde',
        conscious: 'Bits bewusst verarbeitet',
        dailyDecisions: 'K tägliche Entscheidungen',
      },
    },
    featured: {
      label: 'NEUESTER BEITRAG',
      cta: 'ARTIKEL LESEN',
    },
    library: {
      title: 'DIE WAHRNEHMUNGSBIBLIOTHEK',
    },
    posts: {
      title: 'NEUESTE BEITRÄGE',
      readMore: 'WEITERLESEN',
    },
    subscribe: {
      title: 'WERDE',
      titleHighlight: 'UNBLINDED',
      subtitle: 'Neue Beiträge, wenn sie fertig sind. Kein Spam. Kein Füllmaterial. Nur Signal.',
      placeholder: 'deine@email.de',
      button: 'ABONNIEREN',
    },
    footer: {
      rss: 'RSS',
      archive: 'Archiv',
      about: 'Über',
      copyright: '© 2026 UNBLIND. Alle Rechte vorbehalten.',
    },
    article: {
      continueReading: 'WEITERLESEN',
      author: {
        name: 'Juan Schubert',
        bio: 'Gründer von UNBLIND. Erforschung von Wahrnehmung, Macht und den unsichtbaren Kräften, die Entscheidungen formen, bevor sie getroffen werden.',
      },
    },
    common: {
      copy: 'Kopieren',
      share: 'Teilen',
      copied: 'Kopiert!',
    },
  },
  es: {
    nav: {
      topics: 'Temas',
      posts: 'Artículos',
      subscribe: 'Suscribirse',
    },
    hero: {
      tagline: 'VE LO QUE OTROS NO VEN',
      title: {
        line1: 'LA SEÑAL',
        highlight: 'LLEGA',
        line2: 'ANTES DEL RUIDO',
      },
      subtitle: 'La mayoría de las decisiones se toman antes de que comience la reunión. La mayoría de las percepciones se filtran antes de llegar a la conciencia. UNBLIND explora las fuerzas invisibles que determinan lo que ves, lo que te pierdes y lo que nunca supiste que existía.',
      cta: {
        explore: 'EXPLORAR',
        subscribe: 'SUSCRIBIRSE',
      },
    },
    sequence: {
      signal: 'SEÑAL',
      filter: 'FILTRO',
      perception: 'PERCEPCIÓN',
      tagline: 'Ve lo que otros no ven',
    },
    quote: {
      text: 'El punto ciego más peligroso es el que te hace creer que ves con claridad.',
      attribution: 'EL PRINCIPIO UNBLIND',
    },
    topics: {
      title: 'EXPLORA EL TERRITORIO',
      subtitle: 'Seis dominios donde la percepción moldea la realidad antes de que lo notes.',
    },
    stats: {
      title: 'LA BRECHA DE PERCEPCIÓN',
      items: {
        decisions: '% de decisiones tomadas inconscientemente',
        bitsPerSecond: 'Millones de bits de info por segundo',
        conscious: 'Bits procesados conscientemente',
        dailyDecisions: 'K decisiones diarias promedio',
      },
    },
    featured: {
      label: 'ÚLTIMO ARTÍCULO',
      cta: 'LEER ARTÍCULO',
    },
    library: {
      title: 'LA BIBLIOTECA DE PERCEPCIÓN',
    },
    posts: {
      title: 'ÚLTIMOS ARTÍCULOS',
      readMore: 'LEER MÁS',
    },
    subscribe: {
      title: 'OBTÉN',
      titleHighlight: 'UNBLINDED',
      subtitle: 'Nuevos artículos cuando estén listos. Sin spam. Sin relleno. Solo señal.',
      placeholder: 'tu@email.com',
      button: 'SUSCRIBIRSE',
    },
    footer: {
      rss: 'RSS',
      archive: 'Archivo',
      about: 'Acerca de',
      copyright: '© 2026 UNBLIND. Todos los derechos reservados.',
    },
    article: {
      continueReading: 'CONTINUAR LEYENDO',
      author: {
        name: 'Juan Schubert',
        bio: 'Fundador de UNBLIND. Explorando la percepción, el poder y las fuerzas invisibles que moldean las decisiones antes de que se tomen.',
      },
    },
    common: {
      copy: 'Copiar',
      share: 'Compartir',
      copied: '¡Copiado!',
    },
  },
}
