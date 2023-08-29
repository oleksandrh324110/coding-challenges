import { p } from './sketch'

export const shipWidth = 20
export const shipHeight = 40

export type Dir = -1 | 1 | 0

export default class Ship {
	x = p.width / 2
	y = p.height - shipHeight
	xDir: Dir = 0
	width = shipWidth
	height = shipHeight

	show() {
		p.fill(0)
		p.rect(this.x, this.y, this.width, this.height)
	}

	setDir(dir: Dir) {
		this.xDir = dir
	}

	move() {
		this.x += this.xDir * 5
		this.x = p.constrain(this.x, 0 + this.width / 2, p.width - this.width / 2)
	}
}
