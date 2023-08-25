import { p } from './sketch'

export default class Drop {
	x: number
	y: number
	z: number
	ySpeed: number
	len: number

	constructor() {
		this.x = p.random(p.width)
		this.y = p.random(-200, 0)
		this.z = p.random(0, 20)
		this.ySpeed = p.map(this.z, 0, 20, 4, 10)
		this.len = p.map(this.z, 0, 20, 10, 20)
	}

	fall() {
		this.y += this.ySpeed

		if (this.y > p.height) {
			this.x = p.random(p.width)
			this.y = p.random(-200, 0)
			this.ySpeed = p.map(this.z, 0, 20, 4, 10)
		}
	}

	show() {
		const thick = p.map(this.z, 0, 20, 1, 3)
		p.strokeWeight(thick)

		p.stroke(138, 43, 226)
		p.line(this.x, this.y, this.x, this.y + this.len)
	}
}
