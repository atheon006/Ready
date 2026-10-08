import type { ImageMetadata } from 'astro';
import { bi, type Bi } from './i18n';
import { tech, type Tech } from './stack';

import atlasCover from '@assets/projects/atlas-cover.webp';
import atlasDesktop from '@assets/projects/atlas-desktop.webp';
import atlasMobile from '@assets/projects/atlas-mobile.webp';
import atlasAdmin from '@assets/projects/atlas-admin.webp';
import atlasLogo from '@assets/projects/logos/atlas.svg';
import parentCover from '@assets/projects/parentecole-cover.webp';
import parentDesktop from '@assets/projects/parentecole-desktop.webp';
import parentMobile from '@assets/projects/parentecole-mobile.webp';
import parentLogo from '@assets/projects/logos/parentecole.svg';
import eduCover from '@assets/projects/edutrack-cover.webp';
import eduDesktop from '@assets/projects/edutrack-desktop.webp';
import eduMobile from '@assets/projects/edutrack-mobile.webp';
import eduLogo from '@assets/projects/logos/edutrack.webp';
import v1Cover from '@assets/projects/portfolio-v1-cover.webp';
import v1Desktop from '@assets/projects/portfolio-v1-desktop.webp';
import v1Mobile from '@assets/projects/portfolio-v1-mobile.webp';
import arenaCover from '@assets/projects/arena-cover.webp';
import xeraCover from '@assets/projects/xera-cover.webp';
import xeraDesktop from '@assets/projects/xera-desktop.webp';
import objetsCover from '@assets/projects/objets-perdus-cover.webp';
import objetsDesktop from '@assets/projects/objets-perdus-desktop.webp';
import objetsMobile from '@assets/projects/objets-perdus-mobile.webp';
import shinobiCover from '@assets/projects/shinobi-cover.webp';

export type Status = 'live' | 'beta' | 'prototype' | 'archived';

export interface Shot {
  image: ImageMetadata;
  alt: Bi;
  kind: 'desktop' | 'mobile';
}

export interface Project {
  slug: string;
  name: string;
  featured: boolean;
  year: string;
  status: Status;
  accent: string;
  logo?: ImageMetadata;
  type: Bi;
  role: Bi;
  tagline: Bi;
  summary: Bi;
  description: Bi[];
  highlights: Bi[];
  stack: Tech[];
  links: { label: Bi; url: string }[];
  /** URL du code source, ou null si le dépôt est privé. */
  source: string | null;
  cover: ImageMetadata;
  coverAlt: Bi;
  shots: Shot[];
  note?: Bi;
}

