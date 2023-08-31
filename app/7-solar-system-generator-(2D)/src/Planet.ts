import { p } from './sketch'

export default class Planet {
	angle: number
	planets: Planet[]

	constructor(public radius: number, public distance: number, public orbitSpeed: number) {
		this.angle = p.random(p.TWO_PI)
	}

	orbit() {
		this.angle += this.orbitSpeed
		if (this.planets) this.planets.forEach(planet => planet.orbit())
	}

	spawnMoons(total: number, level: number) {
		this.planets = Array(total)
			.fill(null)
			.map(() => new Planet(p.random(10, 30) / level, (this.radius + p.random(100, 200)) / level, p.random(-0.05, 0.05)))

		this.planets.forEach((planet, i) => {
			if (level < 3) {
				planet.spawnMoons(p.floor(p.random(0, 4)), level + 1)
			}
		})
	}

	show() {
		p.push()

		p.fill(255, 100)
		p.rotate(this.angle)
		p.translate(this.distance, 0)
		p.circle(0, 0, this.radius * 2)

		if (this.planets) this.planets.forEach(planet => planet.show())

		p.pop()
	}
}
