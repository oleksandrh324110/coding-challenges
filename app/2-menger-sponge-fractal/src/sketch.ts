import p5 from 'p5'
import { Box } from './Box'

let a = 0
let sponge: Box[] = []

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL)
		p.frameRate(240)

		sponge.push(new Box(0, 0, 0, 200))
	}

	p.mousePressed = () => {
		const next: Box[] = []

		sponge.forEach(b => next.push(...b.generate()))

		sponge = next
	}

	p.draw = () => {
		p.background('#202124')
		p.noStroke()
		p.lights()
		p.fill(255)

		a += 0.01
		p.rotateX(a)
		p.rotateY(a)

		sponge.forEach(b => b.show())
	}
}

export const p = new p5(sketch)
