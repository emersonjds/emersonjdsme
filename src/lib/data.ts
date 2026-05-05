export interface I18nString {
  en: string;
  pt: string;
  es: string;
}

export interface Project {
  slug: string;
  title: string;
  company: string;
  year: string;
  role: string;
  stack: readonly string[];
  description: I18nString;
  impact: I18nString;
  featured?: boolean;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  current?: boolean;
  description: I18nString;
}

export interface StackCategory {
  labelKey: string;
  items: readonly string[];
}

export interface Award {
  date: string; // YYYY-MM
  position: "1st" | "2nd" | "3rd" | "finalist" | "speaker";
  name: string;
  organizer: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  year: string | null;
  status: "in_progress" | "completed";
}

export interface Country {
  name: string;
  code: string;
}


export const projects: readonly Project[] = [
  {
    slug: "porto-fraud",
    title: "Plataforma de Gestão de Fraude",
    company: "Porto Seguro",
    year: "2024–presente",
    role: "Tech Lead",
    featured: true,
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Terraform",
      "TanStack Query",
      "Zustand",
      "Zod",
    ],
    description: {
      en: "Built a scalable fraud and case management platform for Porto Seguro. Architected the front-end, set the IaC and observability foundations.",
      pt: "Construí a plataforma escalável de gestão de fraude e casos da Porto Seguro. Defini a arquitetura de front-end, IaC e observabilidade.",
      es: "Construí la plataforma escalable de gestión de fraude y casos de Porto Seguro. Definí la arquitectura de front-end, IaC y observabilidad.",
    },
    impact: {
      en: "New architecture for high-scale fraud detection.",
      pt: "Nova arquitetura para detecção de fraude em larga escala.",
      es: "Nueva arquitectura para detección de fraude a gran escala.",
    },
  },
  {
    slug: "porto-intranet",
    title: "Intranet Corporativa",
    company: "Porto Seguro",
    year: "2023–presente",
    role: "Tech Lead · HR Engineering",
    featured: true,
    stack: [
      "Angular 17+",
      "Next.js",
      "React",
      "Node.js",
      "Java/Spring",
      "iOS Swift",
      "Android",
      "Mulesoft",
      "Sensedia",
    ],
    description: {
      en: "Technical leadership of the corporate intranet used by over 18k employees. Standardised the design system and the executive leadership mobile app.",
      pt: "Liderança técnica da intranet corporativa usada por mais de 18 mil colaboradores. Padronização do design system e do app mobile da liderança executiva.",
      es: "Liderazgo técnico de la intranet corporativa usada por más de 18 mil colaboradores. Estandarización del design system y la app móvil del liderazgo ejecutivo.",
    },
    impact: {
      en: "18k+ employees · team of 4 devs · new Flutter app for executives.",
      pt: "18k+ colaboradores · time de 4 devs · novo app em Flutter para a liderança.",
      es: "18k+ colaboradores · equipo de 4 devs · nueva app Flutter para directivos.",
    },
  },
  {
    slug: "sem-parar-valet",
    title: "Tag Sem Parar — Super App",
    company: "Sem Parar S.A.",
    year: "2021–2022",
    role: "Senior Engineer",
    featured: true,
    stack: [
      "React Native",
      "TypeScript",
      "Redux Saga",
      "Salesforce Marketing Cloud",
      "Firebase",
    ],
    description: {
      en: "Built the Valet feature area from scratch, integrating payments, partner webhooks and monitoring. Migrated React Navigation v4 → v6 and delivered the first Salesforce Marketing Cloud integration.",
      pt: "Desenvolvi do zero o fluxo da área Valet, integrando pagamentos, webhooks de parceiros e monitoramento. Migrei o React Navigation v4 → v6 e fiz a primeira implementação do Salesforce Marketing Cloud.",
      es: "Desarrollé desde cero el área Valet, integrando pagos, webhooks de socios y monitoreo. Migré React Navigation v4 → v6 e hice la primera implementación de Salesforce Marketing Cloud.",
    },
    impact: {
      en: "Significantly improved performance after routing migration.",
      pt: "Performance significativamente melhor após a migração das rotas.",
      es: "Rendimiento significativamente mejor tras la migración de rutas.",
    },
  },
  {
    slug: "accenture-fx",
    title: "FX Portal — Santander",
    company: "Accenture",
    year: "2017",
    role: "Frontend Engineer",
    featured: true,
    stack: ["Angular 4", "RxJS", "Ripple", "XRP"],
    description: {
      en: "International remittance portal using Ripple/XRP, in partnership with Banco Santander.",
      pt: "Portal de remessas internacionais usando Ripple/XRP, em parceria com o Banco Santander.",
      es: "Portal de remesas internacionales usando Ripple/XRP, en asociación con Banco Santander.",
    },
    impact: {
      en: "Transfers above R$ 1M in under 3 minutes — previously took up to 7 days.",
      pt: "Transferências acima de R$ 1 milhão em menos de 3 minutos — antes levavam até 7 dias.",
      es: "Transferencias por encima de R$ 1M en menos de 3 minutos — antes tardaban hasta 7 días.",
    },
  },
  {
    slug: "cedro-guide",
    title: "Compra e Venda de Ações",
    company: "Guide Investimentos / Cedro",
    year: "2018",
    role: "Senior Frontend",
    featured: true,
    stack: ["Angular 5", "RxJS", "NgRx", "API B3"],
    description: {
      en: "Refactored the order-entry module with an integrated timer against the B3 API.",
      pt: "Refatoração do módulo de envio de ordens com timer integrado à API da B3.",
      es: "Refactorización del módulo de envío de órdenes con temporizador integrado a la API B3.",
    },
    impact: {
      en: "+27% in stock purchase order volume.",
      pt: "+27% no volume de ordens de compra de ações.",
      es: "+27% en el volumen de órdenes de compra de acciones.",
    },
  },
  {
    slug: "dotz-onboarding",
    title: "Novo Onboarding",
    company: "Dotz",
    year: "2022–2023",
    role: "Senior Engineer",
    featured: true,
    stack: ["React Native", "TypeScript", "Redux", "React Query", "Firebase"],
    description: {
      en: "Implemented the new onboarding flow and refactored legacy code to the new design system.",
      pt: "Implementação do novo fluxo de onboarding e refatoração de legado para o novo design system.",
      es: "Implementación del nuevo flujo de onboarding y refactorización del legado al nuevo design system.",
    },
    impact: {
      en: "Redesigned onboarding for millions of Dotz program users.",
      pt: "Onboarding redesenhado para milhões de usuários do programa Dotz.",
      es: "Onboarding rediseñado para millones de usuarios del programa Dotz.",
    },
  },
  {
    slug: "beetech-remessa",
    title: "Remessa Online",
    company: "Beetech (unicórnio)",
    year: "2019–2020",
    role: "Senior Frontend",
    featured: false,
    stack: ["AngularJS 1.6", "Sass", "Scrum"],
    description: {
      en: "International remittance platform for one of Brazil's unicorns.",
      pt: "Plataforma de remessas internacionais para um dos unicórnios brasileiros.",
      es: "Plataforma de remesas internacionales para uno de los unicornios brasileños.",
    },
    impact: {
      en: "New features and refactoring of the main portal.",
      pt: "Novas features e refatoração do portal principal.",
      es: "Nuevas funcionalidades y refactorización del portal principal.",
    },
  },
  {
    slug: "spark-products",
    title: "Spark Consultoria — Produtos",
    company: "Spark",
    year: "2018–presente",
    role: "Co-fundador",
    featured: false,
    stack: ["React", "React Native", "Node.js", "GraphQL"],
    description: {
      en: "Co-founder. Apps launched: Koob Job (models × events), PetMap (pet-friendly places in SP), Teto Payments (white-label banking) and Nelson Willians portal.",
      pt: "Co-fundador. Apps lançados: Koob Job (modelos × eventos), PetMap (locais pet-friendly em SP), Teto Payments (white-label bancário) e portal Nelson Willians.",
      es: "Cofundador. Apps lanzadas: Koob Job (modelos × eventos), PetMap (lugares pet-friendly en SP), Teto Payments (banking white-label) y portal Nelson Willians.",
    },
    impact: {
      en: "4 products in production · architecture and end-to-end delivery.",
      pt: "4 produtos em produção · arquitetura e entrega ponta a ponta.",
      es: "4 productos en producción · arquitectura y entrega de extremo a extremo.",
    },
  },
] as const;


