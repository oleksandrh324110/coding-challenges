import p5 from 'p5'
import Drop from './Drop'

const drops: Drop[] = Array.from({ length: 200 })

new p5((p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight - 1)

		for (let i = 0; i < drops.length; i++) {
			drops[i] = new Drop(p)
		}
	}

	p.draw = () => {
		p.background('#202124')

		for (let i = 0; i < drops.length; i++) {
			drops[i].fall()
			drops[i].show()
		}
	}
})