export const projects: Project[] = [
  {
    slug: 'atlas',
    name: 'ATLAS',
    featured: true,
    year: '2026',
    status: 'beta',
    accent: '#f26b3a',
    logo: atlasLogo,
    type: bi('Marketplace · web, mobile & administration', 'Marketplace · web, mobile & admin'),
    role: bi('Conception et développement complet', 'Product design and full-stack development'),
    tagline: bi('La marketplace des boutiques vérifiées de Goma.', 'The marketplace for verified shops in Goma.'),
    summary: bi(
      'Les clients achètent auprès de boutiques vérifiées et paient par Mobile Money ; l’argent reste bloqué jusqu’à ce que le destinataire donne son code au livreur. Site client, app Flutter et espace d’administration.',
      'Customers buy from verified shops and pay with Mobile Money; the money stays in escrow until the recipient gives their code to the courier. Web storefront, Flutter app and admin back office.',
    ),
    description: [
      bi(
        'ATLAS est une marketplace pensée pour Goma : boutiques vérifiées par l’équipe, prix en francs congolais ou en dollars, prix de gros par paliers, livraison suivie à chaque étape.',
        'ATLAS is a marketplace built for Goma: shops verified by the team, prices in Congolese francs or US dollars, tiered wholesale pricing and delivery tracked at every step.',
      ),
      bi(
        'Le paiement est protégé : le client paie avant la livraison, ATLAS garde l’argent, et le vendeur n’est payé que lorsque le destinataire remet son code au livreur. Le site comprend aussi un espace vendeur et un espace livreur.',
        'Payment is protected: the customer pays before delivery, ATLAS holds the money, and the seller is only paid once the recipient hands their code to the courier. The site also includes a seller area and a courier area.',
      ),
      bi(
        'Un espace d’administration séparé, protégé par la double authentification, sert à trancher les litiges, noter les remboursements, valider les boutiques, tenir le catalogue, dessiner les quartiers sur une carte et régler la plateforme. Chaque action est inscrite au journal.',
        'A separate admin area, protected by two-factor authentication, is used to settle disputes, record refunds, approve shops, manage the catalogue, draw neighbourhoods on a map and configure the platform. Every action is logged.',
      ),
    ],
    highlights: [
      bi('Paiement bloqué jusqu’à la remise du code de livraison', 'Payment held in escrow until the delivery code is given'),
      bi('Boutiques et livreurs vérifiés par l’équipe', 'Shops and couriers verified by the team'),
      bi('Prix en CDF ou en USD, prix de gros par paliers', 'Prices in CDF or USD, tiered wholesale pricing'),
      bi('App mobile Flutter pour Android et iOS', 'Flutter mobile app for Android and iOS'),
      bi('Administration : litiges, remboursements, quartiers sur carte, journal', 'Admin: disputes, refunds, neighbourhood maps, audit log'),
    ],
    stack: [tech.React, tech.TypeScript, tech.Supabase, tech.PostgreSQL, tech.Flutter, tech.Dart, tech.Vercel],
    links: [
      { label: bi('Marketplace', 'Marketplace'), url: 'https://atlas-web-portal.vercel.app' },
      { label: bi('Démo avec données', 'Demo with sample data'), url: 'https://atlas-web-psi-pied.vercel.app' },
    ],
    source: null,
    cover: atlasCover,
    coverAlt: bi('Accueil de la marketplace ATLAS sur ordinateur et sur téléphone', 'ATLAS marketplace home page on desktop and phone'),
    shots: [
      { image: atlasDesktop, kind: 'desktop', alt: bi('Accueil de la marketplace sur ordinateur', 'Marketplace home on desktop') },
      { image: atlasMobile, kind: 'mobile', alt: bi('Accueil de la marketplace sur téléphone', 'Marketplace home on a phone') },
      { image: atlasAdmin, kind: 'desktop', alt: bi('Tableau de bord de l’espace d’administration', 'Admin dashboard') },
    ],
    note: bi(
      'Lancement en cours : les premières boutiques ajoutent leurs produits. Les captures viennent de la version de démonstration.',
      'Launch in progress: the first shops are adding their products. Screenshots come from the demo version.',
    ),
  },
  {
    slug: 'parentecole',
    name: 'ParentEcole',
    featured: true,
    year: '2026',
    status: 'live',
    accent: '#2f8f62',
    logo: parentLogo,
    type: bi('Suivi scolaire · Android, web & administration', 'School tracking · Android, web & admin'),
    role: bi('CTO · architecture et développement', 'CTO · architecture and development'),
    tagline: bi('Le lien entre l’école et les parents, en temps réel.', 'The link between school and parents, in real time.'),
    summary: bi(
      'Une app Android et web pour les parents (présences, frais et dates de renvoi, devoirs, conduite) et un site pour l’école (appel, caisse, communiqués), sur une base Firebase sécurisée côté serveur.',
      'An Android and web app for parents (attendance, fees and payment deadlines, homework, conduct) and a site for the school (roll call, cash desk, announcements), on a Firebase back end secured server-side.',
    ),
    description: [
      bi(
        'Les parents suivent en direct la présence de leurs enfants, ce qui reste à payer et les dates de renvoi, les devoirs, les notes de conduite et les communiqués. Ils lient un enfant avec son code élève (ou un QR code) et le numéro de téléphone donné à l’école.',
        'Parents follow their children’s attendance live, what is left to pay and payment deadlines, homework, conduct notes and announcements. They link a child with its student code (or a QR code) and the phone number registered with the school.',
      ),
      bi(
        'L’école gère tout depuis un site adapté à chaque rôle : direction, surveillants (appel express où l’on ne coche que les absents), professeurs, caisse (reçus imprimables, liste de recouvrement). Le personnel se connecte avec un code de vérification en deux étapes.',
        'The school runs everything from a site tailored to each role: management, supervisors (fast roll call where only absentees are ticked), teachers and the cash desk (printable receipts, collection list). Staff sign in with two-step verification.',
      ),
      bi(
        'Les droits d’accès sont vérifiés par le serveur grâce à des règles Firestore couvertes par des tests automatiques ; l’APK Android est signé et construit par GitHub Actions.',
        'Access rights are enforced server-side by Firestore rules covered by automated tests; the Android APK is signed and built by GitHub Actions.',
      ),
    ],
    highlights: [
      bi('Appel express : seuls les absents et les retards sont cochés', 'Fast roll call: only absentees and late arrivals are ticked'),
      bi('Frais par tranches avec alertes avant la date de renvoi', 'Fees in instalments with alerts before the deadline'),
      bi('Liaison parent-enfant vérifiée (code + téléphone)', 'Verified parent–child link (code + phone)'),
      bi('Règles de sécurité testées et double authentification du personnel', 'Tested security rules and staff two-factor authentication'),
      bi('Lisible hors connexion, connexion Google native sur Android', 'Readable offline, native Google sign-in on Android'),
    ],
    stack: [tech.React, tech.TypeScript, tech.Tailwind, tech.Capacitor, tech.Firebase, tech.GitHubActions],
    links: [
      { label: bi('Espace parent', 'Parent app'), url: 'https://parentecole.web.app' },
      { label: bi('Espace école', 'School site'), url: 'https://parentecole-app.web.app' },
    ],
    source: 'https://github.com/atheon006/ecoleparent',
    cover: parentCover,
    coverAlt: bi('Site de l’école et app des parents ParentEcole', 'ParentEcole school site and parent app'),
    shots: [
      { image: parentDesktop, kind: 'desktop', alt: bi('Connexion à l’espace école', 'School site sign-in') },
      { image: parentMobile, kind: 'mobile', alt: bi('Accueil de l’app des parents', 'Parent app welcome screen') },
    ],
  },
  {
    slug: 'xera1',
    name: 'XERA1',
    featured: true,
    year: '2026',
    status: 'live',
    accent: '#8b5cf6',
    type: bi('Plateforme communautaire · web & PWA', 'Community platform · web & PWA'),
    role: bi('CTO · architecture et développement', 'CTO · architecture and development'),
    tagline: bi('Transformer sa progression en opportunités.', 'Turn your progress into opportunities.'),
    summary: bi(
      'Une infrastructure de progression où les créateurs documentent leur travail, publient des preuves de leurs avancées et attirent collaborateurs, investisseurs ou soutien financier.',
      'A progress platform where builders document their work, publish proof of their progress and attract collaborators, investors or funding.',
    ),
    description: [
      bi(
        'XERA1 aide les créateurs à bâtir une réputation fondée sur l’exécution : ils créent des projets, publient chaque jour des traces de leur avancée, choisissent qui les voit, et transforment ce suivi en crédibilité auprès d’investisseurs, de collaborateurs et de leur communauté.',
        'XERA1 helps builders earn a reputation based on execution: they create projects, post daily proof of progress, choose who sees it, and turn that track record into credibility with investors, collaborators and their community.',
      ),
      bi(
        'En tant que CTO, j’ai porté l’architecture technique : migration vers une application React (Vite) en page unique, déploiement sur Vercel avec rendu côté serveur et adresses propres, données et comptes avec Supabase, et application installable (PWA).',
        'As CTO I led the technical architecture: migration to a React (Vite) single-page app, deployment on Vercel with server-side handlers and clean URLs, data and accounts with Supabase, and an installable app (PWA).',
      ),
    ],
    highlights: [
      bi('Projets, mises à jour quotidiennes et preuves de progression', 'Projects, daily updates and proof of progress'),
      bi('Fil, profils, messagerie et recherche', 'Feed, profiles, messaging and search'),
      bi('Application installable (PWA)', 'Installable app (PWA)'),
      bi('React (Vite) déployé sur Vercel, données Supabase', 'React (Vite) on Vercel, Supabase data'),
    ],
    stack: [tech.React, tech.Vite, tech.Supabase, tech.Vercel],
    links: [{ label: bi('Voir le site', 'Visit site'), url: 'https://xera1.xyz' }],
    source: 'https://github.com/GIBRILmadak/XERA1',
    cover: xeraCover,
    coverAlt: bi('Accueil de XERA1 sur ordinateur', 'XERA1 home page on desktop'),
    shots: [{ image: xeraDesktop, kind: 'desktop', alt: bi('Accueil de XERA1', 'XERA1 home page') }],
  },
  {
    slug: 'edutrack',
    name: 'EduTrack',
    featured: true,
    year: '2026',
    status: 'live',
    accent: '#3b82f6',
    logo: eduLogo,
    type: bi('Gestion scolaire · Android & web', 'School management · Android & web'),
    role: bi('Développement et mise en production', 'Development and deployment'),
    tagline: bi('Une application de gestion scolaire, une seule base de code.', 'A school management app from a single codebase.'),
    summary: bi(
      'Application Flutter multiplateforme : APK Android et application web installable (PWA) pour iPhone et ordinateur, avec notifications push et intégration continue.',
      'A cross-platform Flutter app: an Android APK and an installable web app (PWA) for iPhone and desktop, with push notifications and continuous integration.',
    ),
    description: [
      bi(
        'EduTrack réunit administrateurs, enseignants et parents autour du suivi scolaire : notes et évaluations, absences, emploi du temps.',
        'EduTrack brings administrators, teachers and parents together around school tracking: grades and assessments, absences and timetables.',
      ),
      bi(
        'Une seule base de code Flutter produit l’app Android et la version web installable. Interface Material 3 avec thème clair, sombre ou système, API REST avec authentification par jeton, notifications push via Firebase Cloud Messaging.',
        'A single Flutter codebase produces the Android app and the installable web version. Material 3 interface with light, dark or system theme, a REST API with token authentication, and push notifications through Firebase Cloud Messaging.',
      ),
      bi(
        'Chaque modification déclenche GitHub Actions, qui construit et archive la version web et le paquet Android.',
        'Every change triggers GitHub Actions, which builds and archives the web version and the Android bundle.',
      ),
    ],
    highlights: [
      bi('Android et web installable (PWA) depuis le même code', 'Android and installable web app (PWA) from the same code'),
      bi('Notifications push (Firebase Cloud Messaging)', 'Push notifications (Firebase Cloud Messaging)'),
      bi('Thème clair, sombre ou système', 'Light, dark or system theme'),
      bi('Construction automatique par GitHub Actions', 'Automated builds with GitHub Actions'),
    ],
    stack: [tech.Flutter, tech.Dart, tech.Firebase, tech.GitHubActions],
    links: [{ label: bi('Application web', 'Web app'), url: 'https://copa-ecole.web.app' }],
    source: 'https://github.com/atheon006/EduTrack-2.2',
    cover: eduCover,
    coverAlt: bi('Écran d’accueil d’EduTrack sur ordinateur et sur téléphone', 'EduTrack welcome screen on desktop and phone'),
    shots: [
      { image: eduDesktop, kind: 'desktop', alt: bi('Accueil d’EduTrack sur ordinateur', 'EduTrack on desktop') },
      { image: eduMobile, kind: 'mobile', alt: bi('Accueil d’EduTrack sur téléphone', 'EduTrack on a phone') },
    ],
    note: bi(
      'Reprise et extension d’un projet open source de gestion scolaire (Ash469).',
      'Builds on and extends an open-source school management project (Ash469).',
    ),
  },
  {
    slug: 'objets-perdus',
    name: 'Objets perdus',
    featured: false,
    year: '2026',
    status: 'live',
    accent: '#4f6fbf',
    type: bi('Application web · étiquettes QR', 'Web app · QR labels'),
    role: bi('Participation au développement', 'Contributor'),
    tagline: bi('Chaque objet mérite de retrouver son propriétaire.', 'Every lost item deserves to find its way home.'),
    summary: bi(
      'Des planches de QR codes uniques à coller sur ses affaires : la personne qui trouve l’objet scanne le code et contacte le propriétaire, sans jamais voir ses données personnelles.',
      'Sheets of unique QR codes to stick on your belongings: whoever finds the item scans the code and contacts the owner without ever seeing their personal details.',
    ),
    description: [
      bi(
        'Objets perdus génère des planches de QR codes à coller sur un téléphone, un portefeuille, des clés, un bagage ou un passeport. Un simple scan permet à la personne qui retrouve l’objet de contacter son propriétaire instantanément.',
        'Objets perdus generates sheets of QR codes to stick on a phone, wallet, keys, luggage or passport. A single scan lets whoever finds the item contact its owner instantly.',
      ),
      bi(
        'Les coordonnées du propriétaire restent privées : le contact passe par l’application. Connexion avec Google ou par e-mail, protection anti-robots par reCAPTCHA.',
        'The owner’s details stay private: contact goes through the app. Sign-in with Google or email, bot protection with reCAPTCHA.',
      ),
    ],
    highlights: [
      bi('QR codes uniques imprimables par planche', 'Printable sheets of unique QR codes'),
      bi('Contact du propriétaire sans exposer ses données', 'Owner contact without exposing personal data'),
      bi('Connexion Google ou e-mail, protection reCAPTCHA', 'Google or email sign-in, reCAPTCHA protection'),
    ],
    stack: [tech.React, tech.Firebase, tech.Vercel],
    links: [{ label: bi('Voir le site', 'Visit site'), url: 'https://objetsperdus.online' }],
    source: null,
    cover: objetsCover,
    coverAlt: bi('Accueil d’Objets perdus sur ordinateur et sur téléphone', 'Objets perdus home page on desktop and phone'),
    shots: [
      { image: objetsDesktop, kind: 'desktop', alt: bi('Accueil d’Objets perdus sur ordinateur', 'Objets perdus on desktop') },
      { image: objetsMobile, kind: 'mobile', alt: bi('Accueil d’Objets perdus sur téléphone', 'Objets perdus on a phone') },
    ],
  },
  {
    slug: 'portfolio-v1',
    name: 'Portfolio v1',
    featured: false,
    year: '2026',
    status: 'archived',
    accent: '#e0892e',
    type: bi('Site vitrine', 'Personal website'),
    role: bi('Design et développement', 'Design and development'),
    tagline: bi('Ma première vitrine : typographie forte et animations au défilement.', 'My first portfolio: bold type and scroll animations.'),
    summary: bi(
      'Un portfolio expressif construit avec Vite, animé avec GSAP et un défilement fluide (Lenis).',
      'An expressive portfolio built with Vite, animated with GSAP and smooth scrolling (Lenis).',
    ),
    description: [
      bi(
        'Première version de mon portfolio : une direction artistique affirmée, des titres géants et des apparitions de texte synchronisées avec le défilement.',
        'The first version of my portfolio: a bold art direction, giant headlines and text reveals synced with scrolling.',
      ),
      bi(
        'Construit avec Vite pour un site léger et optimisé, animé avec GSAP (ScrollTrigger) et Lenis pour le défilement inertiel.',
        'Built with Vite for a light, optimised site, animated with GSAP (ScrollTrigger) and Lenis for inertial scrolling.',
      ),
    ],
    highlights: [
      bi('Animations au défilement avec GSAP ScrollTrigger', 'Scroll-driven animations with GSAP ScrollTrigger'),
      bi('Défilement fluide avec Lenis', 'Smooth scrolling with Lenis'),
    ],
    stack: [tech.HTML, tech.CSS, tech.JavaScript, tech.Vite, tech.GSAP],
    links: [{ label: bi('Voir le site', 'Visit site'), url: 'https://portfolioready.vercel.app' }],
    source: 'https://github.com/atheon006/portfolio-Ready-du-copa',
    cover: v1Cover,
    coverAlt: bi('Première version du portfolio sur ordinateur et sur téléphone', 'First portfolio version on desktop and phone'),
    shots: [
      { image: v1Desktop, kind: 'desktop', alt: bi('Portfolio v1 sur ordinateur', 'Portfolio v1 on desktop') },
      { image: v1Mobile, kind: 'mobile', alt: bi('Portfolio v1 sur téléphone', 'Portfolio v1 on a phone') },
    ],
  },
  {
    slug: 'arena',
    name: 'ARENA',
    featured: false,
    year: '2026',
    status: 'prototype',
    accent: '#8b5cf6',
    type: bi('Application IA', 'AI application'),
    role: bi('Développement', 'Development'),
    tagline: bi('Une application Angular connectée à l’IA Gemini.', 'An Angular app powered by Gemini AI.'),
    summary: bi(
      'Prototype construit avec Google AI Studio puis adapté : Angular et Angular Material, rendu côté serveur, API Gemini.',
      'A prototype started in Google AI Studio and then adapted: Angular and Angular Material, server-side rendering, Gemini API.',
    ),
    description: [
      bi(
        'ARENA est un prototype d’application web en Angular, avec rendu côté serveur (Express) et l’API Gemini pour les réponses générées par l’IA.',
        'ARENA is a prototype Angular web app with server-side rendering (Express) and the Gemini API for AI-generated answers.',
      ),
    ],
    highlights: [
      bi('Intégration de l’API Gemini', 'Gemini API integration'),
      bi('Angular Material et rendu côté serveur', 'Angular Material and server-side rendering'),
    ],
    stack: [tech.TypeScript, tech.Angular, tech.Gemini],
    links: [],
    source: 'https://github.com/atheon006/ARENA-V3',
    cover: arenaCover,
    coverAlt: bi('Visuel du projet ARENA', 'ARENA project visual'),
    shots: [],
  },
  {
    slug: 'shinobi-no-sato',
    name: 'Shinobi no Sato',
    featured: false,
    year: '2026',
    status: 'prototype',
    accent: '#ef4444',
    type: bi('Application communautaire', 'Community app'),
    role: bi('Conception et développement', 'Design and development'),
    tagline: bi('Le village des otakus : quiz, duels et classement.', 'The otaku village: quizzes, duels and leaderboard.'),
    summary: bi(
      'Quiz et duels en temps réel pour fans d’anime et de manga, avec classement, profils et carte « Otaku ID ». Application installable (PWA).',
      'Quizzes and real-time duels for anime and manga fans, with a leaderboard, profiles and an “Otaku ID” card. Installable app (PWA).',
    ),
    description: [
      bi(
        'Shinobi no Sato rassemble les fans d’anime et de manga : missions de quiz, duels en temps réel, top 10 du village et carte d’identité « Otaku ID » à partager.',
        'Shinobi no Sato brings anime and manga fans together: quiz missions, real-time duels, a village top 10 and a shareable “Otaku ID” card.',
      ),
      bi(
        'Interface React avec Tailwind CSS et Motion, données et comptes avec Firebase, questions enrichies par l’IA Gemini, installable comme une application.',
        'React interface with Tailwind CSS and Motion, data and accounts with Firebase, questions enriched by Gemini AI, installable as an app.',
      ),
    ],
    highlights: [
      bi('Duels en temps réel et classement', 'Real-time duels and leaderboard'),
      bi('Carte « Otaku ID » générée et partageable', 'Generated, shareable “Otaku ID” card'),
      bi('Application installable (PWA) avec retours haptiques', 'Installable app (PWA) with haptic feedback'),
    ],
    stack: [tech.React, tech.TypeScript, tech.Tailwind, tech.Firebase, tech.Gemini],
    links: [],
    source: null,
    cover: shinobiCover,
    coverAlt: bi('Visuel du projet Shinobi no Sato', 'Shinobi no Sato project visual'),
    shots: [],
  },
];

export const featured = projects.filter((p) => p.featured);
export const others = projects.filter((p) => !p.featured);
