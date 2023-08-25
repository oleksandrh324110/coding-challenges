import p from './main'

export default class Food {
	x: number
	y: number

	constructor() {
		console.log(p.width)

		this.x = p.random(p.width)
	}
}
