export type Locale = "ru" | "en";

export type InterestOption =
  | "investments"
  | "realEstate"
  | "marketing"
  | "technologies"
  | "partnership"
  | "other";

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description?: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  highlight?: string;
  metric?: string;
}

export interface CaseItem {
  name: string;
  description: string;
  result?: string;
  metric?: string;
}

export interface PartnerItem {
  name: string;
}

export interface StrategyItem {
  title: string;
  description: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    directions: string;
    projects: string;
    results: string;
    strategy: string;
    contacts: string;
    cta: string;
    menu: string;
    close: string;
    theme: string;
  };
  hero: {
    brand: string;
    tagline: string;
    taglineAccent: string;
    subtitle: string;
    stats: StatItem[];
    trustStrip: string[];
    cta: string;
  };
  directions: {
    title: string;
    heading: string;
    description: string;
    tabs: {
      extraSpace: string;
      development: string;
      technoHorizon: string;
      qaitadan: string;
      itSolutions: string;
    };
  };
  about: {
    title: string;
    heading: string;
    description: string;
    points: string[];
    ecosystem: {
      investments: string;
      realEstate: string;
      marketing: string;
      technology: string;
    };
  };
  stats: {
    title: string;
    heading: string;
    items: StatItem[];
  };
  trust: {
    title: string;
    heading: string;
    partners: PartnerItem[];
  };
  realEstate: {
    title: string;
    heading: string;
    description: string;
    projects: ProjectItem[];
  };
  extraSpace: {
    title: string;
    heading: string;
    stats: StatItem[];
    features: string[];
  };
  development: {
    title: string;
    heading: string;
    features: string[];
  };
  technoHorizon: {
    title: string;
    heading: string;
    badges: string[];
    products: string[];
  };
  marketingResults: {
    title: string;
    heading: string;
    cases: CaseItem[];
  };
  qaitadan: {
    title: string;
    heading: string;
    services: string[];
    stats: StatItem[];
  };
  itSolutions: {
    title: string;
    heading: string;
    services: string[];
  };
  strategy: {
    title: string;
    heading: string;
    description: string;
    goalBadge: string;
    items: StrategyItem[];
  };
  finalCta: {
    title: string;
    description: string;
    cta: string;
  };
  contact: {
    title: string;
    description: string;
    address: string;
    email: string;
    phone: string;
    hours: string;
    hoursValue: string;
    labels: {
      email: string;
      phone: string;
      address: string;
    };
    form: {
      name: string;
      phone: string;
      email: string;
      company: string;
      interest: string;
      interestPlaceholder: string;
      comment: string;
      submit: string;
      privacyPrefix: string;
      privacyLink: string;
      privacy: string;
      success: string;
      error: string;
      interests: Record<InterestOption, string>;
    };
  };
  footer: {
    copyright: string;
    privacy: string;
    backHome: string;
  };
}
