import p5 from 'p5'
import { Cell } from './Cell'

let cells: Cell[] = []

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight)
		p.frameRate(240)

		cells.push(new Cell())
	}

	p.keyPressed = () => {
		if (p.key === ' ') {
			cells.push(new Cell())
		}
	}

	p.mousePressed = () => {
		cells.forEach(cell => {
			if (cell.clicked()) {
				cells = cells.filter(c => c !== cell)

				cells.push(...cell.mitosis())
			}
		})
	}

	p.draw = () => {
		p.background('white')

		const text = `Press SPACE to spawn a new blob`
		p.textSize(16)
		p.text(text, 5, 18)

		cells.forEach(cell => {
			cell.move()
			cell.show()
		})
	}
}

export const p = new p5(sketch)
