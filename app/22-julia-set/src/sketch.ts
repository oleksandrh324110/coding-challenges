import p5 from 'p5'

let maxIterations = 50

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight)
		p.frameRate(240)
		p.pixelDensity(1)

		console.log(p.width * p.height)
	}

	p.draw = () => {
		p.loadPixels()

		for (let x = 0; x < p.width; x++) {
			for (let y = 0; y < p.height; y++) {
				let a = p.map(x, 0, p.width, -1.5, 1.5) * (window.innerWidth / window.innerHeight)
				let b = p.map(y, 0, p.height, -1.5, 1.5)

				for (var n = 0; n < maxIterations; n++) {
					const aa = a * a - b * b
					const bb = 2 * a * b

					if (p.abs(aa + bb) > 16) break

					a = aa + p.map(p.mouseX, 0, p.width, -2, 2)
					b = bb + p.map(p.mouseY, 0, p.height, -2, 2)
				}

				let bright = p.map(n, 0, maxIterations, 0, 255)
				if (n === maxIterations) bright = 0

				const pix = (x + y * p.width) * 4
				p.pixels[pix + 0] = bright
				p.pixels[pix + 1] = bright
				p.pixels[pix + 2] = bright
				p.pixels[pix + 3] = 255
			}
		}

		p.updatePixels()
	}
}

export default new p5(sketch)
