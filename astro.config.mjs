import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.seedrail.dev',
	integrations: [
		starlight({
			title: {
				en: 'Seedrail Docs',
				'zh-CN': 'Seedrail 文档',
			},
			description:
				'Cross-host multi-agent workspace: architecture, local quickstart, and one-line node enrollment guides.',
			favicon: '/favicon.svg',
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'color-scheme',
						content: 'light dark',
					},
				},
			],
			components: {
				Hero: './src/components/Hero.astro',
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/seedrail/docs',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/seedrail/docs/edit/main/',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					translations: { 'zh-CN': '开始使用' },
					items: [
						{
							label: 'Local Quickstart',
							translations: { 'zh-CN': '本地快速开始' },
							slug: 'getting-started/quickstart',
						},
					],
				},
				{
					label: 'Core Concepts',
					translations: { 'zh-CN': '核心概念' },
					items: [
						{
							label: 'Architecture Overview',
							translations: { 'zh-CN': '组件与架构总览' },
							slug: 'concepts/architecture',
						},
					],
				},
				{
					label: 'Deployment',
					translations: { 'zh-CN': '跨主机部署' },
					items: [
						{
							label: 'Deploy Control Plane',
							translations: { 'zh-CN': '服务端部署控制面' },
							slug: 'deployment/control-plane',
						},
						{
							label: 'Add Execution Hosts',
							translations: { 'zh-CN': '跨主机接入被控机' },
							slug: 'deployment/add-host',
						},
					],
				},
			],
		}),
	],
});
