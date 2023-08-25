import { boxSize, foodColor, foodSize } from './config'
import { p } from './sketch'

export default class Food {
	x = p.random(p.width / boxSize)
	y = p.random(p.height / boxSize)

	show() {
		p.fill(foodColor)
		p.noStroke()
		p.rect(this.x * boxSize, this.y * boxSize, foodSize, foodSize)
	}
}
