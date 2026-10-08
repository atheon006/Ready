import type { ImageMetadata } from 'astro';
import { bi, type Bi } from './i18n';

import arcaneCover from '@assets/projects/arcane-ops-cover.webp';
import serpCover from '@assets/projects/serpantinum-cover.webp';
import djCover from '@assets/projects/midnight-dj-cover.webp';

export interface OpenSourceEntry {
  name: string;
  kind: 'modified' | 'used';
  /** Dépôt d'origine (crédit à l'auteur). */
  upstream: { label: string; url: string };
  fork: string;
  site?: string;
  description: Bi;
  contribution: Bi;
  stack: string[];
  image: ImageMetadata;
  imageAlt: Bi;
}

export const openSource: OpenSourceEntry[] = [
  {
    name: 'Arcane-Ops',
    kind: 'modified',
    upstream: { label: 'apexinfinity243/Arcane-Ops', url: 'https://github.com/apexinfinity243/Arcane-Ops' },
    fork: 'https://github.com/atheon006/Arcane-Ops',
    description: bi(
      'Application Flutter de connexion et de messagerie, au thème « hacker » inspiré de Matrix.',
      'A Flutter authentication and messaging app with a Matrix-inspired “hacker” theme.',
    ),
    contribution: bi(
      'Remise en état de la compilation Android, configuration Firebase, notifications et intégration continue.',
      'Got the Android build working again, set up Firebase, notifications and continuous integration.',
    ),
    stack: ['Flutter', 'Dart', 'Firebase', 'GitHub Actions'],
    image: arcaneCover,
    imageAlt: bi('Visuel du projet Arcane-Ops', 'Arcane-Ops project visual'),
  },
  {
    name: 'serpantinum',
    kind: 'used',
    upstream: { label: 'ilyamiro/serpantinum', url: 'https://github.com/ilyamiro/serpantinum' },
    fork: 'https://github.com/atheon006/serpantinum',
    description: bi(
      'Interface de bureau pour les compositeurs Wayland comme Hyprland : barre, lanceur d’applications, lecteur et égaliseur, écrite en QML avec Quickshell.',
      'A desktop shell for Wayland compositors such as Hyprland: bar, app launcher, media player and equalizer, written in QML with Quickshell.',
    ),
    contribution: bi('Environnement de bureau que j’utilise sous Linux.', 'The desktop environment I use on Linux.'),
    stack: ['QML', 'Quickshell', 'Hyprland', 'Linux'],
    image: serpCover,
    imageAlt: bi('Bureau avec le lanceur d’applications de serpantinum', 'Desktop with the serpantinum app launcher'),
  },
  {
    name: 'Midnight-Disk-Jocky',
    kind: 'used',
    upstream: { label: 'lostlight-commits/Midnight-Disk-Jocky', url: 'https://github.com/lostlight-commits/Midnight-Disk-Jocky' },
    fork: 'https://github.com/atheon006/Midnight-Disk-Jocky',
    description: bi(
      'Bot musical Discord auto-hébergé : lecture depuis YouTube (yt-dlp et ffmpeg) et Spotify.',
      'A self-hosted Discord music bot: playback from YouTube (yt-dlp and ffmpeg) and Spotify.',
    ),
    contribution: bi('Auto-hébergé et utilisé sur Discord.', 'Self-hosted and used on Discord.'),
    stack: ['Node.js', 'discord.js', 'yt-dlp', 'ffmpeg'],
    image: djCover,
    imageAlt: bi('Visuel du projet Midnight-Disk-Jocky', 'Midnight-Disk-Jocky project visual'),
  },
];