export const stackCategories: readonly StackCategory[] = [
  {
    labelKey: "stack.languages",
    items: ["TypeScript", "JavaScript", "Java", "Swift", "Dart", "SQL"],
  },
  {
    labelKey: "stack.frontend",
    items: [
      "React",
      "Next.js",
      "Angular (4–17+)",
      "React Native",
      "Flutter",
      "Tailwind CSS",
      "RxJS",
    ],
  },
  {
    labelKey: "stack.backendInfra",
    items: [
      "Node.js",
      "Spring Boot",
      "PostgreSQL",
      "AWS",
      "Terraform",
      "Mulesoft",
      "Sensedia",
    ],
  },
  {
    labelKey: "stack.tooling",
    items: [
      "TanStack Query",
      "Zustand",
      "Redux / Saga",
      "NgRx",
      "Zod",
      "React Hook Form",
    ],
  },
] as const;

export const marqueeItems: readonly string[] = [
  "firebase",
  "graphql",
  "ripple/xrp",
  "salesforce marketing cloud",
  "onesignal",
  "realm",
  "mongodb",
  "ionic",
  "cordova",
  "codepush",
  "app center",
  "jest",
  "rxjs",
  "ngrx",
  "scrum",
] as const;


export const experience: readonly Experience[] = [
  {
    period: "Nov/2023 — atual",
    title: "Tech Lead",
    company: "Porto Seguro",
    current: true,
    description: {
      en: "Leading the fraud management platform and corporate intranet (18k employees). Setting front-end architecture, IaC and observability standards.",
      pt: "Liderança técnica da plataforma de fraude e intranet corporativa (18 mil colaboradores). Arquitetura de front-end, IaC e observabilidade.",
      es: "Liderazgo técnico de la plataforma de fraude e intranet corporativa (18 mil colaboradores). Arquitectura de front-end, IaC y observabilidad.",
    },
  },
  {
    period: "Set/2022 — Set/2023",
    title: "Senior Software Engineer",
    company: "Dotz",
    description: {
      en: "Redesigned the onboarding flow for millions of users and migrated legacy code to the new design system.",
      pt: "Redesenhou o fluxo de onboarding para milhões de usuários e migrou legado para o novo design system.",
      es: "Rediseñó el flujo de onboarding para millones de usuarios y migró el legado al nuevo design system.",
    },
  },
  {
    period: "Abr/2022 — Set/2022",
    title: "Senior Software Engineer",
    company: "Tiba",
    description: {
      en: "Mobile and web development for logistics and supply chain operations.",
      pt: "Desenvolvimento mobile e web para operações de logística e supply chain.",
      es: "Desarrollo móvil y web para operaciones de logística y supply chain.",
    },
  },
  {
    period: "Mar/2021 — Abr/2022",
    title: "Senior Software Engineer",
    company: "Sem Parar S.A.",
    description: {
      en: "Built the Valet feature from scratch and delivered the first Salesforce Marketing Cloud integration.",
      pt: "Desenvolveu do zero a área Valet e a primeira integração com Salesforce Marketing Cloud.",
      es: "Desarrolló desde cero el área Valet y la primera integración con Salesforce Marketing Cloud.",
    },
  },
  {
    period: "Jan/2021 — Mar/2021",
    title: "Senior Software Engineer",
    company: "Cervejaria Petrópolis",
    description: {
      en: "Frontend development for internal supply chain management tools.",
      pt: "Desenvolvimento frontend para ferramentas internas de gestão de supply chain.",
      es: "Desarrollo frontend para herramientas internas de gestión de supply chain.",
    },
  },
  {
    period: "Out/2019 — Abr/2020",
    title: "Senior Frontend",
    company: "Beetech",
    description: {
      en: "New features and refactoring of the international remittance portal (unicorn company).",
      pt: "Novas features e refatoração do portal de remessas internacionais (unicórnio).",
      es: "Nuevas funcionalidades y refactorización del portal de remesas internacionales (unicornio).",
    },
  },
  {
    period: "Dez/2018 — atual",
    title: "Co-fundador",
    company: "Spark Consultoria",
    description: {
      en: "Co-founded the consultancy. Launched 4 products end-to-end: Koob Job, PetMap, Teto Payments, Nelson Willians portal.",
      pt: "Co-fundou a consultoria. Lançou 4 produtos ponta a ponta: Koob Job, PetMap, Teto Payments, portal Nelson Willians.",
      es: "Cofundó la consultoría. Lanzó 4 productos de extremo a extremo: Koob Job, PetMap, Teto Payments, portal Nelson Willians.",
    },
  },
  {
    period: "Out/2018 — Dez/2018",
    title: "Fullstack",
    company: "OSBR",
    description: {
      en: "Full-stack development for internal tools and client projects.",
      pt: "Desenvolvimento full-stack para ferramentas internas e projetos de clientes.",
      es: "Desarrollo full-stack para herramientas internas y proyectos de clientes.",
    },
  },
  {
    period: "Jan/2018 — Out/2018",
    title: "Senior Frontend",
    company: "Cedro Technologies",
    description: {
      en: "Refactored the order-entry module at Guide Investimentos, improving stock purchase volume by 27%.",
      pt: "Refatorou o módulo de envio de ordens na Guide Investimentos, aumentando volume de compras em 27%.",
      es: "Refactorizó el módulo de envío de órdenes en Guide Investimentos, mejorando el volumen de compras en 27%.",
    },
  },
  {
    period: "Jun/2017 — Jan/2018",
    title: "Frontend Engineer",
    company: "Accenture",
    description: {
      en: "Built the FX Portal for Santander using Ripple/XRP — international transfers above R$ 1M in under 3 minutes.",
      pt: "Construiu o FX Portal para o Santander usando Ripple/XRP — transferências acima de R$ 1M em menos de 3 minutos.",
      es: "Construyó el FX Portal para Santander usando Ripple/XRP — transferencias sobre R$ 1M en menos de 3 minutos.",
    },
  },
  {
    period: "Jan/2017 — Mai/2017",
    title: "Frontend",
    company: "Fcamara",
    description: {
      en: "Frontend development for client projects across banking and retail.",
      pt: "Desenvolvimento frontend para projetos de clientes em bancos e varejo.",
      es: "Desarrollo frontend para proyectos de clientes en banca y retail.",
    },
  },
  {
    period: "Ago/2016 — Jan/2017",
    title: "Frontend",
    company: "Mentes Notáveis",
    description: {
      en: "Frontend development for web applications.",
      pt: "Desenvolvimento frontend para aplicações web.",
      es: "Desarrollo frontend para aplicaciones web.",
    },
  },
  {
    period: "Set/2015 — Ago/2016",
    title: "Estagiário",
    company: "Mentes Notáveis",
    description: {
      en: "Internship — first steps in web development.",
      pt: "Estágio — primeiros passos no desenvolvimento web.",
      es: "Pasantía — primeros pasos en el desarrollo web.",
    },
  },
] as const;


