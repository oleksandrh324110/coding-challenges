import p5 from 'p5'
import Drop from './Drop'

let drops: Drop[] = Array.from({ length: 500 })

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight - 1)

		drops = drops.map(() => new Drop())
	}

	p.draw = () => {
		p.background('#202124')

		for (let i = 0; i < drops.length; i++) {
			drops[i].fall()
			drops[i].show()
		}
	}
}

export const p = new p5(sketch)
