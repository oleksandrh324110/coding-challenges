import p5 from 'p5'

export class Star {
	x: number
	y: number
	z: number
	pz: number

	constructor(p: p5) {
		this.x = p.random(-p.width / 2, p.width / 2)
		this.y = p.random(-p.height / 2, p.height / 2)
		this.z = p.random(p.min(p.width, p.height))
		this.pz = this.z
	}

	update(p: p5, speed: number) {
		this.pz = this.z

		this.z -= speed

		if (this.z < 1) {
			this.x = p.random(-p.width / 2, p.width / 2)
			this.y = p.random(-p.height / 2, p.height / 2)
			this.z = p.min(p.width, p.height)
			this.pz = this.z
		}
	}

	show(p: p5) {
		p.fill(255)
		p.noStroke()

		const sx = p.map(this.x / this.z, 0, 1, 0, p.width)
		const sy = p.map(this.y / this.z, 0, 1, 0, p.height)

		const px = p.map(this.x / this.pz, 0, 1, 0, p.width)
		const py = p.map(this.y / this.pz, 0, 1, 0, p.height)

		p.stroke(255)
		p.strokeWeight(p.map(this.z, 0, p.min(p.width, p.height), 1, 0))

		p.line(px, py, sx, sy)
	}
}
