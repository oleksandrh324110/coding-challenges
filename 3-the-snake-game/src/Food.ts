import { boxSize, columns, foodColor, foodSize, raws } from './config'
import { p } from './sketch'

export default class Food {
	x = p.floor(p.random(columns))
	y = p.floor(p.random(raws))

	show() {
		p.fill(foodColor)
		p.rect(this.x * boxSize, this.y * boxSize, foodSize, foodSize)
	}
}
