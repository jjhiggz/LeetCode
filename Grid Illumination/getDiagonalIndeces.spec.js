const { getDiagonalIndeces } = require("./gridillumination");

describe("getDiagonalIndeces", () => {
	it("should basically draw an x if in the middle", () => {
		matrix = [
			[0, 0, 0], // 1, 0
			[0, 0, 0], // 0, 1
			[0, 0, 0], // 1, 1
		];
		point = [1, 1];

		expect(getDiagonalIndeces(matrix, point)).toEqual([
			[0, 0],
			[0, 2],
			[2, 0],
			[2, 2],
		]);
	});
	it("should work in a weird spot on a 4 x 4", () => {
		matrix = [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 0],
		];
		point = [1, 2];

		expect(getDiagonalIndeces(matrix, point)).toEqual([
			[0, 1],
			[0, 3],
			[2, 1],
			[2, 3],
			[3, 0],
		]);
	});
});
