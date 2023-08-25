import { game } from './Game'
import { p } from './sketch'

type Key = 'w' | 'a' | 's' | 'd' | 'r' | undefined

class Input {
	key: Key
	pressedKey: Key

	init() {
		p.keyPressed = () => {
			const buffKey = this.keyCodeToKey(p.keyCode)
			if (buffKey) {
				if (!game.isStarted) {
					game.start()
					this.key = buffKey
				}

				if (buffKey === 'r') {
					game.stop()
					game.init()
				}

				if (
					(buffKey === 'w' && this.pressedKey === 's') ||
					(buffKey === 'a' && this.pressedKey === 'd') ||
					(buffKey === 's' && this.pressedKey === 'w') ||
					(buffKey === 'd' && this.pressedKey === 'a')
				)
					return
				else this.key = buffKey
			}
		}
	}

	keyCodeToKey(keyCode: number): Key | undefined {
		if (keyCode === 87 || keyCode === 38) return 'w'
		else if (keyCode === 65 || keyCode === 37) return 'a'
		else if (keyCode === 83 || keyCode === 40) return 's'
		else if (keyCode === 68 || keyCode === 39) return 'd'
		else if (keyCode === 82) return 'r'
	}
}

export const input = new Input()
