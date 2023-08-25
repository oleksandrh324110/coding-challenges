import { boxSize, foodColor, foodSize } from './config'
import { p } from './sketch'

export default class Food {
	x = p.floor(p.random(p.width / boxSize))
	y = p.floor(p.random(p.height / boxSize))

	show() {
		p.fill(foodColor)
		p.rect(this.x * boxSize, this.y * boxSize, foodSize, foodSize)
	}
}
