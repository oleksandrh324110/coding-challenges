import { Dir } from './Ship'
import { p } from './sketch'

export const flowerRadius = 40

export default class Flower {
	r = flowerRadius
	xDir: Dir = 1
	canBeHit = true
	isRemoved = false

	constructor(public x: number, public y: number) {}

	show() {
		p.fill(255, 0, 200)
		p.circle(this.x, this.y, this.r * 2)
	}

	move() {
		this.x += this.xDir * 3
	}

	shiftDown() {
		this.xDir *= -1
		this.y += this.r * 2
	}

	remove() {
		this.canBeHit = false
		this.isRemoved = true
	}
}
