export type Locale = "ru" | "en";

export interface StatItem {
  value: string;
  label: string;
}

export interface DirectionBrand {
  name: string;
  href?: string;
}

export interface DirectionItem {
  id: string;
  title: string;
  bullets: string[];
  brands: DirectionBrand[];
  image: string;
  /** Which side the text panel sits on at desktop width (matches original layout, not strictly alternating) */
  panelSide: "left" | "right";
  /** Panel fill on desktop — measured from tmk-limited.com T396 blocks */
  panelVariant: "white" | "gold" | "navy";
}

export interface PartnerLogo {
  name: string;
  logo: string;
}

export interface CompletedProjectItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface ProjectPageContent {
  heroTitle: string;
  label: string;
  heading: string;
  description: string[];
  missionLabel: string;
  mission: string;
  stats: StatItem[];
  servicesLabel: string;
  servicesHeading: string;
  services: string[];
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    services: string;
    partners: string;
    contacts: string;
    contactUs: string;
    menu: string;
    close: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    label: string;
    heading: string;
    description: string;
    missionLabel: string;
    missionText: string;
    missionTags: string[];
    readMore: string;
  };
  directions: {
    label: string;
    heading: string;
    items: DirectionItem[];
  };
  partners: {
    label: string;
    heading: string;
    hint: string;
    items: PartnerLogo[];
  };
  completedProjects: {
    label: string;
    heading: string;
    viewMore: string;
    items: CompletedProjectItem[];
  };
  contact: {
    title: string;
    description: string;
    addressLabel: string;
    addressLine1: string;
    addressLine2: string;
    hoursTime: string;
    hoursDays: string;
    footerContact: string;
    form: {
      name: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
      privacyPrefix: string;
      privacyLink: string;
      success: string;
      error: string;
    };
  };
  footer: {
    copyright: string;
    privacy: string;
    backHome: string;
    hoursLabel: string;
  };
  projectPages: {
    kazagris: ProjectPageContent;
    horeca: ProjectPageContent;
  };
}
