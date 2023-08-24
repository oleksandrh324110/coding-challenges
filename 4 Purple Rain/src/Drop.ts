import p5 from 'p5'

export default class Drop {
	x: number
	y: number
	z: number
	ySpeed: number
	len: number

	constructor(private p: p5) {
		this.x = p.random(p.width)
		this.y = p.random(-200, 0)
		this.z = p.random(0, 20)
		this.ySpeed = p.map(this.z, 0, 20, 4, 10)
		this.len = p.map(this.z, 0, 20, 10, 20)
	}

	fall() {
		this.y += this.ySpeed

		if (this.y > this.p.height) {
			this.x = this.p.random(this.p.width)
			this.y = this.p.random(-200, 0)
			this.ySpeed = this.p.map(this.z, 0, 20, 4, 10)
		}
	}

	show() {
		const thick = this.p.map(this.z, 0, 20, 1, 3)
		this.p.strokeWeight(thick)

		this.p.stroke(138, 43, 226)
		this.p.line(this.x, this.y, this.x, this.y + this.len)
	}
}
