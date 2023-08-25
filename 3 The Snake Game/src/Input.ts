import Game from './Game'
import p from './main'

type Direction = 'up' | 'down' | 'left' | 'right'

export default class Input {
	private static instance: Input

	key: Direction
	pressedKey: Direction

	constructor() {
		if (Input.instance) return Input.instance
		return (Input.instance = this)
	}

	init() {
		p.keyPressed = () => {
			if (this.keyCodeToDirection(p.keyCode)) {
				console.log(this.keyCodeToDirection(p.keyCode))

				new Game().start()
			}
		}
	}

	keyCodeToDirection(keyCode: number): Direction | undefined {
		if (keyCode === 87 || keyCode === 38) return 'up'
		else if (keyCode === 65 || keyCode === 37) return 'left'
		else if (keyCode === 83 || keyCode === 40) return 'down'
		else if (keyCode === 68 || keyCode === 39) return 'right'
	}
}