export const awards: readonly Award[] = [
  { date: "2023-12", position: "1st", name: "MBM InovaHack", organizer: "SAP" },
  { date: "2023-05", position: "2nd", name: "C-Hack", organizer: "Copastur / FIAP" },
  { date: "2023-04", position: "2nd", name: "AdeSampa Hackathon", organizer: "Bairro da Liberdade" },
  { date: "2023-03", position: "2nd", name: "AdeSampa Hackathon", organizer: "+50 anos" },
  { date: "2022-08", position: "3rd", name: "AdeSampa Hackathon", organizer: "Prefeitura de SP" },
  { date: "2020-09", position: "2nd", name: "IESB Hackathon", organizer: "IESB Brasília" },
  { date: "2020-09", position: "3rd", name: "Brasil Hack Export North", organizer: "Brasil Export" },
  { date: "2019-12", position: "1st", name: "Loftech", organizer: "Loft" },
  { date: "2019-10", position: "3rd", name: "Space Apps Challenge SP", organizer: "NASA" },
  { date: "2019-09", position: "3rd", name: "Hackathon Gr1d", organizer: "Gr1d Insurance" },
  { date: "2019-08", position: "2nd", name: "Hackathon Siemens", organizer: "Dynamic Air Challenge" },
  { date: "2019-07", position: "3rd", name: "Hackathon XP", organizer: "XP Lab e TDC SP" },
  { date: "2019-07", position: "2nd", name: "B2W Hackathon", organizer: "B2W Summit" },
  { date: "2019-05", position: "1st", name: "VTEX Hackathon", organizer: "VTEX Day" },
  { date: "2019-05", position: "2nd", name: "PMI Hackathon", organizer: "FIAP / PMI" },
  { date: "2019-04", position: "2nd", name: "Salesforce Hackathon", organizer: "FIAP / Everymind / Salesforce" },
  { date: "2019-04", position: "1st", name: "Port Hackathon", organizer: "BTP / ModalGR" },
  { date: "2018-12", position: "1st", name: "Hackathon Loggi", organizer: "Loggi" },
  { date: "2017-11", position: "3rd", name: "Hackathon Abramit", organizer: "Viva Real / Cirella" },
  { date: "2017-08", position: "speaker", name: "Guest Speaker", organizer: "Nerdzão / IBM Brasil" },
  { date: "2017-08", position: "1st", name: "AngelHack Global", organizer: "Wayra Accelerator" },
  { date: "2017-08", position: "2nd", name: "Hackathon Ambev", organizer: "Ambev Brasil" },
  { date: "2016-12", position: "finalist", name: "The Code Force", organizer: "Santander / Mastercard" },
] as const;


