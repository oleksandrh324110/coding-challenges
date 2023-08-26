import Food from './Food'
import { game } from './Game'
import { input } from './Input'
import { boxSize, columns, raws, snakeColor, snakeSize } from './config'
import { p } from './sketch'

export type Direction = { x: 1; y: 0 } | { x: -1; y: 0 } | { x: 0; y: 1 } | { x: 0; y: -1 }

export default class Snake {
	x = p.floor(p.random(columns))
	y = p.floor(p.random(raws))
	direction: Direction
	tail: { x: number; y: number }[] = []

	update() {
		if (input.key === 'w') this.direction = { x: 0, y: -1 }
		else if (input.key === 'a') this.direction = { x: -1, y: 0 }
		else if (input.key === 's') this.direction = { x: 0, y: 1 }
		else if (input.key === 'd') this.direction = { x: 1, y: 0 }

		this.tail.unshift({ x: this.x, y: this.y })
		this.tail.pop()

		this.x += this.direction.x
		this.y += this.direction.y

		if (this.x < 0 || this.x > columns || this.y < 0 || this.y > raws) return game.restart()

		for (let i = 3; i < this.tail.length; i++) {
			if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
				return game.restart()
			}
		}
	}

	canEat(food: Food) {
		return this.x === food.x && this.y === food.y
	}

	grow() {
		this.tail.push({ x: this.x, y: this.y })
	}

	show() {
		p.fill(snakeColor)
		;[{ x: this.x, y: this.y }, ...this.tail].forEach(({ x, y }) => p.rect(x * boxSize, y * boxSize, snakeSize, snakeSize))
	}
}
