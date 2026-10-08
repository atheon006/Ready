/** Texte bilingue. Le site est en français par défaut, avec une version anglaise. */
export interface Bi {
  fr: string;
  en: string;
}

export const bi = (fr: string, en: string): Bi => ({ fr, en });

/** Libellés de l'interface. */
export const ui = {
  nav: {
    work: bi('Projets', 'Work'),
    about: bi('À propos', 'About'),
    oss: bi('Open source', 'Open source'),
    stack: bi('Compétences', 'Skills'),
    contact: bi('Contact', 'Contact'),
  },
  oss: {
    eyebrow: bi('Open source', 'Open source'),
    title: bi('Des projets open source que j’ai repris ou que j’utilise.', 'Open-source projects I have reworked or use.'),
    intro: bi(
      'Des dépôts d’autres développeurs, que j’ai modifiés pour mes besoins ou que j’utilise. Le mérite du projet d’origine revient à ses auteurs.',
      'Repositories by other developers that I have adapted to my needs or use. Credit for the original projects goes to their authors.',
    ),
    modified: bi('Modifié', 'Modified'),
    used: bi('Utilisé', 'Used'),
    forkOf: bi('Fork de', 'Fork of'),
    myWork: bi('Ma contribution :', 'My contribution:'),
    myFork: bi('Mon fork', 'My fork'),
    site: bi('Site du projet', 'Project site'),
  },
  hero: {
    seeWork: bi('Voir mes projets', 'See my work'),
    contact: bi('Me contacter', 'Get in touch'),
  },
  work: {
    eyebrow: bi('Projets', 'Selected work'),
    title: bi('Des produits en ligne, utilisés pour de vrai.', 'Shipped products, built for real use.'),
    intro: bi(
      'Des produits complets, de l’interface à la base de données, dont deux en tant que CTO, puis d’autres projets auxquels j’ai participé.',
      'Complete products, from the interface down to the database, two of them as CTO, followed by other projects I have worked on.',
    ),
    more: bi('Autres projets', 'More projects'),
    caseStudy: bi('Étude de cas', 'Case study'),
    visit: bi('Voir le site', 'Visit site'),
    code: bi('Code source', 'Source code'),
    privateCode: bi('Code privé', 'Private code'),
  },
  status: {
    live: bi('En ligne', 'Live'),
    beta: bi('En lancement', 'Launching'),
    prototype: bi('Prototype', 'Prototype'),
    archived: bi('Archivé', 'Archived'),
  },
  project: {
    back: bi('Tous les projets', 'All projects'),
    role: bi('Rôle', 'Role'),
    year: bi('Année', 'Year'),
    type: bi('Type', 'Type'),
    status: bi('Statut', 'Status'),
    links: bi('Liens', 'Links'),
    overview: bi('Le projet', 'Overview'),
    highlights: bi('Points forts', 'Highlights'),
    stack: bi('Technologies', 'Tech stack'),
    gallery: bi('Captures', 'Screenshots'),
    next: bi('Projet suivant', 'Next project'),
  },
  about: {
    eyebrow: bi('À propos', 'About'),
    focus: bi('Ce que je fais', 'What I do'),
  },
  stack: {
    eyebrow: bi('Compétences', 'Skills'),
    title: bi('Les outils que j’utilise au quotidien.', 'The tools I work with every day.'),
  },
  contact: {
    eyebrow: bi('Contact', 'Contact'),
    title: bi('Un projet en tête ? Parlons-en.', 'Have a project in mind? Let’s talk.'),
    text: bi(
      'Je réponds à tous les messages, en français ou en anglais. Le plus simple : un e-mail.',
      'I answer every message, in French or English. The easiest way is email.',
    ),
    copy: bi('Copier l’adresse', 'Copy address'),
    copied: bi('Adresse copiée', 'Address copied'),
  },
  footer: {
    built: bi('Conçu et développé par Ready Kalonda.', 'Designed and built by Ready Kalonda.'),
  },
  notFound: {
    title: bi('Page introuvable', 'Page not found'),
    text: bi('Cette page n’existe pas ou a été déplacée.', 'This page does not exist or has moved.'),
    home: bi('Retour à l’accueil', 'Back to home'),
  },
} as const;
