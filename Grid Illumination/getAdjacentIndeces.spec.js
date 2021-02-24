const { getAdjacentIndeces } = require("./gridillumination");
describe("getAdjacentIndeces(matrix, point)", () => {
	matrix = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];
	it("should output correctly with a middle case", () => {
		point = [1, 1];
		expect(getAdjacentIndeces(matrix, point)).toEqual([
			[0, 0],
			[0, 1],
			[0, 2],
			[1, 0],
			[1, 2],
			[2, 0],
			[2, 1],
			[2, 2],
		]);
	});
	it("should output correctly with a lower boundary  case 0,0", () => {
		point = [0, 0];
		expect(getAdjacentIndeces(matrix, point)).toEqual([
			[0, 1],
			[1, 0],
			[1, 1],
		]);
	});

	it("should output correctly with an upper boundary case 2,2", () => {
		point = [2, 2];
		expect(getAdjacentIndeces(matrix, point)).toEqual([
			[1, 1],
			[1, 2],
			[2, 1],
		]);
	});
	it("should work on a 4X4 Matrix in upper right edge", () => {
		fourMatrix = [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		];
		point = [0, 3];

		expect(getAdjacentIndeces(matrix, point)).toEqual([
			[0, 2],
			[1, 2],
			[1, 3],
		]);
	});
});
