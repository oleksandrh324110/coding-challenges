import Flower from './Flower'
import { p } from './sketch'

export const dropRadius = 8

export default class Drop {
	r = dropRadius
	isRemoved = false

	constructor(public x: number, public y: number) {}

	show() {
		p.fill(150, 0, 255)
		p.circle(this.x, this.y, this.r * 2)
	}

	moveY(y: number) {
		this.y += y
	}

	hits(flower: Flower) {
		return p.dist(this.x, this.y, flower.x, flower.y) < flower.r + this.r
	}

	remove() {
		this.isRemoved = true
	}
}
