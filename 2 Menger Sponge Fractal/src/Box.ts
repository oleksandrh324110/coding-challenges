import p5 from 'p5'

export class Box {
	pos: p5.Vector

	constructor(x: number, y: number, z: number, private r: number) {
		this.pos = new p5.Vector(x, y, z)
	}

	show(p: p5) {
		p.push()
		p.translate(this.pos.x, this.pos.y, this.pos.z)
		p.box(this.r)
		p.pop()
	}

	generate(p: p5) {
		const boxes: Box[] = []

		const newR = this.r / 3
		for (let x = -1; x < 2; x++) {
			for (let y = -1; y < 2; y++) {
				for (let z = -1; z < 2; z++) {
					if (p.abs(x) + p.abs(y) + p.abs(z) <= 1) continue
					boxes.push(new Box(this.pos.x + x * newR, this.pos.y + y * newR, this.pos.z + z * newR, newR))
				}
			}
		}

		return boxes
	}
}
