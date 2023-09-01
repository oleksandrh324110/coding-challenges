import p5 from 'p5'

const sketch = (p: p5) => {
	let angle = p.PI / 4
	let length = 100

	const branch = (length: number) => {
		if (length < 4) return

		p.line(0, 0, 0, -length)
		p.translate(0, -length)

		p.push()
		p.rotate(angle)
		branch(length * (2 / 3))
		p.pop()

		p.push()
		p.rotate(-angle)
		branch(length * (2 / 3))
		p.pop()
	}

	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight)
		p.frameRate(240)
	}

	p.draw = () => {
		p.background(51)
		p.stroke(255)
		p.translate(p.width / 2, p.height * 0.85)

		angle = p.mouseX ? p.map(p.mouseX, 0, p.width, 0, p.PI) : angle
		length = p.mouseY ? p.map(p.mouseY, p.height, 0, 0, 200) : length

		branch(length)
	}
}

export default new p5(sketch)
