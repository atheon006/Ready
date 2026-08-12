// Auto-translations for FR/EN bilingual support
// Default language: French (fr)

export const translations = {
    fr: {
        // Navigation
        nav_about: "À PROPOS",
        nav_skills: "COMPÉTENCES",
        nav_projects: "PROJETS",
        nav_contact: "CONTACT",
        nav_about_mobile: "À Propos",
        nav_skills_mobile: "Compétences",
        nav_projects_mobile: "Projets",
        nav_contact_mobile: "Contact",
        // Hero
        hero_iam: "Je suis",
        // About
        about_section_title: "À Propos de Moi",
        about_greeting: "Bonjour ! 👋🏻",
        // Skills
        skills_section_title: "Compétences",
        skill_web: "Web & Programmation",
        skill_frontend: "Frontend",
        skill_backend: "Backend & APIs",
        skill_databases: "Bases de Données & Stockage",
        skill_state: "État & Événements",
        skill_cloud: "Cloud & DevOps",
        skill_tooling: "Outils & Observabilité",
        skill_config: "Config & Templating",
        skill_ides: "IDEs & Design",
        // Projects
        projects_section_title: "Projets",
        // Contact
        contact_section_title: "Contact",
        contact_headline: "Collaborons !",
        contact_sub1: "Contactez-moi pour discuter de vos besoins en développement web",
        contact_sub2: "ou simplement pour dire bonjour. 😉",
        // Lang switcher label
        lang_btn: "EN",
    },
    en: {
        // Navigation
        nav_about: "ABOUT",
        nav_skills: "SKILLS",
        nav_projects: "PROJECTS",
        nav_contact: "CONTACT",
        nav_about_mobile: "About",
        nav_skills_mobile: "Skills",
        nav_projects_mobile: "Projects",
        nav_contact_mobile: "Contact",
        // Hero
        hero_iam: "I'm a",
        // About
        about_section_title: "About Me",
        about_greeting: "Hey there! 👋🏻",
        // Skills
        skills_section_title: "Tech Stack",
        skill_web: "Web & Programming",
        skill_frontend: "Frontend",
        skill_backend: "Backend & APIs",
        skill_databases: "Databases & Storage",
        skill_state: "State & Events",
        skill_cloud: "Cloud & DevOps",
        skill_tooling: "Tooling & Observability",
        skill_config: "Config & Templating",
        skill_ides: "IDEs & Design",
        // Projects
        projects_section_title: "Projects",
        // Contact
        contact_section_title: "Contact",
        contact_headline: "Let's collaborate!",
        contact_sub1: "Contact me to discuss your web development needs",
        contact_sub2: "or just to say hello. 😉",
        // Lang switcher label
        lang_btn: "FR",
    },
} as const;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof typeof translations.fr;
