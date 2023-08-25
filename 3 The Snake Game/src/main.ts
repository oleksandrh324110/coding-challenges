import p5 from 'p5'
import Input from './Input'

const p = new (class p {
	private static instance: p

	constructor() {
		if (p.instance) return p.instance as p5
		return (p.instance = new p5((p: p5) => {
			p.setup = () => {
				p.createCanvas(window.innerWidth, window.innerHeight)

				const input = new Input()
				input.init()
				input.key = 'down'

				const input2 = new Input()
				console.log(input2.key)

				// new Game().init()
			}

			p.draw = () => {
				p.background(0)
			}
		}))
	}
})() as p5

export default p
