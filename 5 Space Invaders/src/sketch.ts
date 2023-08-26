import p5 from 'p5'
import Ship from './Ship'

let ship: Ship

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight - 1)

		ship = new Ship()
	}

	p.keyPressed = () => {
		if (p.keyCode === p.LEFT_ARROW) {
			ship.move(-1)
		} else if (p.keyCode === p.RIGHT_ARROW) {
			ship.move(1)
		}
	}

	p.draw = () => {
		p.background('#202124')

		ship.show()
	}
}

export const p = new p5(sketch)
