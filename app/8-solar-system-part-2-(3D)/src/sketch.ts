import p5 from 'p5'
import Planet from './Planet'

let sun: Planet

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL)
		p.frameRate(240)

		setTimeout(() => {
			// @ts-ignore
			p.createEasyCam({ distance: 680 })
		}, 200)

		p.noStroke()

		sun = new Planet(50, 0, 0)
		sun.spawnMoons(4, 1)
	}

	p.draw = () => {
		p.background('black')

		p.lights()

		sun.orbit()
		sun.show()
	}
}

export default new p5(sketch)
