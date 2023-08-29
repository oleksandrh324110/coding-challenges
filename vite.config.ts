import { readdirSync } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const titleCase = str => {
	return str
		.toLowerCase()
		.split(' ')
		.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}

const getDirs = (): string[] => {
	return readdirSync(__dirname, { withFileTypes: true })
		.map(dir => '0123456789'.includes(dir.name[0]) && dir.name)
		.filter(dir => dir !== false) as string[]
}

const LinksToChallengesPlugin = () => {
	const links = getDirs()
		.map(dir => `<a href="${dir}/">${titleCase(dir.replace(/-/g, ' '))}</a>`)
		.join('<br />\n\t\t')

	return {
		name: 'html-transform',
		transformIndexHtml(html) {
			return html.replace('<LinksToChallenges />', links)
		}
	}
}

export default defineConfig(({ mode }) => {
	return {
		plugins: [LinksToChallengesPlugin()],
		base: mode === 'production' ? '/coding-challenges/' : '/',
		indexHtmlTransforms: [
			{
				transform({ code }) {
					console.log(code)
					return code.replace('<body></body>', '<title>Vite Playground</title>')
				}
			}
		],
		build: {
			rollupOptions: {
				input: {
					main: resolve(__dirname, 'index.html'),
					...Object.fromEntries(getDirs().map(dir => [dir, resolve(__dirname, dir, 'index.html')]))
				}
			},
			outDir: 'docs'
		}
	}
})
