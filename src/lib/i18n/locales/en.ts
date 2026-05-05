export interface Dict {
  skipLink: string;
  nav: {
    work: string;
    awards: string;
    about: string;
    contact: string;
    writingSoon: string;
  };
  hero: {
    badge: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    copyEmail: string;
    emailCopied: string;
    slogan: string;
  };
  about: {
    eyebrow: string;
    p1: string;
    p2: string;
    stats: {
      career: string;
      companies: string;
      hackathons: string;
      firstPlace: string;
    };
  };
  projects: {
    eyebrow: string;
    moreLabel: string;
  };
  awards: {
    eyebrow: string;
    subtitle: string;
    first: string;
    second: string;
    third: string;
    finalist: string;
    speaker: string;
  };
  education: {
    eyebrow: string;
    inProgress: string;
    completed: string;
  };
  stack: {
    eyebrow: string;
    languages: string;
    frontend: string;
    backendInfra: string;
    tooling: string;
    marqueeLabel: string;
  };
  experience: {
    eyebrow: string;
    present: string;
  };
  countries: {
    eyebrow: string;
    subtitle: string;
    wip: string;
  };
  contact: {
    eyebrow: string;
    status: string;
    phone: string;
    location: string;
  };
  footer: {
    copy: string;
    version: string;
  };
}

export const en: Dict = {
  skipLink: "Skip to content",
  nav: {
    work: "work",
    awards: "awards",
    about: "about",
    contact: "contact",
    writingSoon: "soon",
  },
  hero: {
    badge: "open to conversations · 2026",
    eyebrow: "EJDS · Tech Lead · Brasil",
    title: "I build systems that hold up on Monday mornings.",
    subtitle:
      "Tech Lead at Porto Seguro. ~10 years across frontend, mobile and architecture — banks, fintechs, fraud detection, intranet for 18k people.",
    cta: "See projects",
    copyEmail: "Copy email",
    emailCopied: "copied ✓",
    slogan: "built to last —",
  },
  about: {
    eyebrow: "About",
    p1: "Tech lead with a strong product mindset. I've spent a decade building across banking, fintechs, supply chain, logistics and education — always focused on systems that teams can understand, evolve and operate without ceremony.",
    p2: "From fraud detection at Porto Seguro to a corporate intranet for 18k employees, a stock trading module at Guide Investimentos and an international remittance portal at Santander — I care about the business outcome, not just the code.",
    stats: {
      career: "years of career",
      companies: "companies / projects",
      hackathons: "hackathon awards",
      firstPlace: "1st place",
    },
  },
  projects: {
    eyebrow: "Projects",
    moreLabel: "+{n} more projects",
  },
  awards: {
    eyebrow: "Awards",
    subtitle: "22 awards · 5× 1st place",
    first: "1st",
    second: "2nd",
    third: "3rd",
    finalist: "Finalist",
    speaker: "Speaker",
  },
  education: {
    eyebrow: "Education",
    inProgress: "In progress",
    completed: "Completed",
  },
  stack: {
    eyebrow: "Stack",
    languages: "Languages",
    frontend: "Frontend",
    backendInfra: "Backend / Infra",
    tooling: "State / Tooling",
    marqueeLabel: "More tools",
  },
  experience: {
    eyebrow: "Experience",
    present: "present",
  },
  countries: {
    eyebrow: "Places",
    subtitle: "countries visited",
    wip: "list in progress",
  },
  contact: {
    eyebrow: "Contact",
    status: "open to conversations · 2026",
    phone: "+55 11 97180-1555",
    location: "São Paulo · Brasil · Remote",
  },
  footer: {
    copy: "© 2026 emersonjds — handcrafted, no animation library",
    version: "v2.0",
  },
};
