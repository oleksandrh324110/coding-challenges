import p5 from 'p5'
import Planet from './Planet'

let sun: Planet

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight)
		p.frameRate(240)

		p.noStroke()

		sun = new Planet(50, 0, 0)
		sun.spawnMoons(5, 1)
	}

	p.draw = () => {
		p.background('black')

		p.translate(p.width / 2, p.height / 2)

		sun.orbit()
		sun.show()
	}
}

export const p = new p5(sketch)
