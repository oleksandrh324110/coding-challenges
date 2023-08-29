import p5 from 'p5'
import { game } from './Game'
import { input } from './Input'
import { frameRate } from './config'

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight)
		p.frameRate(frameRate)

		p.noStroke()

		game.init()
		input.init()
	}

	p.draw = () => {
		p.background(255)

		game.update()
		game.show()
	}
}

export const p = new p5(sketch)
