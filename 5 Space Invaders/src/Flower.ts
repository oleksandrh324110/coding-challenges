import { Dir } from './Ship'
import { p } from './sketch'

export default class Enemy {
	constructor(private x: number, private y: number) {}

	show() {
		p.fill(255, 0, 200)
		p.ellipse(this.x, this.y, 60, 60)
	}

	move(dir: Dir) {
		this.x += dir * 5
	}
}
