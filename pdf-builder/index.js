const fs = require('fs');
var path = require('path');
const markdownpdf = require('markdown-pdf');
const split = require('split');
const through = require('through');
const duplexer = require('duplexer');
const sidebar = require('../sidebars');

const buildMdTitleSymbol = (depth) => Array(depth).fill('#').join('');

const buildPath = (p) => path.join(__dirname, '..', 'docs', `${p}.mdx`);

const getContent = (obj, i) => {
	const items = obj.items || [];
	return items.reduce((_, e) => {
		if (typeof e === 'string') {
			return [..._, { depth: i, path: buildPath(e) }];
		}
		return [..._, ...getContent(e, i + 1)];
	}, []);
};

const getPages = () =>
	sidebar.docs.reduce((_, e) => {
		if ('items' in e) {
			return [..._, ...getContent(e, 1)];
		}
		return _;
	}, []);

const extractTitleFromMdx = (content) => {
	var rx = RegExp('title: (.*)(\r\n|\n)', 'g');
	var arr = rx.exec(content);
	return arr[1];
};

const initialContent = {
	summary: '<div style="page-break-before:always" />\n# Summary\n',
	body: '',
};

const buildContent = (config) =>
	config.reduce(({ summary, body }, { depth, path }) => {
		const content = fs.readFileSync(path, function read(err) {
			if (err) {
				throw err;
			}
		});
		const strContent = content.toString();
		const title = extractTitleFromMdx(strContent);
		const updatedBody = `# ${title}{page-title}\n\n
		${strContent
			.replace(/^---(.|\r\n|\n)*---(\r\n\r\n|\n\n)/, '\r\n')
			.replace(/import(.*);/g, '')
			.replace(/<(.|\r\n|\n)*>/g, '')}`;
		return {
			summary: `${summary}\n${buildMdTitleSymbol(depth + 1)} ${title}\n`,
			body: `<div style="page-break-before:always" />\n\n${body}${updatedBody}`,
		};
	}, initialContent);

const pages = getPages();
const { summary, body } = buildContent(pages);
const mainPage = '<h1 class="doc-title">VTL specification</h1>';

var options = {
	remarkable: {
		html: true,
		breaks: true,
		plugins: [require('remarkable-classy')],
		syntax: ['footnote', 'sup', 'sub'],
	},
	cssPath: path.join(__dirname, '.', 'index.css'),
};

markdownpdf(options)
	.from.string(`${mainPage}${summary}${body}`)
	.to(path.join(__dirname, '..', 'static', 'vtl-manual.pdf'), function () {
		console.log('VTL PDF documentation built');
	});
