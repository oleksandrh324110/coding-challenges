import p5 from 'p5'

export const p: p5 = new p5((p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight - 1)
	}

	p.draw = () => {
		p.background('#202124')
	}
})
