import p5 from 'p5'
import { p } from './sketch'

export class Cell {
	constructor(
		public pos = p.createVector(p.random(p.width), p.random(p.height)),
		public r: number = 40,
		public color = p.color(p.random(100, 255), 0, p.random(100, 255), 100)
	) {}

	move() {
		this.pos.add(p5.Vector.random2D())
	}

	clicked() {
		const d = p.dist(this.pos.x, this.pos.y, p.mouseX, p.mouseY)
		return d < this.r
	}

	mitosis() {
		return [
			new Cell(this.pos.copy().add(p5.Vector.random2D().mult(this.r)), this.r / 2, this.color),
			new Cell(this.pos.copy().add(p5.Vector.random2D().mult(this.r)), this.r / 2, this.color)
		]
	}

	show() {
		p.fill(this.color)
		p.circle(this.pos.x, this.pos.y, this.r * 2)
	}
}
