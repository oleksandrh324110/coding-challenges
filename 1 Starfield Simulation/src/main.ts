import p5 from 'p5'
import { Star } from './Star'

let stars: Star[] = Array.from({ length: 500 })

new p5((p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight)

		for (let i = 0; i < stars.length; i++) {
			stars[i] = new Star(p)
		}
	}

	p.draw = () => {
		const speed = p.map(p.mouseX, 0, p.width, 0, 50)

		p.translate(p.width / 2, p.height / 2)
		p.background(0)

		for (let i = 0; i < stars.length; i++) {
			stars[i].update(p, speed)
			stars[i].show(p)
		}
	}
})