export const education: readonly EducationItem[] = [
  {
    degree: "Pós-Graduação",
    field: "Applied AI Engineering",
    institution: "Unipds",
    year: null,
    status: "in_progress",
  },
  {
    degree: "Bacharelado",
    field: "Engenharia de Computação",
    institution: "Univesp",
    year: null,
    status: "in_progress",
  },
  {
    degree: "Pós-Graduação",
    field: "Engenharia de Software",
    institution: "UFRJ",
    year: "2023",
    status: "completed",
  },
  {
    degree: "Pós-Graduação",
    field: "Aplicações Mobile",
    institution: "IESB Brasília",
    year: "2022",
    status: "completed",
  },
  {
    degree: "MBA",
    field: "Big Data / Data Science",
    institution: "FIAP",
    year: "2018",
    status: "completed",
  },
  {
    degree: "Tecnólogo",
    field: "Análise e Desenvolvimento de Sistemas",
    institution: "FIT — Impacta",
    year: "2016",
    status: "completed",
  },
] as const;


export const countries: readonly Country[] = [
  { name: "Brasil", code: "BR" },
  { name: "Suíça", code: "CH" },
  { name: "Colômbia", code: "CO" },
  { name: "Londres", code: "GB" },
  { name: "Alemanha", code: "DE" },
] as const;
