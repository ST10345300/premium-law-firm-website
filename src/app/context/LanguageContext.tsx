import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "zu" | "xh" | "af";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.about": "About us",
    "nav.services": "Services",
    "nav.cases": "Cases",
    "nav.practice": "Practice",
    "nav.clients": "Clients",
    "nav.contact": "Contact",
    "nav.call": "Call us",

    // Home Page
    "home.hero.title1": "Unraveling",
    "home.hero.title2": "Complexities",
    "home.hero.title3": "Together",
    "home.hero.description": "At Blackwell Attorneys, we transform legal complexities into strategic opportunities. Our seasoned team delivers exceptional, personalized legal services to protect and empower you.",
    "home.hero.consult": "Consult Now",
    "home.hero.explore": "Explore",
    "home.hero.trusted": "Trusted by leading organizations",
    "home.stats.cases": "cases handled",
    "home.stats.satisfied": "satisfied rate",

    // Services
    "services.corporate": "Corporate Law Services",
    "services.corporate.desc": "Guiding businesses through legal complexities with unparalleled expertise.",
    "services.family": "Family Law Consultation",
    "services.family.desc": "Compassionate support for your family's most important legal matters.",
    "services.ip": "Intellectual Property Protection",
    "services.ip.desc": "Safeguarding your innovations and creative works with precision.",
    "services.criminal": "Criminal Defense Services",
    "services.criminal.desc": "Vigorous defense of your rights with experienced legal counsel.",
    "services.learn": "Learn more",

    // Common
    "common.readMore": "Read more",
    "common.contactUs": "Contact Us Now",
    "common.getStarted": "Ready to Get Started?",
    "common.consultation": "Schedule a consultation with our expert legal team today",
  },
  zu: {
    // Navigation (Zulu)
    "nav.about": "Mayelana nathi",
    "nav.services": "Izinsizakalo",
    "nav.cases": "Amacala",
    "nav.practice": "Imikhakha",
    "nav.clients": "Amakhasimende",
    "nav.contact": "Xhumana",
    "nav.call": "Sishayele",

    // Home Page
    "home.hero.title1": "Sivula",
    "home.hero.title2": "Ubunzima",
    "home.hero.title3": "Ndawonye",
    "home.hero.description": "E-Blackwell Attorneys, siguqula ubunzima bezomthetho bube amathuba eqhingasu. Ithimba lethu elinekhono linikeza izinsizakalo zomthetho ezihle kakhulu, eziqondene nawe ukuze sikuvikele futhi sikuqinise.",
    "home.hero.consult": "Xhumana Manje",
    "home.hero.explore": "Hlola",
    "home.hero.trusted": "Sithenjwa yizinhlangano ezihola phambili",
    "home.stats.cases": "amacala aphethwe",
    "home.stats.satisfied": "isilinganiso sanelisekile",

    // Services
    "services.corporate": "Izinsizakalo Zomthetho Wezamabhizinisi",
    "services.corporate.desc": "Siqondisa amabhizinisi ngobunzima bezomthetho ngobuchule obungenamfanelo.",
    "services.family": "Ukwelulekwa Ngomthetho Womndeni",
    "services.family.desc": "Ukwesekwa okunozwela ezindabeni ezibaluleke kakhulu zomndeni wakho.",
    "services.ip": "Ukuvikelwa Kwempahla Yomqondo",
    "services.ip.desc": "Ukuvikela ukusungula kwakho nemisebenzi yakho yobuciko ngokunemba.",
    "services.criminal": "Izinsizakalo Zokuvikela Ubugebengu",
    "services.criminal.desc": "Ukuvikelwa okunamandla kwamalungelo akho ngabeluleki abanolwazi.",
    "services.learn": "Funda kabanzi",

    // Common
    "common.readMore": "Funda okwengeziwe",
    "common.contactUs": "Xhumana Nathi Manje",
    "common.getStarted": "Ulungele Ukuqala?",
    "common.consultation": "Hlela ukubonisana neqembu lethu lochwepheshe bezomthetho namuhla",
  },
  xh: {
    // Navigation (Xhosa)
    "nav.about": "Malunga nathi",
    "nav.services": "Iinkonzo",
    "nav.cases": "Amatyala",
    "nav.practice": "Iindawo",
    "nav.clients": "Abathengi",
    "nav.contact": "Qhagamshelana",
    "nav.call": "Sitsalele",

    // Home Page
    "home.hero.title1": "Ukutyhila",
    "home.hero.title2": "Ubunzima",
    "home.hero.title3": "Kunye",
    "home.hero.description": "E-Blackwell Attorneys, siguqula ubunzima bezomthetho sibe ngamathuba obuchule. Iqela lethu elinamava linikezela ngeenkonzo zomthetho ezikumgangatho ophezulu, ezenzelwe wena ukukhusela nokukunika amandla.",
    "home.hero.consult": "Bonisana Ngoku",
    "home.hero.explore": "Hlola",
    "home.hero.trusted": "Sithenjwa yimibutho ekhokelayo",
    "home.stats.cases": "amatyala aqhutyiweyo",
    "home.stats.satisfied": "umlinganiselo wokwaneliseka",

    // Services
    "services.corporate": "Iinkonzo Zomthetho Wezorhwebo",
    "services.corporate.desc": "Siqondisa amashishini kubunzima bezomthetho ngobuchule obungenakufikelela.",
    "services.family": "Ukubonisana Ngomthetho Wosapho",
    "services.family.desc": "Inkxaso enovelwano kwimiba ebaluleke kakhulu yosapho lwakho.",
    "services.ip": "Ukukhuselwa Kwepropathi Yengqondo",
    "services.ip.desc": "Ukukhusela ubugcisa nemisebenzi yakho yobugcisa ngokuchanekileyo.",
    "services.criminal": "Iinkonzo Zokukhusela Ulwaphulo-mthetho",
    "services.criminal.desc": "Ukhuseleko olunamandla lwamalungelo akho ngamacwebesha anomava.",
    "services.learn": "Funda ngakumbi",

    // Common
    "common.readMore": "Funda okungakumbi",
    "common.contactUs": "Qhagamshelana Nathi Ngoku",
    "common.getStarted": "Ukulungele Ukuqalisa?",
    "common.consultation": "Cwangcisa ukubonisana neqela lethu leengcali zomthetho namhlanje",
  },
  af: {
    // Navigation (Afrikaans)
    "nav.about": "Oor ons",
    "nav.services": "Dienste",
    "nav.cases": "Sake",
    "nav.practice": "Praktyk",
    "nav.clients": "Kliënte",
    "nav.contact": "Kontak",
    "nav.call": "Bel ons",

    // Home Page
    "home.hero.title1": "Ontwar",
    "home.hero.title2": "Kompleksiteite",
    "home.hero.title3": "Saam",
    "home.hero.description": "By Blackwell Attorneys transformeer ons regskompleksiteite in strategiese geleenthede. Ons ervare span lewer uitsonderlike, persoonlike regsdienste om jou te beskerm en te bemagtig.",
    "home.hero.consult": "Konsulteer Nou",
    "home.hero.explore": "Verken",
    "home.hero.trusted": "Vertrou deur toonaangewende organisasies",
    "home.stats.cases": "sake hanteer",
    "home.stats.satisfied": "tevredenheidskoers",

    // Services
    "services.corporate": "Korporatiewe Regsdienste",
    "services.corporate.desc": "Ons lei besighede deur regskompleksiteite met ongeëwenaarde kundigheid.",
    "services.family": "Familiereg Konsultasie",
    "services.family.desc": "Deernisvol ondersteuning vir jou familie se belangrikste regsaangeleenthede.",
    "services.ip": "Intellektuele Eiendom Beskerming",
    "services.ip.desc": "Beskerming van jou innovasies en kreatiewe werke met presisie.",
    "services.criminal": "Kriminele Verdediging Dienste",
    "services.criminal.desc": "Kragtige verdediging van jou regte met ervare regsraad.",
    "services.learn": "Leer meer",

    // Common
    "common.readMore": "Lees meer",
    "common.contactUs": "Kontak Ons Nou",
    "common.getStarted": "Gereed om te Begin?",
    "common.consultation": "Skeduleer 'n konsultasie met ons kundige regspan vandag",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
