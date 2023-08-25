import { input } from './Input'
import { boxSize, snakeColor, snakeSize } from './config'
import { p } from './sketch'

export type Direction = { x: 1; y: 0 } | { x: -1; y: 0 } | { x: 0; y: 1 } | { x: 0; y: -1 }

export default class Snake {
	x = p.random(p.width / boxSize)
	y = p.random(p.height / boxSize)
	direction: Direction

	update() {
		if (input.key === 'w') this.direction = { x: 0, y: -1 }
		else if (input.key === 'a') this.direction = { x: -1, y: 0 }
		else if (input.key === 's') this.direction = { x: 0, y: 1 }
		else if (input.key === 'd') this.direction = { x: 1, y: 0 }

		this.x += this.direction.x
		this.y += this.direction.y
	}

	show() {
		p.fill(snakeColor)
		p.noStroke()
		p.rect(this.x * boxSize, this.y * boxSize, snakeSize, snakeSize)
	}
}
