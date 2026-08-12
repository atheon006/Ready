import LOGOS from "@assets/Logos"
import SCREENSHOTS from "@assets/Shots"
import MOCKUPS from "@assets/Mockup"
import SKILL_STACK from "@/constants/skillStack";
import { buildTechStack } from "@/utils/commonUtils";

//#region Types
/**
 * Projects List Type Definition
 * This interface defines the structure and types of properties for each project in the projects list.
 * It ensures consistency and type safety when working with project data throughout the application.
 * Each project includes details such as name, description, technologies used, features, and links.
 */
export interface IProject {
    isHidden: boolean;

    name: string;
    shortDescription: string;
    description: string;

    logoImage: ImageMetadata;
    previewImage: ImageMetadata;
    deviceMockupImage: ImageMetadata;

    theme: string;
    status: "completed" | "development";

    liveUrl: string;
    sourceUrl: string;

    demoCredentials?: {
        email: string;
        password: string;
    };

    technologies: {
        title: string;
        description: string;
        icon: ImageMetadata;
    }[];

    features: {
        title: string;
        description: string;
    }[];

    logoSize: number;

    versions: {
        title: string;
        version: string;
        url: string;
    }[];
}

/**
 * Technology Stack Type Definition
 * This interface defines the structure and types of properties for each technology in the tech stack.
 */
export interface ITechStack {
    title: string;
    description: string;
    icon: ImageMetadata;
}
//#endregion


//#region Tech Stack
export const TECH_STACK = {
    // Web Fundamentals & Languages
    ...buildTechStack(SKILL_STACK.WebLanguagesStack),

    // Frontend & UI Libraries
    ...buildTechStack(SKILL_STACK.FrontendLibrariesStack),

    // State & Events
    ...buildTechStack(SKILL_STACK.StateEventStack),

    // Backend & APIs
    ...buildTechStack(SKILL_STACK.BackendApisStack),

    // Databases, Caching & ORM
    ...buildTechStack(SKILL_STACK.DatabaseStack),

    // Cloud, Storage & DevOps
    ...buildTechStack(SKILL_STACK.CloudDevOpsStack),

    // Tooling, Testing & Observability
    ...buildTechStack(SKILL_STACK.ToolingTestingStack),

    // Configuration & Templating
    ...buildTechStack(SKILL_STACK.ConfigTemplatingStack),

    // IDEs & Design Tools
    ...buildTechStack(SKILL_STACK.IdesDesignStack),
};
//#endregion


//#region COMMON_FEATURES
/**
 * Common Features used across multiple projects
 * This object defines features that are commonly implemented in various projects.
 * Each feature includes a title and description to provide a clear understanding of its purpose.
 * These features can be easily referenced and reused in project configurations to maintain consistency and reduce redundancy.
 * To add a new common feature, simply create a new property in the COMMON_FEATURES object with the appropriate title and description.
 */
const COMMON_FEATURES = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}
//#endregion


//#region Template
// {
//     isHidden: false,
//     name:"TITLE",
//     shortDescription:"SHORT_DESCRIPTION",
//     description:"DESCRIPTION",
//     logoImage:LOGO_URL,
//     previewImage:Screenshots.SCREENSHOT_URL,
//     deviceMockupImage:MockupImages.MOCKUP_URL,
//     theme:"PROJECT_THEME_COLOR_HEX",
//     status:"completed OR development",
//     liveUrl:"PROJECT_URL",
//     sourceUrl:"GITHUB_URL",
//     Demo?: { 
//         email: "DEMO_EMAIL", 
//         password: "DEMO_PASSWORD" 
//     },
//     technologies:[TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     logoSize:50,
//     versions: [{ 
//         title: "PREV_PROJECT_TITLE", 
//         version: "VERSION_NO" 
//     }]
// },
//#endregion Template


//#region Projects List
/**
 * Projects List Configuration
 * This file contains an array of project objects, each representing a project with its details.
 * Each project object includes properties such as name, description, technologies used, features, and links.
 * The projects are organized in a structured format for easy access and management.
 * To add a new project, simply create a new object following the existing structure and append it to the PROJECTS_LIST array.
 * Make sure to import any necessary assets or icons at the top of this file.
 */
