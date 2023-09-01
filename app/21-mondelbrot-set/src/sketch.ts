import p5 from 'p5'

const maxIterations = 100

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight)
		p.frameRate(240)
		p.pixelDensity(1)
	}

	p.draw = () => {
		p.loadPixels()

		for (let x = 0; x < p.width; x++) {
			for (let y = 0; y < p.height; y++) {
				let a = p.map(x, 0, p.width, -1.5, 1.5) * (window.innerWidth / window.innerHeight)
				let b = p.map(y, 0, p.height, -1.5, 1.5)

				const ca = a
				const cb = b

				let n = 0
				for (; n < maxIterations; n++) {
					const aa = a * a - b * b
					const bb = 2 * a * b

					if (p.abs(aa + bb) > 16) break

					a = aa + ca
					b = bb + cb
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
		p.noLoop()
	}
}

export default new p5(sketch)
