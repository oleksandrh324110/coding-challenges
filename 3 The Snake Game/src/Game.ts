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

	restart() {
		this.isStarted = false
		this.init()
	}

	update() {
		if (!this.isStarted) return

		this.snake.update()

		if (this.snake.canEat(this.food)) {
			this.snake.grow()
			this.food = new Food()
		}

		input.pressedKey = input.key

		console.log(this.snake.x, this.snake.y)
	}

	show() {
		this.food.show()
		this.snake.show()
	}
}

export const game = new Game()
