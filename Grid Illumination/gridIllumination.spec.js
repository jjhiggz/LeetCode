const { illuminateMatrix } = require("./gridillumination");

describe.skip("illuminateMatrix", () => {
	it("should output the correct solution for inputs", () => {});
	matrix = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];
	input = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];
	output = [
		[1, 1, 1],
		[1, 1, 0],
		[1, 0, 1],
	];
	expect(illuminateMatrix(matrix, input)).toEqual(output);
});
