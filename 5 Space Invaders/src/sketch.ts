import p5 from 'p5'

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight)
	}

	p.draw = () => {
		p.background('white')
	}
}

export const p = new p5(sketch)
