import p5 from 'p5'
import Flower from './Flower'
import Ship from './Ship'

let ship: Ship
let flowers: Flower[] = Array(10).fill(null)

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight)

		ship = new Ship()
		flowers = flowers.map((el, i) => new Flower(i * 80 + (p.width - flowers.length * 80 + 80) / 2, 60))
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
		flowers.forEach(flower => flower.show())
	}
}

export const p = new p5(sketch)
