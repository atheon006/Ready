// Icônes : Simple Icons (CC0), affichées en une seule couleur.
import typescript from '@assets/stack/typescript.svg?raw';
import javascript from '@assets/stack/javascript.svg?raw';
import dart from '@assets/stack/dart.svg?raw';
import python from '@assets/stack/python.svg?raw';
import html5 from '@assets/stack/html5.svg?raw';
import css from '@assets/stack/css.svg?raw';
import react from '@assets/stack/react.svg?raw';
import astro from '@assets/stack/astro.svg?raw';
import tailwind from '@assets/stack/tailwindcss.svg?raw';
import vite from '@assets/stack/vite.svg?raw';
import flutter from '@assets/stack/flutter.svg?raw';
import capacitor from '@assets/stack/capacitor.svg?raw';
import android from '@assets/stack/android.svg?raw';
import node from '@assets/stack/nodedotjs.svg?raw';
import nestjs from '@assets/stack/nestjs.svg?raw';
import firebase from '@assets/stack/firebase.svg?raw';
import supabase from '@assets/stack/supabase.svg?raw';
import postgresql from '@assets/stack/postgresql.svg?raw';
import graphql from '@assets/stack/graphql.svg?raw';
import mongodb from '@assets/stack/mongodb.svg?raw';
import mysql from '@assets/stack/mysql.svg?raw';
import git from '@assets/stack/git.svg?raw';
import githubactions from '@assets/stack/githubactions.svg?raw';
import docker from '@assets/stack/docker.svg?raw';
import vercel from '@assets/stack/vercel.svg?raw';
import linux from '@assets/stack/linux.svg?raw';
import gemini from '@assets/stack/googlegemini.svg?raw';
import angular from '@assets/stack/angular.svg?raw';
import { bi } from './i18n';

export interface Tech {
  name: string;
  icon: string;
}

export const tech = {
  TypeScript: { name: 'TypeScript', icon: typescript },
  JavaScript: { name: 'JavaScript', icon: javascript },
  Dart: { name: 'Dart', icon: dart },
  Python: { name: 'Python', icon: python },
  HTML: { name: 'HTML', icon: html5 },
  CSS: { name: 'CSS', icon: css },
  React: { name: 'React', icon: react },
  Angular: { name: 'Angular', icon: angular },
  Astro: { name: 'Astro', icon: astro },
  Tailwind: { name: 'Tailwind CSS', icon: tailwind },
  Vite: { name: 'Vite', icon: vite },
  Flutter: { name: 'Flutter', icon: flutter },
  Capacitor: { name: 'Capacitor', icon: capacitor },
  Android: { name: 'Android', icon: android },
  Node: { name: 'Node.js', icon: node },
  NestJS: { name: 'NestJS', icon: nestjs },
  Firebase: { name: 'Firebase', icon: firebase },
  Supabase: { name: 'Supabase', icon: supabase },
  PostgreSQL: { name: 'PostgreSQL', icon: postgresql },
  GraphQL: { name: 'GraphQL', icon: graphql },
  MongoDB: { name: 'MongoDB', icon: mongodb },
  MySQL: { name: 'MySQL', icon: mysql },
  Git: { name: 'Git', icon: git },
  GitHubActions: { name: 'GitHub Actions', icon: githubactions },
  Docker: { name: 'Docker', icon: docker },
  Vercel: { name: 'Vercel', icon: vercel },
  Linux: { name: 'Linux', icon: linux },
  Gemini: { name: 'Gemini API', icon: gemini },
  GSAP: { name: 'GSAP', icon: '' },
} satisfies Record<string, Tech>;

export const stackGroups = [
  { title: bi('Langages', 'Languages'), items: [tech.TypeScript, tech.JavaScript, tech.Dart, tech.Python, tech.HTML, tech.CSS] },
  { title: bi('Front-end', 'Front end'), items: [tech.React, tech.Astro, tech.Tailwind, tech.Vite] },
  { title: bi('Mobile', 'Mobile'), items: [tech.Flutter, tech.Capacitor, tech.Android] },
  {
    title: bi('Back-end & données', 'Back end & data'),
    items: [tech.Node, tech.NestJS, tech.Firebase, tech.Supabase, tech.PostgreSQL, tech.GraphQL, tech.MongoDB, tech.MySQL],
  },
  { title: bi('Outils & mise en ligne', 'Tooling & deployment'), items: [tech.Git, tech.GitHubActions, tech.Docker, tech.Vercel, tech.Linux] },
  { title: bi('IA', 'AI'), items: [tech.Gemini] },
];
