import p5 from 'p5'
import { Star } from './Star'

let stars: Star[] = Array.from({ length: 500 })

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight)
		p.frameRate(240)

		stars = stars.map(() => new Star())
	}

	p.draw = () => {
		p.translate(p.width / 2, p.height / 2)
		p.background(0)

		for (let i = 0; i < stars.length; i++) {
			stars[i].update()
			stars[i].show()
		}
	}
}

export const p = new p5(sketch)
