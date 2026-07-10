import type { Translations } from "./types";
import { tmkImages } from "../site";

export const en: Translations = {
  meta: {
    title: "TMK Limited — creating value across key industries",
    description:
      "TMK Limited unites key industries — from real estate to agrotech — creating integrated business solutions.",
  },
  nav: {
    home: "Home",
    about: "About us",
    projects: "Projects",
    services: "Services",
    partners: "Partners",
    contacts: "Contacts",
    contactUs: "Contact us",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    title: "Creating value across key industries: from real estate to IT",
    subtitle:
      "TMK Limited unites key industries — from real estate to agrotech — creating integrated business solutions.",
    cta: "Leave a request",
  },
  about: {
    label: "About us",
    heading: "TMK Limited is a diversified holding",
    description:
      "Operating across various sectors of the economy. One of our key areas is commercial real estate — leasing and managing office and warehouse spaces with high-quality infrastructure solutions. Beyond real estate, TMK Limited actively develops:",
    missionLabel: "Our mission",
    missionText:
      "We create integrated solutions focused on economic growth, technological development and innovation, implementing strategic projects in line with international business standards.",
    missionTags: [
      "Construction",
      "Drilling",
      "Agriculture",
      "HoReCa",
      "IT development",
      "Investment fund",
      "Telecommunications",
      "Digital marketing & production",
    ],
    readMore: "Read more",
  },
  directions: {
    label: "Our services",
    heading: "Our key business areas:",
    items: [
      {
        id: "real-estate",
        title: "Commercial real estate",
        bullets: [
          "Leasing and management of modern office spaces with full infrastructure and service support",
          "Development and optimization of properties to increase efficiency and profitability",
          "Warehouse solutions for logistics, e-commerce and industry",
        ],
        brands: [
          { name: "Valar Group", href: "https://tmk-limited.com/valar-group/en" },
          { name: "Workflow", href: "https://tmk-limited.com/workflow/en" },
        ],
        image: tmkImages.directions.realEstate,
        panelSide: "left",
        panelVariant: "white",
      },
      {
        id: "agriculture",
        title: "Agriculture",
        bullets: [
          "Investment in modern agrotechnologies for sustainable production",
          "Development of innovative agribusiness solutions for food security and export",
        ],
        brands: [
          {
            name: "KazAgris Ventures",
            href: "https://tmk-limited.com/kazagris-ventures/en",
          },
        ],
        image: tmkImages.directions.agriculture,
        panelSide: "right",
        panelVariant: "gold",
      },
      {
        id: "construction",
        title: "Construction & drilling",
        bullets: [
          "High-quality projects with advanced engineering solutions",
          "Sustainable and cost-effective development strategies",
        ],
        brands: [
          { name: "Kazakhstan Grand Constructions LLP" },
          { name: "Kaz innotech" },
          { name: "Tm-3Ki", href: "https://tmk-limited.com/tm-3ki-drilling-llp/en" },
        ],
        image: tmkImages.directions.construction,
        panelSide: "left",
        panelVariant: "navy",
      },
      {
        id: "telecom",
        title: "Telecom & IT",
        bullets: [
          "Digital infrastructure for connectivity and business transformation",
          "Smart technology integration for productivity and operational efficiency",
        ],
        brands: [
          {
            name: "QazConnect Telecom",
            href: "https://tmk-limited.com/qazconnect-telecom/en",
          },
          {
            name: "TMK TechnoHorizon LLP",
            href: "https://tmk-limited.com/tmk-technohorizon-llp/en",
          },
        ],
        image: tmkImages.directions.telecom,
        panelSide: "right",
        panelVariant: "white",
      },
      {
        id: "marketing",
        title: "Digital marketing & content production",
        bullets: [
          "Full-cycle digital agency with a professional production studio",
          "Social media, commercial content and advertising campaigns",
          "Films, commercials and corporate video production",
        ],
        brands: [
          {
            name: "Qaitadan Creative Partners",
            href: "https://tmk-limited.com/qaitadan-creative-partners/en",
          },
        ],
        image: tmkImages.directions.marketing,
        panelSide: "left",
        panelVariant: "gold",
      },
      {
        id: "logistics",
        title: "Logistics",
        bullets: [
          "Comprehensive logistics solutions",
          "Supply chain management and freight routing",
          "Transparency and optimization guaranteed at every stage of transport",
        ],
        brands: [
          {
            name: "Streamline Logistics",
            href: "https://tmk-limited.com/streamline-logistics/en",
          },
        ],
        image: tmkImages.directions.logistics,
        panelSide: "right",
        panelVariant: "navy",
      },
      {
        id: "horeca",
        title: "HoReCa",
        bullets: [
          "Coffee shop network in business centers and catering for meetings, shoots and events",
          "Gastronomy project focused on corporate dining and event service",
          "Consistent quality, reliable logistics and high service standards",
        ],
        brands: [
          { name: "Table 61", href: "https://tmk-limited.com/table61/en" },
        ],
        image: tmkImages.directions.horeca,
        panelSide: "left",
        panelVariant: "white",
      },
    ],
  },
  partners: {
    label: "Partners",
    heading: "Our partners",
    hint: "Hover to pause",
    items: [
      { name: "Yandex", logo: "/images/tmk/partners/yandex.png" },
      { name: "Bosch", logo: "/images/tmk/partners/bosch.svg" },
      { name: "Chevron", logo: "/images/tmk/partners/chevron.svg" },
      { name: "PUBG Mobile", logo: "/images/tmk/partners/pubg.png" },
      { name: "Highland Gold", logo: "/images/tmk/partners/highland-gold.png" },
      { name: "Bonduelle", logo: "/images/tmk/partners/bonduelle.png" },
      { name: "Magnum Cash&Carry", logo: "/images/tmk/partners/magnum.png" },
      { name: "Coca-Cola", logo: "/images/tmk/partners/coca-cola.png" },
      { name: "Kcell", logo: "/images/tmk/partners/kcell.png" },
    ],
  },
  completedProjects: {
    label: "Completed projects",
    heading: "Completed projects",
    viewMore: "Learn more",
    items: [
      {
        id: "horeca",
        slug: "horeca",
        title: "Table 61 Catering",
        excerpt:
          "Coffee shops in business centers and catering for corporate events.",
        image: tmkImages.projects.horeca,
      },
      {
        id: "kazagris",
        slug: "kazagris",
        title: "KazAgris Ventures",
        excerpt:
          "Modern beef farm and premium meat production from pasture to dry-aged steaks.",
        image: tmkImages.projects.kazagris,
      },
    ],
  },
  contact: {
    title: "Leave a request",
    description:
      "Fill in your details and we will contact you to clarify all the details.",
    addressLabel: "Address",
    addressLine1: "Almaty, Kazakhstan,",
    addressLine2: "10/1 Elebekov St.",
    hoursTime: "9:00 AM – 6:00 PM",
    hoursDays: "Weekdays (Mon–Fri)",
    footerContact: "Contact us",
    form: {
      name: "Your name",
      phone: "Phone",
      email: "Enter E-mail",
      message: "Describe your request",
      submit: "Submit",
      privacyPrefix: "I agree to the terms of the",
      privacyLink: "Privacy Policy",
      success: "Request sent. We will contact you shortly.",
      error: "Failed to send request. Please try again later.",
    },
  },
  footer: {
    copyright: "Copyright © 2024",
    privacy: "Privacy Policy",
    backHome: "Back to home",
    hoursLabel: "Working hours",
  },
  projectPages: {
    kazagris: {
      heroTitle: "KazAgris Ventures",
      label: "About us",
      heading: "KazAgris Ventures",
      description: [
        "A modern farm specializing in beef cattle breeding and premium meat production.",
        "We create a closed cycle: from eco-friendly pastures to restaurant-grade dry-aged steaks.",
      ],
      missionLabel: "Our mission",
      mission:
        "Bring the taste of real meat back to the Kazakh market and prove local products can meet global standards.",
      stats: [
        { value: "3000", label: "Total cattle headcount" },
        { value: "20,000", label: "Hectares of pasture land" },
        { value: "150,000", label: "Kg of Black Angus annually" },
      ],
      servicesLabel: "Our services",
      servicesHeading: "What we offer:",
      services: [
        "Natural meat without hormones and antibiotics",
        "Dry-aged steaks 21–45 days",
        "Quality control at every stage — from field to packaging",
        "Products for HoReCa and gourmets",
      ],
    },
    horeca: {
      heroTitle: "Table 61 Catering",
      label: "About us",
      heading: "Table 61 Catering",
      description: [
        "A gastronomy project combining coffee shops in business centers and event catering services.",
        "The first location opened at Yandex offices. Table 61 is about thoughtful approach, attention to detail and professionalism.",
      ],
      missionLabel: "Our mission",
      mission:
        "Coffee shops + catering for offices, events and businesses with flexible solutions and premium quality.",
      stats: [
        { value: "10+", label: "Planned locations by 2025" },
        { value: "1", label: "Coffee shop at Yandex office" },
        { value: "24/7", label: "Flexible event catering" },
      ],
      servicesLabel: "Our services",
      servicesHeading: "Our services",
      services: [
        "Coffee, fresh pastries, light breakfasts and lunches in business centers",
        "Catering for corporate events and film sets",
        "Custom orders and branded packaging for events",
        "City delivery by prior arrangement",
      ],
    },
  },
};
