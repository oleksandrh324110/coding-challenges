import p5 from 'p5'
import Flower from './Flower'
import Ship from './Ship'

let ship: Ship
let flower: Flower

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight)

		ship = new Ship()
		flower = new Flower()
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
		flower.show()
	}
}

export const p = new p5(sketch)
