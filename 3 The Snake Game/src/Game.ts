import Food from './Food'
import { input } from './Input'
import Snake from './Snake'

class Game {
	snake: Snake
	food: Food
	isStarted: boolean = false

	init() {
		this.snake = new Snake()
		this.food = new Food()
	}

	start() {
		this.isStarted = true
	}

	stop() {
		this.isStarted = false
	}

	update() {
		if (!this.isStarted) return

		this.snake.update()

		input.pressedKey = input.key
	}

	show() {
		this.food.show()
		this.snake.show()
	}
}

export const game = new Game()
