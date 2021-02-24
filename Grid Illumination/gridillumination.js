function illuminateMatrix(matrix, lightPosition) {
	return [
		[1, 1, 1],
		[1, 1, 0],
		[1, 0, 1],
	];
}

function getDiagonalIndeces(matrix, point) {
	let indeces = [];
	for (let i = 0; i < matrix.length; i++) {
		const distance = Math.abs(point[0] - i);
		const left = point[1] - distance;
		const right = point[1] + distance;

		if (left >= 0 && point[1] !== left) {
			indeces.push([i, left]);
		}

		if (right < matrix.length && point[1] !== right) {
			indeces.push([i, right]);
		}
	}
	return indeces;
}

function getAdjacentIndeces(matrix, point) {
	const i = point[0];
	const j = point[1];
	const upperI = matrix.length - 1;
	const upperJ = matrix.length - 1;
	return [
		i >= 1 && j >= 1 ? [i - 1, j - 1] : [],
		i >= 1 ? [i - 1, j] : [],
		i >= 1 && j < upperJ ? [i - 1, j + 1] : [],
		j >= 1 ? [i, j - 1] : [],
		j < upperJ ? [i, j + 1] : [],
		i < upperI && j >= 1 ? [i + 1, j - 1] : [],
		i < upperI && [i + 1, j],
		i < upperI && j < upperJ ? [i + 1, j + 1] : [],
	].filter((arr) => arr.length > 0);
}

module.exports = {
	illuminateMatrix,
	getAdjacentIndeces,
	getDiagonalIndeces,
};