export const PROJECTS_LIST: IProject[] = [
    {
        isHidden: false,
        name: "portfolio-Ready-du-copa",
        shortDescription: "Template & landing page de portfolio prêt à l'emploi avec rendu CSS moderne et fluide.",
        description: "portfolio-Ready-du-copa est un template / landing de portfolio prêt à l’emploi, construit autour d’un rendu front-end CSS et d’une identité publique lisible. Le dépôt reflète une architecture de portfolio légère, propre et extensible.",
        logoImage: LOGOS.ArmsLogo,
        previewImage: SCREENSHOTS.Armsv3Shots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#111416",
        status: "completed",
        liveUrl: "https://objetsperdus.online/",
        sourceUrl: "https://github.com/atheon006/portfolio-Ready-du-copa",
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
            TECH_STACK.Vite,
            TECH_STACK.GSAP,
        ],
        features: [
            {
                title: "Design Responsive & Fluide",
                description: "Mise en page épurée adaptée à toutes les tailles d'écran."
            },
            {
                title: "Animations GSAP & Scroll",
                description: "Effets visuels et défilement fluide gérés avec GSAP et Lenis."
            },
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "interactive-designer-portfolio",
        shortDescription: "Portfolio interactif pour designers avec une interface utilisateur riche et dynamique.",
        description: "interactive-designer-portfolio est un portfolio interactif pour designers, avec une interface utilisateur riche et une présence publique orientée design. Le dépôt expose une expérience de mise en valeur visuelle et de navigation légère.",
        logoImage: LOGOS.NextmartLogo,
        previewImage: SCREENSHOTS.NextmartShots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#1a1a2e",
        status: "completed",
        liveUrl: "https://github.com/atheon006/interactive-designer-portfolio",
        sourceUrl: "https://github.com/atheon006/interactive-designer-portfolio",
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
            TECH_STACK.Reactjs,
        ],
        features: [
            {
                title: "UI Orientée Design",
                description: "Interface soignée pour mettre en valeur les projets créatifs."
            },
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "ARENA-V3",
        shortDescription: "Architecture d'une application AI Studio avec intégration TypeScript et Gemini API.",
        description: "ARENA-V3 est le dépôt TypeScript dédié à l’architecture d’une app AI Studio, avec une logique de déploiement local et les instructions nécessaires pour le paramétrage de GEMINI_API_KEY et l’exécution de l’application.",
        logoImage: LOGOS.VortexaLogo,
        previewImage: SCREENSHOTS.VortexaShots,
        deviceMockupImage: MOCKUPS.VortexaMockup,
        theme: "#0f172a",
        status: "development",
        liveUrl: "https://github.com/atheon006/ARENA-V3",
        sourceUrl: "https://github.com/atheon006/ARENA-V3",
        technologies: [
            TECH_STACK.TypeScript,
            TECH_STACK.Nodejs,
            TECH_STACK.Reactjs,
            TECH_STACK.RESTAPI,
        ],
        features: [
            {
                title: "Intégration AI Studio & Gemini",
                description: "Gestion d'API et réponses intelligentes avec la clé API Gemini."
            },
            {
                title: "Déploiement Local",
                description: "Architecture TypeScript propre avec scripts de lancement simplifiés."
            },
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: [
            {
                title: "ARENA V3",
                version: "3",
                url: "https://github.com/atheon006/ARENA-V3"
            },
            {
                title: "ARENA V2",
                version: "2",
                url: "https://github.com/atheon006"
            }
        ]
    },
    {
        isHidden: false,
        name: "CypherX",
        shortDescription: "Dépôt officiel du bot et système d'automatisation CypherX.",
        description: "Le dépôt officiel CypherX — Un bot multifonction et système d'automatisation performant pour la gestion et l'interaction interactive.",
        logoImage: LOGOS.XReconLogo,
        previewImage: SCREENSHOTS.XreconShots,
        deviceMockupImage: MOCKUPS.XreconMockup,
        theme: "#0d1117",
        status: "completed",
        liveUrl: "https://github.com/atheon006/CypherX",
        sourceUrl: "https://github.com/atheon006/CypherX",
        technologies: [
            TECH_STACK.JavaScript,
            TECH_STACK.Nodejs,
            TECH_STACK.RESTAPI,
        ],
        features: [
            {
                title: "Automatisation & Bot",
                description: "Traitement de commandes interactives et gestion de sessions."
            },
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: [
            {
                title: "CypherX Official",
                version: "1",
                url: "https://github.com/atheon006/CypherX"
            },
            {
                title: "CypherX Ultra",
                version: "Ultra",
                url: "https://github.com/atheon006/CypherX-Ultra"
            }
        ]
    },
    {
        isHidden: false,
        name: "CypherX-Ultra",
        shortDescription: "Version mini et ultra-légère de CypherX avec support multi-session.",
        description: "Mini Version of CypherX which is very lightweight and has multi-session support. Une version optimisée et ultra-rapide pour des performances maximales.",
        logoImage: LOGOS.XReconLogo,
        previewImage: SCREENSHOTS.XreconShots,
        deviceMockupImage: MOCKUPS.XreconMockup,
        theme: "#161b22",
        status: "completed",
        liveUrl: "https://github.com/atheon006/CypherX-Ultra",
        sourceUrl: "https://github.com/atheon006/CypherX-Ultra",
        technologies: [
            TECH_STACK.JavaScript,
            TECH_STACK.Nodejs,
            TECH_STACK.RESTAPI,
        ],
        features: [
            {
                title: "Support Multi-Session",
                description: "Gestion simultanée de plusieurs sessions avec empreinte mémoire minimale."
            },
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "VENOM-ULTRA-V9",
        shortDescription: "Framework de bot et de scripts d'automatisation ultra-puissant.",
        description: "This bot is listed as one of the most strongest bug bot ever. Un projet puissant axé sur l'automatisation, les tests et l'exploration de scripts.",
        logoImage: LOGOS.YoatubeLogo,
        previewImage: SCREENSHOTS.YoatubeShots,
        deviceMockupImage: MOCKUPS.YoatubeMockup,
        theme: "#1f1f1f",
        status: "completed",
        liveUrl: "https://github.com/atheon006/VENOM-ULTRA-V9",
        sourceUrl: "https://github.com/atheon006/VENOM-ULTRA-V9",
        technologies: [
            TECH_STACK.JavaScript,
            TECH_STACK.Nodejs,
        ],
        features: [
            {
                title: "Exécution de Scripts Avancée",
                description: "Traitement rapide et gestion d'événements complexes."
            },
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "XERA",
        shortDescription: "Application de suivi de progression et de gestion de projets.",
        description: "Tracez votre progression et donnez vie à vos projets. XERA aide à organiser, suivre et visualiser l'évolution des tâches et des objectifs.",
        logoImage: LOGOS.DaysbeyondLogo,
        previewImage: SCREENSHOTS.DaysbeyondShots,
        deviceMockupImage: MOCKUPS.DaysbeyondMockup,
        theme: "#2563eb",
        status: "development",
        liveUrl: "https://github.com/atheon006/XERA",
        sourceUrl: "https://github.com/atheon006/XERA",
        technologies: [
            TECH_STACK.TypeScript,
            TECH_STACK.Reactjs,
            TECH_STACK.TailwindCSS,
            TECH_STACK.Nodejs,
        ],
        features: [
            {
                title: "Suivi de Projets",
                description: "Tableaux de bord et indicateurs visuels de progression."
            },
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "Anita-V5",
        shortDescription: "Framework d'automatisation et bot interactif propulsé par David Cyril Tech.",
        description: "Anita V5 — Application et bot d'automatisation propulsé par David Cyril Tech avec des fonctionnalités avancées et modulaires.",
        logoImage: LOGOS.SrinivasLogo,
        previewImage: SCREENSHOTS.SrinivasShots,
        deviceMockupImage: MOCKUPS.SrinivasMockup,
        theme: "#4f46e5",
        status: "completed",
        liveUrl: "https://github.com/atheon006/Anita-V5",
        sourceUrl: "https://github.com/atheon006/Anita-V5",
        technologies: [
            TECH_STACK.JavaScript,
            TECH_STACK.Nodejs,
        ],
        features: [
            {
                title: "Architecture Modulaire",
                description: "Extensions faciles et commandes personnalisables."
            },
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "EDUTRACK",
        shortDescription: "Application de gestion et de suivi pédagogique (Dépôt privé 🔒).",
        description: "Application de gestion et de suivi pédagogique permettant d'organiser les cours, étudiants et évaluations. Dépôt privé.",
        logoImage: LOGOS.ArmsLogo,
        previewImage: SCREENSHOTS.Armsv2Shots,
        deviceMockupImage: MOCKUPS.ARMSv2Mockup,
        theme: "#0284c7",
        status: "completed",
        liveUrl: "https://github.com/atheon006",
        sourceUrl: "https://github.com/atheon006",
        technologies: [
            TECH_STACK.TypeScript,
            TECH_STACK.Reactjs,
            TECH_STACK.Nodejs,
            TECH_STACK.MongoDB,
        ],
        features: [
            {
                title: "Gestion Pédagogique",
                description: "Suivi centralisé des étudiants et du programme académique."
            },
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: [
            {
                title: "EduTrack 2.1",
                version: "2.1",
                url: "https://github.com/atheon006"
            },
            {
                title: "EduTrack 2.0",
                version: "2.0",
                url: "https://github.com/atheon006"
            },
            {
                title: "EduTrack v1",
                version: "1.0",
                url: "https://github.com/atheon006"
            }
        ]
    },
    {
        isHidden: false,
        name: "EDUTRACK 2.0",
        shortDescription: "Version 2.0 de l'application de suivi pédagogique (Dépôt privé 🔒).",
        description: "Version 2.0 améliorée de l'application EduTrack avec une architecture optimisée et de nouvelles fonctionnalités de gestion. Dépôt privé.",
        logoImage: LOGOS.ArmsLogo,
        previewImage: SCREENSHOTS.Armsv3Shots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#0369a1",
        status: "completed",
        liveUrl: "https://github.com/atheon006",
        sourceUrl: "https://github.com/atheon006",
        technologies: [
            TECH_STACK.TypeScript,
            TECH_STACK.Reactjs,
            TECH_STACK.Nodejs,
            TECH_STACK.PostgreSQL,
        ],
        features: [
            {
                title: "Base de Données Relationnelle",
                description: "Intégration PostgreSQL pour une gestion de données robuste."
            },
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "EDUTRACK 2.1",
        shortDescription: "Version 2.1 de l'application de suivi pédagogique (Dépôt privé 🔒).",
        description: "Version 2.1 de l'application EduTrack incluant des améliorations d'interface et d'intégration API. Dépôt privé.",
        logoImage: LOGOS.ArmsLogo,
        previewImage: SCREENSHOTS.Armsv3Shots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#0c4a6e",
        status: "completed",
        liveUrl: "https://github.com/atheon006",
        sourceUrl: "https://github.com/atheon006",
        technologies: [
            TECH_STACK.TypeScript,
            TECH_STACK.Nextjs,
            TECH_STACK.Nodejs,
            TECH_STACK.TailwindCSS,
        ],
        features: [
            {
                title: "Performance & UI",
                description: "Rendu Next.js optimisé pour un chargement instantané."
            },
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "PORTFOLIO READY V1",
        shortDescription: "Première version du portfolio personnel (Dépôt d'archive privé 🔒).",
        description: "Première version du portfolio personnel d'Athéon. Dépôt d'archive privé servant de référence pour les itérations futures.",
        logoImage: LOGOS.PikturesLogo,
        previewImage: SCREENSHOTS.PikturesShots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#334155",
        status: "completed",
        liveUrl: "https://github.com/atheon006",
        sourceUrl: "https://github.com/atheon006",
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
        ],
        features: [
            {
                title: "Archive Historique",
                description: "Première version d'interface web personnelle."
            },
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "ARENA V2",
        shortDescription: "Version 2 de l'application Arena (Dépôt privé 🔒).",
        description: "Version 2 de l'application Arena. Architecture intermédiaire servant de fondation avant le développement d'ARENA-V3. Dépôt privé.",
        logoImage: LOGOS.VortexaLogo,
        previewImage: SCREENSHOTS.VortexaShots,
        deviceMockupImage: MOCKUPS.VortexaMockup,
        theme: "#1e293b",
        status: "completed",
        liveUrl: "https://github.com/atheon006",
        sourceUrl: "https://github.com/atheon006",
        technologies: [
            TECH_STACK.TypeScript,
            TECH_STACK.Reactjs,
            TECH_STACK.Nodejs,
        ],
        features: [
            {
                title: "Architecture Web App",
                description: "Gestion d'état et composants réutilisables."
            },
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "QUIZ OTAKU",
        shortDescription: "Application de quiz dédiée à la communauté otaku (Dépôt privé 🔒).",
        description: "Application interactive de quiz thématique dédiée à l'univers des mangas et des animes pour la communauté Otaku. Dépôt privé.",
        logoImage: LOGOS.FilmstackLogo,
        previewImage: SCREENSHOTS.FilmstackShots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#dc2626",
        status: "completed",
        liveUrl: "https://github.com/atheon006",
        sourceUrl: "https://github.com/atheon006",
        technologies: [
            TECH_STACK.JavaScript,
            TECH_STACK.Reactjs,
            TECH_STACK.CSS,
        ],
        features: [
            {
                title: "Quiz Interactif",
                description: "Questions chronométrées et calcul de score en direct."
            },
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "SHINOBI NO SATO",
        shortDescription: "Expérimentation créative web sur le thème ninja (Dépôt privé 🔒).",
        description: "Projet web interactif à thème ninja avec effets visuels originaux et éléments de jeu. Dépôt privé.",
        logoImage: LOGOS.ClimateLogo,
        previewImage: SCREENSHOTS.ClimateShots,
        deviceMockupImage: MOCKUPS.ClimateMockup,
        theme: "#15803d",
        status: "completed",
        liveUrl: "https://github.com/atheon006",
        sourceUrl: "https://github.com/atheon006",
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
            TECH_STACK.GSAP,
        ],
        features: [
            {
                title: "Animations Thématiques",
                description: "Effets visuels dynamiques inspirés de l'univers shinobi."
            },
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "SHINOBI QUIZ",
        shortDescription: "Application de quiz sur l'univers shinobi (Dépôt privé 🔒).",
        description: "Application mobile/web de test de connaissances sur l'univers des shinobis avec classements et questions dynamiques. Dépôt privé.",
        logoImage: LOGOS.FilmstackLogo,
        previewImage: SCREENSHOTS.FilmstackShots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#b91c1c",
        status: "completed",
        liveUrl: "https://github.com/atheon006",
        sourceUrl: "https://github.com/atheon006",
        technologies: [
            TECH_STACK.JavaScript,
            TECH_STACK.Reactjs,
        ],
        features: [
            {
                title: "Système de Quiz Shinobi",
                description: "Niveaux de difficulté et statistiques de réponse."
            },
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "QRUIZ GEEK",
        shortDescription: "Plateforme de quiz pour passionnés de tech et pop-culture (Dépôt privé 🔒).",
        description: "Plateforme de quiz interactive pour la culture geek, la technologie et les jeux vidéo. Dépôt privé.",
        logoImage: LOGOS.CovidtraxLogo,
        previewImage: SCREENSHOTS.CovidTraxShots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#7c3aed",
        status: "completed",
        liveUrl: "https://github.com/atheon006",
        sourceUrl: "https://github.com/atheon006",
        technologies: [
            TECH_STACK.TypeScript,
            TECH_STACK.Reactjs,
            TECH_STACK.Nodejs,
        ],
        features: [
            {
                title: "Catégories Multiples",
                description: "Jeux vidéo, cinéma, programmation et sciences."
            },
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "PROJET TUTO 2026",
        shortDescription: "Projet d'apprentissage et d'expérimentation pédagogique 2026 (Dépôt privé 🔒).",
        description: "Dépôt d'exercices, de modules de test et de tutoriels de programmation pour l'année 2026. Dépôt privé.",
        logoImage: LOGOS.ArmsPhpLogo,
        previewImage: SCREENSHOTS.Armsv1Shots,
        deviceMockupImage: MOCKUPS.ARMSv1Mockup,
        theme: "#059669",
        status: "development",
        liveUrl: "https://github.com/atheon006",
        sourceUrl: "https://github.com/atheon006",
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
            TECH_STACK["C#"],
        ],
        features: [
            {
                title: "Modules Pédagogiques",
                description: "Exercices pratiques de développement web et logiciel."
            },
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "JONES 6199",
        shortDescription: "Dépôt public Jones-6199 d'expérimentation et d'outils.",
        description: "Dépôt de scripts et d'utilitaires pour des expérimentations diverses.",
        logoImage: LOGOS.PikturesLogo,
        previewImage: SCREENSHOTS.PikturesShots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#475569",
        status: "completed",
        liveUrl: "https://github.com/atheon006/Jones-6199",
        sourceUrl: "https://github.com/atheon006/Jones-6199",
        technologies: [
            TECH_STACK.JavaScript,
            TECH_STACK.Nodejs,
        ],
        features: [
            {
                title: "Scripts Utilitaires",
                description: "Outillage et scripts divers d'automatisation."
            },
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "TEST 2004",
        shortDescription: "Dépôt de test et d'expérimentation publique.",
        description: "Dépôt de bac à sable pour tester des prototypes rapides et des bouts de code.",
        logoImage: LOGOS.PikturesLogo,
        previewImage: SCREENSHOTS.PikturesShots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#64748b",
        status: "completed",
        liveUrl: "https://github.com/atheon006/test-2004",
        sourceUrl: "https://github.com/atheon006/test-2004",
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.JavaScript,
        ],
        features: [
            {
                title: "Bac à Sable",
                description: "Tests de snippets et de fonctionnalités légères."
            },
        ],
        logoSize: 50,
        versions: []
    }
];
//#endregion Projects List

//#endregion Projects List