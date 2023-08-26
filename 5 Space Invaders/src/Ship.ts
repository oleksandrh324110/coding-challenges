import { p } from './sketch'

export default class Ship {
	x = p.width / 2

	show() {
		p.fill(255)
		p.rect(this.x, p.height - 20, 20, 20)
	}

	move(dir: number) {
		this.x += dir * 10
	}
}
