import p5 from 'p5'
import Drop from './Drop'
import Flower, { flowerRadius } from './Flower'
import Ship from './Ship'

let ship: Ship
let drops: Drop[] = []

const flowersStartCount = Math.floor(window.innerWidth / 150)
let flowers: Flower[] = Array(flowersStartCount).fill(null)

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight)
		p.frameRate(240)

		p.noStroke()
		p.rectMode(p.CENTER)

		ship = new Ship()
		flowers = flowers.map(
			(el, i) =>
				new Flower(
					i * flowerRadius * 2 * 1.5 + (p.width - flowers.length * flowerRadius * 2 * 1.5) / 2 + flowerRadius * 1.5,
					flowerRadius * 1.5
				)
		)
	}

	p.keyPressed = () => {
		if (p.key === ' ') {
			drops.push(new Drop(ship.x, ship.y - ship.height / 2))
		} else if (p.keyCode === p.LEFT_ARROW) {
			ship.setDir(-1)
		} else if (p.keyCode === p.RIGHT_ARROW) {
			ship.setDir(1)
		}
	}

	p.keyReleased = () => {
		if (![p.RIGHT_ARROW, p.LEFT_ARROW].includes(p.keyCode)) return
		if ((p.keyCode === p.LEFT_ARROW && ship.xDir === 1) || (p.keyCode === p.RIGHT_ARROW && ship.xDir === -1)) return

		ship.setDir(0)
	}

	p.draw = () => {
		p.background('white')

		const isEdgeTouched = flowers.some(flower => {
			flower.move()
			if (flower.x > p.width - flower.r || flower.x < flower.r) {
				return true
			}
		})

		if (isEdgeTouched) {
			flowers.forEach(flower => {
				flower.shiftDown()
			})
		}

		drops.forEach((drop, i) => {
			drop.moveY(-5)

			if (drop.y < 0 - drop.r) {
				return drop.remove()
			}

			flowers.forEach(flower => {
				if (drop.hits(flower) && flower.canBeHit) {
					drop.remove()
					flower.remove()
				}
			})
		})

		drops = drops.filter(drop => !drop?.isRemoved)
		flowers = flowers.filter(flower => !flower?.isRemoved)

		flowers.forEach(flower => flower.show())
		drops.forEach(drop => drop.show())

		ship.move()
		ship.show()
	}
}

export const p = new p5(sketch)
