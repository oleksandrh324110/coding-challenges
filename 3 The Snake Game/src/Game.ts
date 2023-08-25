import Food from './Food'
import Snake from './Snake'

export default class Game {
	private static instance: Game

	snake: Snake
	food: Food
	isStarted: boolean = false

	constructor() {
		if (Game.instance) return Game.instance
		return (Game.instance = this)
	}

	init() {
		this.snake = new Snake()
		this.food = new Food()
	}

	start() {
		if (this.isStarted) return
		this.isStarted = true

		console.log('%cGame started', 'color: green;')
	}
}
