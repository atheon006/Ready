import portrait from '@assets/images/ready-kalonda-portrait.png';
import githubIcon from '@assets/SVGs/Github.svg?raw';
import linkedinIcon from '@assets/SVGs/Linkedin.svg?raw';
import mailIcon from '@assets/SVGs/Gmail.svg?raw';
import discordIcon from '@assets/SVGs/Discord.svg?raw';
import { bi } from './i18n';

export const site = {
  url: 'https://readykalonda.vercel.app',
  title: bi(
    'Ready Kalonda (Athéon) — Développeur web, mobile & systèmes',
    'Ready Kalonda (Athéon) — Web, mobile & systems developer',
  ),
  description: bi(
    'Développeur à Goma (RDC). Je conçois et mets en ligne des applications web et mobiles complètes : marketplace ATLAS, ParentEcole, EduTrack.',
    'Developer based in Goma (DR Congo). I design and ship complete web and mobile applications: the ATLAS marketplace, ParentEcole, EduTrack.',
  ),
};

export const profile = {
  name: 'Ready Kalonda',
  alias: 'Athéon',
  email: 'readykalonda38@gmail.com',
  portrait,
  role: bi('Développeur web, mobile & systèmes', 'Web, mobile & systems developer'),
  location: bi('Goma, RD Congo', 'Goma, DR Congo'),
  availability: bi('Disponible pour des missions', 'Available for new projects'),
  headline: bi(
    'Je construis des produits numériques qui tiennent la route.',
    'I build digital products that hold up in the real world.',
  ),
  intro: bi(
    'Applications web et mobiles conçues de bout en bout : interface, base de données, sécurité et mise en ligne. Pour des usages concrets, ici à Goma et au-delà.',
    'Web and mobile applications built end to end: interface, database, security and deployment. For real-world needs, here in Goma and beyond.',
  ),
  stats: [
    { value: '3', label: bi('applications en production', 'apps in production') },
    { value: 'Web + Android', label: bi('du navigateur au téléphone', 'from browser to phone') },
    { value: 'FR · EN', label: bi('je travaille dans les deux langues', 'I work in both languages') },
  ],
  about: [
    bi(
      'Je m’appelle Ready Kalonda, aussi connu en ligne sous le nom d’Athéon. Je suis développeur à Goma, en République démocratique du Congo.',
      'I’m Ready Kalonda, also known online as Athéon, a developer based in Goma, Democratic Republic of the Congo.',
    ),
    bi(
      'Ce qui me motive : partir d’un besoin réel — une marketplace pour les boutiques de ma ville, le lien entre une école et les parents — et le transformer en produit complet, utilisable sur un téléphone d’entrée de gamme comme sur un ordinateur.',
      'What drives me is taking a real need — a marketplace for the shops in my city, the link between a school and parents — and turning it into a complete product that works on an entry-level phone as well as on a desktop.',
    ),
    bi(
      'Je m’intéresse aussi à l’intelligence artificielle, à la cybersécurité et à l’automatisation : tout ce qui rend un logiciel fiable et sûr.',
      'I’m also into artificial intelligence, cybersecurity and automation: everything that makes software reliable and safe.',
    ),
  ],
  focus: [
    {
      title: bi('Applications web', 'Web applications'),
      text: bi('Interfaces rapides et accessibles avec React, TypeScript, Astro et Tailwind CSS.', 'Fast, accessible interfaces with React, TypeScript, Astro and Tailwind CSS.'),
    },
    {
      title: bi('Applications mobiles', 'Mobile apps'),
      text: bi('Flutter et Capacitor pour Android, avec un mode hors connexion pensé pour les réseaux lents.', 'Flutter and Capacitor for Android, with offline support designed for slow networks.'),
    },
    {
      title: bi('Back-end & données', 'Back end & data'),
      text: bi('Firebase, Supabase et PostgreSQL, Node.js, APIs REST et GraphQL.', 'Firebase, Supabase and PostgreSQL, Node.js, REST and GraphQL APIs.'),
    },
    {
      title: bi('Sécurité', 'Security'),
      text: bi('Règles d’accès vérifiées côté serveur et testées, double authentification, déploiements automatisés.', 'Server-side access rules backed by tests, two-factor authentication, automated deployments.'),
    },
  ],
  links: [
    { label: 'GitHub', url: 'https://github.com/atheon006', icon: githubIcon },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ready-kalonda-a8665a428/', icon: linkedinIcon },
    { label: 'E-mail', url: 'mailto:readykalonda38@gmail.com', icon: mailIcon },
    { label: 'Discord', url: 'https://discord.gg/wF4KcGYgz', icon: discordIcon },
  ],
};
