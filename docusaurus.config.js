const path = require('path');

module.exports = {
	title: 'VTL Docs',
	tagline: '',
	url: 'https://vtl.info',
	baseUrl: '/VTL-Docs',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'making-sense-info', // Usually your GitHub org/user name.
	projectName: 'vtl-docs', // Usually your repo name.
	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	customFields: {
		authors: {
			nicolas: {
				name: 'Nicolas Laval',
				link: 'https://github.com/NicoLaval',
				title: 'Making Sense - Developer',
				image: 'profile_pic_nicolas_laval.jpg',
			},
		},
	},
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// ...
			googleTagManager: {
				trackingID: 'insee',
			},
			prism: {
				additionalLanguages: [
					'csharp',
					'php',
					'ruby',
					'java',
					'rust',
					'elixir',
					'groovy',
					'sql',
				],
			},
			navbar: {
				style: 'dark',
				title: null,
				logo: {
					alt: 'SDMX logo',
					src: 'img/logo-sdmx.png',
				},
				// hideOnScroll: trues,
				items: [
					{
						type: 'search',
						position: 'right',
					},
					{
						to: '/introduction',
						activeBasePath: 'docs',
						label: 'Documentation',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					},
					{
						href: 'https://github.com/Making-Sense-Info/VTL-Docs',
						position: 'right',
						className: 'header-github-link',
						'aria-label': 'GitHub repository',
					},
				],
			},
			footer: {
				style: 'dark',
				copyright: `Copyright: © ${new Date().getFullYear()} Making Sense. All rights reserved.`,
			},
			colorMode: {
				// Hides the switch in the navbar
				// Useful if you want to support a single color mode
				disableSwitch: false,
				defaultMode: 'dark',
				respectPrefersColorScheme: false,
			},
		}),
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			{
				docs: {
					routeBasePath: '/',
					path: 'docs',
					sidebarPath: require.resolve('./sidebars.js'),
					showLastUpdateTime: true,
				},
				blog: {
					showReadingTime: true,
				},
				theme: {
					customCss: require.resolve('./src/css/custom.scss'),
				},
				pages: {
					path: 'src/pages',
					routeBasePath: '/',
					include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
					exclude: [
						'**/_*.{js,jsx,ts,tsx,md,mdx}',
						'**/_*/**',
						'**/*.test.{js,jsx,ts,tsx}',
						'**/__tests__/**',
					],
					mdxPageComponent: '@theme/MDXPage',
					remarkPlugins: [],
					rehypePlugins: [],
					beforeDefaultRemarkPlugins: [],
					beforeDefaultRehypePlugins: [],
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
					ignorePatterns: ['/lp/**'],
					filename: 'sitemap.xml',
				},
			},
		],
	],
	plugins: [
		'docusaurus-plugin-sass',
		path.resolve(__dirname, 'plugins', 'gtm'),
		[
			require.resolve('docusaurus-lunr-search'),
			{
				indexBaseUrl: true,
				languages: ['en', 'fr'],
			},
		],
		'docusaurus-node-polyfills',
	],
	// GHA
	projectName: 'making-sense-info.github.io',
	organizationName: 'Making-Sense-Info',
	trailingSlash: false,
};
