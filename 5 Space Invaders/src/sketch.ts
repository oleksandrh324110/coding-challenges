import p5 from 'p5'

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight - 1)
	}

	p.draw = () => {
		p.background('#202124')
	}
}

export const p = new p5(sketch)
