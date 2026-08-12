import { Ready_Avatar } from "@assets/images";

// Importing SVGs as raw strings
import GithubIconRaw from "@assets/SVGs/Github.svg?raw";
import LinkedinIconRaw from "@assets/SVGs/Linkedin.svg?raw";
import GmailIconRaw from "@assets/SVGs/Gmail.svg?raw";
import DiscordIconRaw from "@assets/SVGs/Discord.svg?raw";

import { LogoIconRaw } from "@/assets/SVGs";
import { ThemeOptions } from "../../scripts/generateThemes";

// Theme Configuration
export const themeConfig = ThemeOptions.DEFAULT;

// Site Configuration
export const siteConfig = {
    title: "ATHÉON (Ready Kalonda) — Développeur / Systèmes / IA & Cybersécurité",
    description: "Ready Kalonda (Athéon) est un développeur étudiant basé à Goma, RDC, explorant les logiciels, l'IA, les systèmes web et la cybersécurité.",
    canonical: "https://objetsperdus.online/",
    googleSiteVerification: "",
    keywords: "Athéon, Ready Kalonda, Atheon-Dev, Développeur Web, React, Node.js, NestJS, Docker, Systèmes, IA, Cybersécurité, Goma, RDC, Objets Perdus",
    avatar: "https://github.com/atheon006.png",
    siteUrl: "https://objetsperdus.online/",
}

// Header Section
export const headerConfig = {
    logotext: "ATHÉON.",
    actionButton: {
        text: "Contact",
        url: "#contact"
    },
}

// Hero Section
export const heroConfig = {
    salutation: "Bonjour👋🏻 Je suis",
    firstName: "Ready Kalonda",
    lastName: "(Athéon).",
    position: "Développeur Web & Systèmes",
    tagLine: {
        prefixText: "Je construis des",
        highlightedText: "Systèmes Numériques",
        suffixText: "Logiciels, IA, Cybersécurité & Automatisation."
    },
    avatar: Ready_Avatar,
    links: [
        {
            label: "GitHub",
            url: "https://github.com/atheon006",
            icon: GithubIconRaw
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/ready-kalonda-a8665a428/",
            icon: LinkedinIconRaw
        },
        {
            label: "Email",
            url: "mailto:readykalonda38@gmail.com",
            icon: GmailIconRaw
        },
        {
            label: "Discord",
            url: "https://discord.gg/wF4KcGYgz",
            icon: DiscordIconRaw
        },
    ],
}

// About Section
export const aboutConfig = {
    aboutAvatar: Ready_Avatar,
    description: [
        "Bonjour ! 👋🏻 Je suis Ready Kalonda, connu en ligne sous le nom d'Atheon-Dev ou 𝕷 — un développeur étudiant basé à Goma, RDC.",
        "Je crée des applications web modernes, des outils d'automatisation et des logiciels orientés interface.",
        "Mon profil public s'articule autour de React.js, Node.js, NestJS, Docker, JavaScript, TypeScript, Git, MongoDB, MySQL et des services API.",
        "Je construis avec intention — logiciels, intelligence artificielle, cybersécurité et les systèmes qui les relient."
    ],
}

// Footer Section
export const footerConfig = {
    logo: LogoIconRaw,
    title: "ATHÉON | Ready Kalonda — Développeur / Systèmes",
    links: [
        {
            label: "GitHub",
            url: "https://github.com/atheon006",
            icon: GithubIconRaw
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/ready-kalonda-a8665a428/",
            icon: LinkedinIconRaw
        },
        {
            label: "Email",
            url: "mailto:readykalonda38@gmail.com",
            icon: GmailIconRaw
        },
        {
            label: "Discord",
            url: "https://discord.gg/wF4KcGYgz",
            icon: DiscordIconRaw
        },
    ],
    copyrightText: `© ${new Date().getFullYear()} Ready Kalonda (Athéon)`
}


