export const monitorRefreshRate = async () =>
	Math.floor(await new Promise(resolve => requestAnimationFrame(t1 => requestAnimationFrame(t2 => resolve(1000 / (t2 - t1))))))
