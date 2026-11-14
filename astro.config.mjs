import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.seedrail.dev',
	integrations: [
		starlight({
			title: 'Seedrail 文档',
			description: '跨主机多 Agent 协作工作台：组件架构、本地启动与一行命令接入部署指南',
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
					label: '开始使用',
					items: [
						{ label: '本地快速开始', slug: 'getting-started/quickstart' },
					],
				},
				{
					label: '核心概念',
					items: [
						{ label: '组件与架构总览', slug: 'concepts/architecture' },
					],
				},
				{
					label: '跨主机部署',
					items: [
						{ label: '服务端部署控制面', slug: 'deployment/control-plane' },
						{ label: '跨主机接入被控机', slug: 'deployment/add-host' },
					],
				},
			],
		}),
	],
});
