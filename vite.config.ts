import { readdirSync } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'

__dirname += '/app'

const titleCase = str => {
	return str
		.toLowerCase()
		.split(' ')
		.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}

const getDirs = (): string[] => {
	return readdirSync(__dirname, { withFileTypes: true })
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
			rollupOptions: {
				input: {
					main: resolve(__dirname, 'index.html'),
					...Object.fromEntries(
						getDirs().map(dir => {
							return [dir, resolve(__dirname, dir, 'index.html')]
						})
					)
				}
			},
			outDir: '../docs'
		}
	}
})
