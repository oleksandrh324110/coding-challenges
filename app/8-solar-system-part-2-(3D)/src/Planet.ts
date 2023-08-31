import p5 from 'p5'
import p from './sketch'

export default class Planet {
	angle: number
	planets: Planet[]
	v: p5.Vector

	constructor(public radius: number, public distance: number, public orbitSpeed: number) {
		this.angle = p.random(p.TWO_PI)
		this.v = p5.Vector.random3D()
		this.v.mult(this.distance)
	}

	orbit() {
		this.angle += this.orbitSpeed
		if (this.planets) this.planets.forEach(planet => planet.orbit())
	}

	spawnMoons(total: number, level: number) {
		this.planets = Array(total)
			.fill(null)
			.map(() => {
				const r = this.radius / (level * 2)
				const d = (this.radius + r) * 2
				const o = p.random(-0.03, 0.03)

				return new Planet(r, d, o)
			})

		this.planets.forEach(planet => {
			if (level < 2) {
				planet.spawnMoons(p.floor(p.random(3)), level + 1)
			}
		})
	}

	show() {
		p.push()
		const perpendicular = this.v.cross(new p5.Vector(1, 0, 1))

		if (perpendicular.x != 0 || perpendicular.y != 0 || perpendicular.z != 0) {
			p.rotate(this.angle, perpendicular)
		}

		p.fill(255)
		p.translate(this.v.x, this.v.y, this.v.z)
		p.sphere(this.radius)

		if (this.planets) this.planets.forEach(planet => planet.show())

		p.pop()
	}
}
