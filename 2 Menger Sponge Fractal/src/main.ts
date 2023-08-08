import p5 from 'p5'
import { Box } from './Box'

let a = 0
let sponge: Box[]

new p5((p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL)

		sponge = []

		const b = new Box(0, 0, 0, 200)
		sponge.push(b)
	}

	p.mousePressed = () => {
		const next: Box[] = []

		for (const b of sponge) {
			const newBoxes = b.generate(p)
			next.push(...newBoxes)
		}

		sponge = next
	}

	p.draw = () => {
		p.background('#202124')
		p.noStroke()
		p.lights()
		p.fill(255)

		p.rotateX((a += 0.01))
		p.rotateY(a)

		for (const b of sponge) {
			b.show(p)
		}
	}
})
