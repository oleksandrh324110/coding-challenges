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
	return readdirSync(__dirname + '/app', { withFileTypes: true })
		.map(dir => dir.isDirectory() && dir.name)
		.filter(Boolean) as string[]
}

const LinksToChallengesPlugin = () => {
	const links = getDirs()
		.map(dir => `<a href="${dir}/">${titleCase(dir.replace(/-/g, ' '))}</a>`)
		.join('\n\t\t')

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
		root: 'app',
		build: {
			outDir: '../docs',
			rollupOptions: {
				input: {
					main: resolve('app', 'index.html'),
					...Object.fromEntries(
						getDirs().map(dir => {
							return [dir, resolve('app', dir, 'index.html')]
						})
					)
				}
			}
		}
	}
})
